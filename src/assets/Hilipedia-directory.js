/* eslint-disable no-tabs */
const DICTIONARY = {
  dictionary_proper: {
    //	[单词的格式]
    //	"丘丘语单词":{
    //		[{"pos":"单词词性", "zh":"中文释义"}],
    //		"eg":[{"hil":"丘丘语词组", "zh":"中文释义", "comment":"对单词的解读"}],
    //		"origin":词源"
    //		"status":释义的确定性
    //	}
    aba: {
      def: [
        {
          pos: 'prep',
          zh: '在……之前'
        }
      ],
      eg: [],
      status: 1
    },
    beru: {
      def: [
        {
          pos: 'v',
          zh: '说话'
        }
      ],
      eg: [],
      origin: '日语 しゃべる(shyaberu) 说话',
      status: 1
    },
    biadam: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    biaodomu: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    biat: {
      def: [
        {
          pos: 'int',
          zh: '它妈的'
        }
      ],
      eg: [],
      origin: "俄语 блядь(blyad') 他妈的",
      status: 1
    },
    boya: {
      def: [
        {
          pos: 'n',
          zh: '颜色'
        }
      ],
      eg: [
        {
          hil: 'celi boya',
          zh: '红色'
        },
        {
          hil: 'unu boya',
          zh: '黄色'
        },
        {
          hil: 'gusha boya',
          zh: '绿色'
        },
        {
          hil: 'lata boya',
          zh: '蓝色'
        },
        {
          hil: 'nini boya',
          zh: '白色'
        },
        {
          hil: 'nunu / sama boya',
          zh: '黑色'
        }
      ],
      status: 3
    },
    buka: {
      def: [
        {
          pos: 'n',
          zh: '肚子'
        }
      ],
      eg: [],
      status: 1
    },
    celi: {
      def: [
        {
          pos: 'n',
          zh: '火'
        },
        {
          pos: 'n',
          zh: '热的东西'
        },
        {
          pos: 'adj',
          zh: '热的'
        },
        {
          pos: 'n',
          zh: '一天; 日子'
        }
      ],
      eg: [],
      origin: '道本语 seli 火',
      status: 3
    },
    'celi lata': {
      def: [
        {
          pos: 'n',
          zh: '又冷又热的东西'
        },
        {
          pos: 'n',
          zh: '萤火虫; 星星; 月亮'
        }
      ],
      eg: [],
      status: 3
    },
    'celi upa': {
      def: [
        {
          pos: 'n',
          zh: '太阳'
        }
      ],
      eg: [],
      status: 3
    },
    dada: {
      def: [
        {
          pos: 'adj',
          zh: '良好的; 最强的'
        },
        {
          pos: 'int',
          zh: '表示接受或答应'
        },
        {
          pos: 'adv',
          zh: '很; 十分; 最'
        }
      ],
      eg: [],
      origin: '协和语 大大(da da) 非常',
      status: 2
    },
    Dadaupa: {
      def: [
        {
          pos: 'place',
          zh: '达达乌帕谷'
        }
      ],
      eg: [],
      status: 2
    },
    'dada upa': {
      def: [
        {
          pos: 'n',
          zh: '高山'
        }
      ],
      eg: [],
      status: 3
    },
    dala: {
      def: [
        {
          pos: 'pron',
          zh: '何人'
        },
        {
          pos: 'pron',
          zh: '何物'
        },
        {
          pos: 'pron',
          zh: '何处'
        }
      ],
      eg: [],
      status: 1
    },
    domu: {
      def: [
        {
          pos: 'v',
          zh: '聚集'
        },
        {
          pos: 'v',
          zh: '躺下'
        }
      ],
      eg: [],
      status: 1
    },
    du: {
      def: [
        {
          pos: 'n',
          zh: '二'
        }
      ],
      eg: [],
      origin: '拉丁语 duo 二',
      status: 3
    },
    dudu: {
      def: [
        {
          pos: 'n',
          zh: '四'
        }
      ],
      eg: [],
      origin: '道本语 tu tu 四',
      status: 3
    },
    eleka: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    guru: {
      def: [
        {
          pos: 'adj',
          zh: '饿得咕咕叫的'
        }
      ],
      eg: [],
      status: 1
    },
    gusha: {
      def: [
        {
          pos: 'n',
          zh: '草; 植物; 水果; 谷物'
        },
        {
          pos: 'n',
          zh: '不喜欢的东西'
        },
        {
          pos: 'adj',
          zh: '喜好上不好的'
        }
      ],
      eg: [
        {
          hil: 'kucha gusha',
          zh: '种子'
        },
        {
          hil: 'unu gusha',
          zh: '种子'
        }
      ],
      status: 2
    },
    homu: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    ika: {
      def: [
        {
          pos: 'adj',
          zh: '坏的'
        }
      ],
      eg: [],
      origin: '道本语 ike 坏的',
      status: 3
    },
    in: {
      def: [
        {
          pos: 'prep',
          zh: '在里面'
        }
      ],
      eg: [],
      origin: '英语 in 在里面',
      status: 0
    },
    ka: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    kucha: {
      def: [
        {
          pos: 'adj',
          zh: '弱; 弱小'
        }
      ],
      eg: [],
      status: 3
    },
    kundala: {
      def: [
        {
          pos: 'n',
          zh: '弱者'
        }
      ],
      eg: [],
      status: 1
    },
    kuzi: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    lata: {
      def: [
        {
          pos: 'n',
          zh: '冰'
        }
      ],
      eg: [],
      status: 1
    },
    'lata movo': {
      def: [
        {
          pos: 'n',
          zh: '水'
        }
      ],
      eg: [],
      status: 1
    },
    lawa: {
      def: [
        {
          pos: 'n',
          zh: '首领; 头目'
        }
      ],
      eg: [],
      status: 3
    },
    mani: {
      def: [
        {
          pos: 'n',
          zh: '五'
        },
        {
          pos: 'n',
          zh: '手'
        },
        {
          pos: 'v',
          zh: '劳动'
        },
        {
          pos: 'v',
          zh: '给予'
        }
      ],
      eg: [],
      origin: '拉丁语 manus 手',
      status: 1
    },
    mi: {
      def: [
        {
          pos: 'pron',
          zh: '我'
        }
      ],
      eg: [],
      status: 1
    },
    mimi: {
      def: [
        {
          pos: 'pron',
          zh: '我们'
        }
      ],
      eg: [],
      status: 1
    },
    mita: {
      def: [
        {
          pos: 'n',
          zh: '肉'
        },
        {
          pos: 'n',
          zh: '喜欢的东西'
        },
        {
          pos: 'adj',
          zh: '动物身上出的; 喜好上好的; 好吃的'
        }
      ],
      eg: [
        {
          hil: 'mita lata movo',
          zh: '鱼肉',
          comment: '水里的肉'
        }
      ],
      status: 2
    },
    mitino: {
      def: [
        {
          pos: 'n',
          zh: '丘丘暴徒'
        }
      ],
      eg: [],
      status: 1
    },
    mosi: {
      def: [
        {
          pos: 'n',
          zh: '食物'
        },
        {
          pos: 'v',
          zh: '吃'
        }
      ],
      eg: [
        {
          hil: 'Mosi mita',
          zh: '开心'
        },
        {
          hil: 'Mosi gusha',
          zh: '伤心',
          comment: '丘丘人喜欢吃肉而不喜欢吃蔬菜。'
        },
        {
          hil: 'mosi dada',
          zh: '午餐',
          comment: '好吃的饭谓之“午饭”'
        },
        {
          hil: 'aba mosi dada',
          zh: '上午',
          comment: '起床到午餐前的时间'
        },
        {
          hil: 'unta mosi dada',
          zh: '下午',
          comment: '午餐后到日落前的时间'
        },
        {
          hil: 'mosi aba nunu',
          zh: '晚餐',
          comment: '吃睡觉前的饭的时间'
        },
        {
          hil: 'unta nunu',
          zh: '深夜',
          comment: '睡觉之后的时间'
        }
      ],
      status: 2
    },
    movo: {
      def: [
        {
          pos: 'v',
          zh: '移动'
        }
      ],
      eg: [],
      status: 1
    },
    muhe: {
      def: [
        {
          pos: 'v',
          zh: '喜欢; 想要'
        }
      ],
      eg: [],
      status: 3
    },
    nini: {
      def: [
        {
          pos: 'n',
          zh: '雷电'
        },
        {
          pos: 'n',
          zh: '警示'
        },
        {
          pos: 'n',
          zh: '贡品'
        }
      ],
      eg: [],
      status: 1
    },
    nunu: {
      def: [
        {
          pos: 'v',
          zh: '睡觉'
        }
      ],
      eg: [],
      status: 2
    },
    nya: {
      def: [
        {
          pos: '',
          zh: '同 nye'
        }
      ],
      eg: [],
      status: 1
    },
    nye: {
      def: [
        {
          pos: 'adv',
          zh: '不; 别; 表示否定'
        }
      ],
      eg: [],
      status: 1
    },
    odomu: {
      def: [
        {
          pos: 'n',
          zh: '同志; 兄弟'
        }
      ],
      eg: [],
      status: 1
    },
    olah: {
      def: [
        {
          pos: 'int',
          zh: '你好'
        }
      ],
      eg: [],
      status: 2
    },
    plata: {
      def: [
        {
          pos: 'v',
          zh: '打; 攻击'
        }
      ],
      eg: [],
      status: 1
    },
    pupu: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    sada: {
      def: [
        {
          pos: 'n',
          zh: '固体; 岩石'
        },
        {
          pos: 'adj',
          zh: '硬的'
        }
      ],
      eg: [],
      status: 3
    },
    sama: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    si: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    shato: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    tiga: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    todo: {
      def: [
        {
          pos: 'v',
          zh: '拿'
        }
      ],
      eg: [],
      status: 1
    },
    tomo: {
      def: [
        {
          pos: '',
          zh: ''
        }
      ],
      eg: [],
      status: 0
    },
    unta: {
      def: [
        {
          pos: 'prep',
          zh: '在……之后'
        }
      ],
      eg: [],
      status: 1
    },
    unu: {
      def: [
        {
          pos: 'n',
          zh: '一'
        },
        {
          pos: 'n',
          zh: '丘丘人的神明'
        },
        {
          pos: 'n',
          zh: '原初之物'
        }
      ],
      eg: [],
      status: 3
    },
    'unu du': {
      def: [
        {
          pos: 'n',
          zh: '三'
        }
      ],
      eg: [],
      origin: '道本语 tu wan 三',
      status: 3
    },
    upa: {
      def: [
        {
          pos: 'n',
          zh: '山'
        },
        {
          pos: 'v',
          zh: '超越'
        },
        {
          pos: 'prep',
          zh: '于……之上'
        }
      ],
      eg: [],
      status: 3
    },
    upano: {
      def: [
        {
          pos: 'n',
          zh: '会飞的东西'
        }
      ],
      eg: [],
      status: 3
    },
    valo: {
      def: [
        {
          pos: 'int',
          zh: '再见'
        }
      ],
      eg: [],
      status: 1
    },
    vin: {
      def: [
        {
          pos: 'v',
          zh: '防止'
        },
        {
          pos: 'n',
          zh: '酒'
        }
      ],
      eg: [],
      origin: '拉丁语 vinum 酒',
      status: 1
    },
    ya: {
      def: [
        {
          pos: 'n',
          zh: '一个人'
        }
      ],
      eg: [],
      status: 1
    },
    yaya: {
      def: [
        {
          pos: 'n',
          zh: '一群人'
        }
      ],
      eg: [],
      status: 1
    },
    ye: {
      def: [
        {
          pos: 'pron',
          zh: '你 (通格)'
        }
      ],
      eg: [],
      status: 1
    },
    yeye: {
      def: [
        {
          pos: 'pron',
          zh: '你们'
        }
      ],
      eg: [],
      status: 1
    },
    yo: {
      def: [
        {
          pos: 'pron',
          zh: '你 (作格)'
        }
      ],
      eg: [],
      status: 1
    },
    yoyo: {
      def: [
        {
          pos: 'pron',
          zh: '你们'
        },
        {
          pos: 'n',
          zh: '酒'
        }
      ],
      eg: [],
      status: 1
    },
    zido: {
      def: [
        {
          pos: 'n',
          zh: '东西'
        }
      ],
      eg: [],
      status: 3
    }
  },
  posAbbr: { // 单词词性缩写
    adj: {
      zh: '形'
    },
    adv: {
      zh: '副'
    },
    n: {
      zh: '名'
    },
    v: {
      zh: '动'
    },
    pron: {
      zh: '代'
    },
    prep: {
      zh: '介'
    },
    int: {
      zh: '叹'
    },
    aux: {
      zh: '助'
    },
    det: {
      zh: '限'
    },
    place: {
      zh: '地'
    }
  }
}

export default Object.keys(DICTIONARY.dictionary_proper).reduce((obj, key) => {
  obj[key] = DICTIONARY
    .dictionary_proper[key]
    .def.map(({ pos, zh }) => {
      const defZh = DICTIONARY.posAbbr[pos] ? `[${DICTIONARY.posAbbr[pos].zh}]` : ''
      return `${defZh} ${zh}`
    })

  obj[key.slice(0, 1).toUpperCase() + key.slice(1)] = obj[key]
  return obj
}, {})
