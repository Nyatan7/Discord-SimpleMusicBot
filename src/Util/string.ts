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

const normalizeTemplate = [
  {from: /０/g, to: "0"} as const,
  {from: /１/g, to: "1"} as const,
  {from: /２/g, to: "2"} as const,
  {from: /３/g, to: "3"} as const,
  {from: /４/g, to: "4"} as const,
  {from: /５/g, to: "5"} as const,
  {from: /６/g, to: "6"} as const,
  {from: /７/g, to: "7"} as const,
  {from: /８/g, to: "8"} as const,
  {from: /９/g, to: "9"} as const,
  // eslint-disable-next-line no-irregular-whitespace
  {from: /　/g, to: " "} as const,
  {from: /！/g, to: "!"} as const,
  {from: /？/g, to: "?"} as const,
  {from: /ｂ/g, to: "b"} as const,
  {from: /ｃ/g, to: "c"} as const,
  {from: /ｄ/g, to: "d"} as const,
  {from: /ｆ/g, to: "f"} as const,
  {from: /ｇ/g, to: "g"} as const,
  {from: /ｈ/g, to: "h"} as const,
  {from: /ｊ/g, to: "j"} as const,
  {from: /ｋ/g, to: "k"} as const,
  {from: /ｌ/g, to: "l"} as const,
  {from: /ｍ/g, to: "m"} as const,
  {from: /ｎ/g, to: "n"} as const,
  {from: /ｐ/g, to: "p"} as const,
  {from: /ｑ/g, to: "q"} as const,
  {from: /ｒ/g, to: "r"} as const,
  {from: /ｓ/g, to: "s"} as const,
  {from: /ｔ/g, to: "t"} as const,
  {from: /ｖ/g, to: "v"} as const,
  {from: /ｗ/g, to: "w"} as const,
  {from: /ｘ/g, to: "x"} as const,
  {from: /ｙ/g, to: "y"} as const,
  {from: /ｚ/g, to: "z"} as const,
  {from: /＞/g, to: ">"} as const,
] as const;

/**
 * 文字列を正規化します
 */
export function NormalizeText(rawText:string){
  let result = rawText;
  normalizeTemplate.forEach(reg => {
    result = result.replace(reg.from, reg.to);
  });
  return result;
}
