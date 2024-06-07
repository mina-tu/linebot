import axios from 'axios'
import { distance } from '../unitl/distance.js'
import flex from '../card/card.js'

export default async event => {
  try {
    const { data } = await axios.post('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6', new URLSearchParams({
      title: '',
      locationName: '',
      time: '',
      endTime: '',
      price: ''
    }))

    if (process.env.DEBUG === 'true') {
      console.log('API 回傳資料：', data)
    }

    const replies = data
      .map(d => {
        d.distance = distance(d.latitude, d.longitude, event.message.latitude, event.message.longitude, 'k')
        return d
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4)
      .map(d => {
        const f = flex()
        f.body.contents[0].text = d.title
        if (process.env.DEBUG === 'true') {
          console.log('展覽資訊：', d.showInfo[0])
        }
        f.body.contents[1].contents[0].contents[1].text = d.showInfo[0].locationName || '未知地點'
        f.body.contents[1].contents[1].contents[1].text = d.showInfo[0].time || '未知時間'
        f.body.contents[1].contents[2].contents[1].text = d.showInfo[0].endTime || '未知結束時間'
        f.body.contents[1].contents[3].contents[1].text = d.showInfo[0].price || '免費'

        return f
      })

    const result = await event.reply({
      type: 'flex',
      altText: '展覽查詢結果',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })

    if (process.env.DEBUG === 'true') {
      console.log('回應結果：', result)
    }
  } catch (error) {
    console.error('處理錯誤：', error)
    event.reply('發生錯誤，請稍後再試')
  }
}
