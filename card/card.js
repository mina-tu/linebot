export default () => {
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "展覽標題",
          "weight": "bold",
          "size": "xl",
          "color": "#5F6636"
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "lg",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "地點",
                  "color": "#787964",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "地點資訊",
                  "wrap": true,
                  "color": "#9C8780",
                  "size": "sm",
                  "flex": 5
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "開始時間",
                  "color": "#787964",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "開始時間資訊",
                  "wrap": true,
                  "color": "#9C8780",
                  "size": "sm",
                  "flex": 5
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "結束時間",
                  "color": "#787964",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "結束時間資訊",
                  "wrap": true,
                  "color": "#9C8780",
                  "size": "sm",
                  "flex": 5
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": "票價",
                  "color": "#787964",
                  "size": "sm",
                  "flex": 1
                },
                {
                  "type": "text",
                  "text": "票價資訊",
                  "wrap": true,
                  "color": "#9C8780",
                  "size": "sm",
                  "flex": 5
                }
              ]
            }
          ]
        }
      ],
      "backgroundColor": "#EEEBDD"
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [],
      "flex": 0,
      "backgroundColor": "#EEEBDD"
    }
  }
}
