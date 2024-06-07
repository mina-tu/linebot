import 'dotenv/config'
import linebot from 'linebot'
import exhibition from './exhibition/exhibition.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log('收到訊息事件：', event)
  }
  if (event.message.type === 'location') {
    exhibition(event)
  } else {
    event.reply('請傳送位置訊息以獲取展覽資訊')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
