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

import type { Cache } from "./base";
import type { exportableYouTube } from "..";
import type { UrlStreamInfo } from "../../audiosource";
import type { InfoData } from "play-dl";

import { video_info } from "play-dl";

import { Strategy } from "./base";
import { Util } from "../../../Util";

type playDl = "playDl";
const playDl:playDl = "playDl";

export class playDlStrategy extends Strategy<Cache<playDl, InfoData>, InfoData> {
  get cacheType(){
    return playDl;
  }

  async getInfo(url:string){
    this.useLog();
    const t = Util.time.timer.start(`YouTube(Strategy#${this.priority})#getInfo`);
    let info = null as InfoData;
    try{
      info = await video_info(url);
    }
    finally{
      t.end(this.logger);
    }
    return {
      data: this.mapToExportable(url, info),
      cache: {
        type: playDl,
        data: info,
      }
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async fetch(url:string, forceUrl:boolean = false, cache?: Cache<any, any>){
    this.useLog();
    const t = Util.time.timer.start(`YouTube(Strategy#${this.priority})#fetch`);
    let info = null as InfoData;
    try{
      const cacheAvailable = cache?.type === playDl && cache.data;
      this.logger(`[AudioSource:youtube] ${cacheAvailable ? "using cache without obtaining" : "obtaining info"}`);
      info = cacheAvailable || await video_info(url);
    }
    finally{
      t.end(this.logger);
    }
    const partialResult = {
      info: this.mapToExportable(url, info),
      relatedVideos: null as exportableYouTube[],
    };
    if(info.LiveStreamData.isLive){
      return {
        ...partialResult,
        stream: {
          type: "url",
          url: info.LiveStreamData.hlsManifestUrl,
        } as UrlStreamInfo
      };
    }else{
      const format = info.format.filter(f => f.mimeType.startsWith("audio"));
      if(format.length === 0) throw new Error("no format found!");
      format.sort((fa, fb) => fb.bitrate - fa.bitrate);
      return {
        ...partialResult,
        stream: {
          type: "url",
          url: format[0].url,
          streamType: (format[0] as any)["container"] === "webm" && (format[0] as any)["codec"] === "opus" ? "webm" : undefined,
        } as UrlStreamInfo
      };
    }
  }

  protected mapToExportable(url:string, info:InfoData):exportableYouTube{
    if(info.video_details.upcoming) throw new Error("This video is still in upcoming");
    return {
      url,
      title: info.video_details.title,
      description: info.video_details.description,
      length: Number(info.video_details.durationInSec),
      channel: info.video_details.channel?.name || "不明",
      channelUrl: info.video_details.channel?.url || "",
      thumbnail: info.video_details.thumbnails[0].url,
      isLive: info.video_details.live,
    };
  }
}

export default playDlStrategy;
