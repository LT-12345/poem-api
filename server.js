const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const poems = [
  { content: "自别后遥山隐隐，更那堪远水粼粼。", author: "王实甫", origin: "十二月过尧民歌·别情", category: "古诗文-抒情-离别", c1: "gushiwen", c2: "shuqing", c3: "libie" },
  { content: "会当凌绝顶，一览众山小。", author: "杜甫", origin: "望岳", category: "古诗文-山水-泰山", c1: "gushiwen", c2: "shanshui", c3: "taishan" },
  { content: "桃花潭水深千尺，不及汪伦送我情。", author: "李白", origin: "赠汪伦", category: "古诗文-友情-送别", c1: "gushiwen", c2: "youqing", c3: "songbie" },
  { content: "海内存知己，天涯若比邻。", author: "王勃", origin: "送杜少府之任蜀州", category: "古诗文-友情-送别", c1: "gushiwen", c2: "youqing", c3: "songbie" },
  { content: "人生自古谁无死，留取丹心照汗青。", author: "文天祥", origin: "过零丁洋", category: "古诗文-励志-爱国", c1: "gushiwen", c2: "aiguo", c3: "lizhi" },
  { content: "床前明月光，疑是地上霜。", author: "李白", origin: "静夜思", category: "古诗文-思乡", c1: "gushiwen", c2: "sixiang", c3: "sixiang" },
  { content: "莫愁前路无知己，天下谁人不识君。", author: "高适", origin: "别董大", category: "古诗文-友情-送别", c1: "gushiwen", c2: "youqing", c3: "songbie" },
  { content: "两情若是久长时，又岂在朝朝暮暮。", author: "秦观", origin: "鹊桥仙", category: "古诗文-爱情", c1: "gushiwen", c2: "aiqing", c3: "xiangsi" },
  { content: "采菊东篱下，悠然见南山。", author: "陶渊明", origin: "饮酒", category: "古诗文-田园", c1: "gushiwen", c2: "tianyuan", c3: "ziran" },
  { content: "大漠孤烟直，长河落日圆。", author: "王维", origin: "使至塞上", category: "古诗文-边塞", c1: "gushiwen", c2: "biansai", c3: "jiangshan" },
  { content: "劝君更尽一杯酒，西出阳关无故人。", author: "王维", origin: "送元二使安西", category: "古诗文-送别", c1: "gushiwen", c2: "songbie", c3: "youqing" },
  { content: "春蚕到死丝方尽，蜡炬成灰泪始干。", author: "李商隐", origin: "无题", category: "古诗文-爱情", c1: "gushiwen", c2: "aiqing", c3: "qinggan" },
  { content: "风萧萧兮易水寒，壮士一去兮不复还。", author: "佚名", origin: "荆轲歌", category: "古诗文-壮志", c1: "gushiwen", c2: "zhizhi", c3: "yishi" },
  { content: "黄河远上白云间，一片孤城万仞山。", author: "王之涣", origin: "凉州词", category: "古诗文-边塞", c1: "gushiwen", c2: "biansai", c3: "shanshui" },
  { content: "人生若只如初见，何事秋风悲画扇。", author: "纳兰性德", origin: "木兰词", category: "古诗文-爱情", c1: "gushiwen", c2: "aiqing", c3: "yishi" },
  { content: "举头望明月，低头思故乡。", author: "李白", origin: "静夜思", category: "古诗文-思乡", c1: "gushiwen", c2: "sixiang", c3: "guxiang" },
  { content: "问君能有几多愁？恰似一江春水向东流。", author: "李煜", origin: "虞美人", category: "古诗文-抒情", c1: "gushiwen", c2: "shuqing", c3: "beiqing" },
  { content: "十年生死两茫茫，不思量，自难忘。", author: "苏轼", origin: "江城子", category: "古诗文-悼亡", c1: "gushiwen", c2: "dao", c3: "siqing" },
  { content: "明月松间照，清泉石上流。", author: "王维", origin: "山居秋暝", category: "古诗文-山水", c1: "gushiwen", c2: "shanshui", c3: "ziran" },
  { content: "不畏浮云遮望眼，自缘身在最高层。", author: "王安石", origin: "登飞来峰", category: "古诗文-励志", c1: "gushiwen", c2: "lizhi", c3: "zishang" },
  { content: "谁言寸草心，报得三春晖。", author: "孟郊", origin: "游子吟", category: "古诗文-亲情", c1: "gushiwen", c2: "qin", c3: "muyi" },
  { content: "千山鸟飞绝，万径人踪灭。", author: "柳宗元", origin: "江雪", category: "古诗文-自然", c1: "gushiwen", c2: "ziran", c3: "jingjie" },
  { content: "黑云压城城欲摧，甲光向日金鳞开。", author: "李贺", origin: "雁门太守行", category: "古诗文-战争", c1: "gushiwen", c2: "zhanzheng", c3: "haoran" },
  { content: "孤帆远影碧空尽，唯见长江天际流。", author: "李白", origin: "黄鹤楼送孟浩然之广陵", category: "古诗文-送别", c1: "gushiwen", c2: "songbie", c3: "shanshui" },
  { content: "天生我材必有用，千金散尽还复来。", author: "李白", origin: "将进酒", category: "古诗文-豪放", c1: "gushiwen", c2: "haofang", c3: "lizhi" },
  { content: "忽如一夜春风来，千树万树梨花开。", author: "岑参", origin: "白雪歌送武判官归京", category: "古诗文-边塞", c1: "gushiwen", c2: "biansai", c3: "chunxue" },
  { content: "烽火连三月，家书抵万金。", author: "杜甫", origin: "春望", category: "古诗文-战争", c1: "gushiwen", c2: "zhanzheng", c3: "aiguo" },
  { content: "但愿人长久，千里共婵娟。", author: "苏轼", origin: "水调歌头", category: "古诗文-思念", c1: "gushiwen", c2: "sinian", c3: "shiqing" },
  { content: "人生如梦，一尊还酹江月。", author: "苏轼", origin: "念奴娇·赤壁怀古", category: "古诗文-怀古", c1: "gushiwen", c2: "huaigu", c3: "jiangshan" },
  { content: "云想衣裳花想容，春风拂槛露华浓。", author: "李白", origin: "清平调", category: "古诗文-咏物", c1: "gushiwen", c2: "yongwu", c3: "nvzi" }
]

app.get('/api/shici', (req, res) => {
  const randomPoem = poems[Math.floor(Math.random() * poems.length)]
  res.json({
    request_id: Date.now().toString(),
    success: true,
    message: "success",
    code: 200,
    data: randomPoem,
    time: Math.floor(Date.now() / 1000),
    usage: 0
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
