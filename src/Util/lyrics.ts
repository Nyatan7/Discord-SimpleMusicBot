/*
 * Copyright 2021-2023 mtripg6666tdr
 * 
 * This file is part of mtripg6666tdr/Discord-SimpleMusicBot. 
 * (npm package name: 'discord-music-bot' / repository url: <https://github.com/mtripg6666tdr/Discord-SimpleMusicBot> )
 * 
 * mtripg6666tdr/Discord-SimpleMusicBot is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the Free Software Foundation, 
 * either version 3 of the License, or (at your option) any later version.
 *
 * mtripg6666tdr/Discord-SimpleMusicBot is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with mtripg6666tdr/Discord-SimpleMusicBot. 
 * If not, see <https://www.gnu.org/licenses/>.
 */

import * as Genius from "genius-lyrics";
import { decode } from "html-entities";
import { convert } from "html-to-text";

import { DownloadText } from "./web";
import { DefaultAudioThumbnailURL } from "../definition";

export async function GetLyrics(keyword:string):Promise<songInfo>{
  try{
    const client = new Genius.Client();
    const song = (await client.songs.search(keyword))[0];
    return {
      artist: song.artist.name,
      artwork: song.image,
      lyric: await song.lyrics(),
      title: song.title,
      url: song.url
    };
  }
  catch(e){
    // Fallback to utaten
    if(!process.env.CSE_KEY) throw e;
    const data = JSON.parse(await DownloadText("https://customsearch.googleapis.com/customsearch/v1?cx=89ebccacdc32461f2&key=" + process.env.CSE_KEY + "&q=" + encodeURIComponent(keyword))) as CSE_Result;
    const items = data.items?.filter(i => new URL(i.link).pathname.startsWith("/lyric/"));
    if(!items || items.length === 0){
      throw new Error("No lyric was found");
    }
    const url = items[0].link;
    let lyric = await DownloadText(url, {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Cookie": "lyric_ruby=off;",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
    });
    let doc = "";
    [doc, lyric] = lyric.split("<div class=\"hiragana\" >");
    lyric = lyric.split("</div>")[0]
      .replace(/<span class="rt rt_hidden">.+?<\/span>/g, "")
      .replace(/\n/g, "")
      .replace(/<br \/>/g, "<br>")
      .replace(/[\r\n]{2}/g, "<br>")
    ;
    lyric = convert(lyric);
    const match = doc.match(/<meta name="description" content="(?<artist>.+?)が歌う(?<title>.+)の歌詞ページ.+です。.+">/);
    const artwork = doc.match(/<img src="(?<url>.+?)" alt=".+? 歌詞" \/>/).groups?.url;
    return {
      lyric: decode(lyric),
      artist: decode(match.groups.artist),
      title: decode(match.groups.title),
      artwork: artwork.startsWith("http") ? artwork : DefaultAudioThumbnailURL,
      url: url
    };
  }
}

type songInfo = {
  lyric:string,
  artist:string,
  title:string,
  artwork:string,
  url:string,
};

interface CSE_Result {
  kind: string;
  url: URL;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

interface Context {
  title: string;
}

interface Item {
  kind: any;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: any;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

interface Pagemap {
  cse_thumbnail?: CSEThumbnail[];
  metatags: { [key: string]: string }[];
  cse_image: CSEImage[];
  listitem?: Listitem[];
  Article?: Article[];
}

interface Article {
  datePublished: string;
  image: string;
  itemtype: string;
  description: string;
  dateModified: string;
  headline: string;
}

interface CSEImage {
  src: string;
}

interface CSEThumbnail {
  src: string;
  width: string;
  height: string;
}

interface Listitem {
  item: string;
  name: string;
  position: string;
}

interface Queries {
  request: Request[];
}

interface Request {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

interface URL {
  type: string;
  template: string;
}
