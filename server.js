import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000

const song = [
    {
      id: 1,
      title: "사랑에 연습이 있었다면",
      singer: "임재현",
      rating: 5,
      lyrics: `
  사랑에 연습이 있었다면
  우리는 달라졌을까
  내가 널 만난 시간 혹은 그 장소
  상황이 달랐었다면 우린 맺어졌을까
  하필 넌 왜 내가 그렇게 철없던 시절에
  나타나서 그렇게 예뻤니
  너처럼 좋은여자가 왜 날 만나서 그런
  과분한 사랑 내게 줬는지
      `,
    },
    {
      id: 2,
      title: "사건의 지평선",
      singer: "윤하",
      rating: 3,
      lyrics: null,
    },
    {
      id: 3,
      title: "사랑은 늘 도망가",
      singer: "임영웅",
      rating: 3,
      lyrics: null,
    },
  ]

const db = mysql.createConnection({
	host: 'svc.sel5.cloudtype.app',
    port: 31748,
	user: 'root',
	password: 'mysql1234',
	database: 'songdb',
})

db.connect()

app.get('/', (req, res) => {
    res.json({ result: '성공'})
})

app.get('/song', (req, res) => {
    res.json(song)
})

app.listen(port, () => {
    console.log(`서버 실행됨 (port ${port})`)
})