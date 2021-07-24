import * as discord from "discord.js";
import { CommandArgs, CommandInterface } from ".";
import { CancellationPending, YmxFormat, YmxVersion } from "../definition";
import { DownloadText, log } from "../Util/util";

export default class Import implements CommandInterface {
  name = "インポート";
  alias = ["import"];
  description = "指定されたメッセージに添付されたキューからインポートします。exportコマンドで出力されたファイルが添付されたメッセージのURL、あるいはキューの埋め込みのあるメッセージのURLを引数として指定してください。";
  unlist = false;
  category = "playlist";
  examples = "import https://discord.com/channels/...";
  usage = "インポート <インポート元のURL>"
  async run(message:discord.Message, options:CommandArgs){
    options.updateBoundChannel(message);
    if(options.rawArgs === ""){
      message.channel.send("❓インポート元のキューが埋め込まれたメッセージのURLを引数として渡してください。").catch(e => log(e, "error"));
      return;
    }
    let force = false;
    let url = options.rawArgs;
    if(options.args.length >= 2 && options.args[0] === "force" && message.author.id === "593758391395155978"){
      force = true;
      url = options.args[1];
    }
    if(url.startsWith("http://discord.com/channels/") || url.startsWith("https://discord.com/channels/")){
      let smsg;
      const cancellation = new CancellationPending();
      options.cancellations.push(cancellation);
      try{
        smsg = await message.channel.send("🔍メッセージを取得しています...");
        const ids = url.split("/");
        if(ids.length < 2){
          await smsg.edit("🔗指定されたURLは無効です");
        }
        const msgId = ids[ids.length - 1];
        const chId = ids[ids.length - 2];
        const ch = await options.client.channels.fetch(chId);
        const msg = await (ch as discord.TextChannel).messages.fetch(msgId);
        if(msg.author.id !== options.client.user.id && !force){
          await smsg.edit("❌ボットのメッセージではありません");
          return;
        }
        const embed = msg.embeds.length > 0 ? msg.embeds[0] : null;
        const attac = msg.attachments.size > 0 ? msg.attachments.first() : null;
        if(embed && embed.title.endsWith("のキュー")){
          const fields = embed.fields;
          for(let i = 0; i < fields.length; i++){
            const lines = fields[i].value.split("\r\n");
            const tMatch = lines[0].match(/\[(?<title>.+)\]\((?<url>.+)\)/);
            await options.data[message.guild.id].Queue.AutoAddQueue(options.client, tMatch.groups.url, message.member, "unknown");
            await smsg.edit(fields.length + "曲中" + (i+1) + "曲処理しました。");
            if(cancellation.Cancelled) break;
          }
          if(!cancellation.Cancelled){
            await smsg.edit("✅" + fields.length + "曲を処理しました");
          }else {
            await smsg.edit("✅キャンセルされました");
          }
        }else if(attac && attac.name.endsWith(".ymx")){
          const raw = JSON.parse(await DownloadText(attac.url)) as YmxFormat;
          if(raw.version !== YmxVersion){
            await smsg.edit("✘指定されたファイルはバージョンに互換性がないためインポートできません(現行:v" + YmxVersion + "; ファイル:v" + raw.version + ")");
            return;
          }
          const qs = raw.data;
          for(let i = 0; i < qs.length; i++){
            await options.data[message.guild.id].Queue.AutoAddQueue(options.client, qs[i].url, message.member, "unknown", false, false, null, null, qs[i]);
            if(qs.length <= 10 || i % 10 == 9){
              await smsg.edit(qs.length + "曲中" + (i+1) + "曲処理しました。");
            }
            if(cancellation.Cancelled) break;
          }
          if(!cancellation.Cancelled){
            await smsg.edit("✅" + qs.length + "曲を処理しました");
          }else {
            await smsg.edit("✅キャンセルされました");
          }
        }else{
          await smsg.edit("❌キューの埋め込みもしくは添付ファイルが見つかりませんでした");
          return;
        }
      }
      catch(e){
        log(e, "error");
        smsg?.edit("😭失敗しました...");
      }
      finally{
        options.cancellations.splice(options.cancellations.findIndex(c => c === cancellation), 1);
      }
    }else{
      message.channel.send("❌Discordのメッセージへのリンクを指定してください").catch(e => log(e, "error"));
    }
  }
}