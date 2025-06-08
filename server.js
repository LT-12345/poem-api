const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/api/shici', (req, res) => {
  res.json({
    request_id: Date.now().toString(),
    success: true,
    message: "success",
    code: 200,
    data: {
      content: "自别后遥山隐隐，更那堪远水粼粼。",
      author: "王实甫",
      origin: "十二月过尧民歌·别情",
      category: "古诗文-抒情-离别",
      c1: "gushiwen",
      c2: "shuqing",
      c3: "libie"
    },
    time: Math.floor(Date.now() / 1000),
    usage: 0
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
