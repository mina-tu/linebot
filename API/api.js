import axios from 'axios'

export const lineReplyMsg = (body) => axios.post('https://api.line.me/v2/bot/message/reply', body, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`
  }
})
