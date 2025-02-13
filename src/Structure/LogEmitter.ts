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

import type { LogLevels } from "../Util/log";

import { EventEmitter } from "stream";

import { Util } from "../Util";

export abstract class LogEmitter extends EventEmitter {
  private _tag:string = "";
  private _guildId:string = "";

  get guildId(){
    return this._guildId;
  }

  /**
   * ログに使用するタグを設定します
   * @param tag タグ
   */
  setTag(tag:string){
    this._tag = tag;
  }
  
  /**
   * ログに使用するサーバーIDを設定します（存在する場合）
   * @param id id
   */
  setGuildId(id:string){
    this._guildId = id;
  }

  /**
   * ログを出力します
   * @param message メッセージ
   */
  Log(message:any, level?:LogLevels){
    if(this._tag === "") throw new Error("Tag has not been specified");
    Util.logger.log(`[${this._tag}${this._guildId !== "" ? `/${this._guildId}` : ""}] ${typeof message === "string" ? message : Util.general.StringifyObject(message)}`, level);
  }
}
