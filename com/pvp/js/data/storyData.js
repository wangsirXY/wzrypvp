/*
 * @area: id自增
 * @area: 区域
 * @profession: 职业
 * @spell: 拼音
 * @src: 图片路径
 */
//故事站英雄数据
let storyImgData = [
    {
        id: '1',
        area: '三分之地',
        profession: '坦克 辅助',
        spell: 'A',
        src: '../images/story/hero/908422776017.jpg',
    },
    {
        id: '2',
        area: '逐鹿',
        profession: '坦克 战士',
        spell: 'M',
        src: '../images/story/hero/79145982836583.jpg',
    },
    {
        id: '3',
        area: '建木',
        profession: '坦克',
        spell: 'Z',
        src: '../images/story/hero/99063960055644.jpg',
    },
    {
        id: '4',
        area: '建木',
        profession: '坦克 法师',
        spell: 'C',
        src: '../images/story/hero/353911202229544.jpg',
    },
    {
        id: '5',
        area: '洛河',
        profession: '坦克 辅助',
        spell: 'D',
        src: '../images/story/hero/953261427583808.jpg',
    },
    {
        id: '6',
        area: '三分之地',
        profession: '坦克 战士',
        spell: 'S',
        src: '../images/story/hero/67846590935414.jpg',
    },
    {
        id: '7',
        area: '建木',
        profession: '坦克 战士',
        spell: 'M',
        src: '../images/story/hero/88228768602449.jpg',
    },
    {
        id: '8',
        area: '洛河',
        profession: '坦克 战士',
        spell: 'S',
        src: '../images/story/hero/75102223449716.jpg',
    },
    {
        id: '9',
        area: '洛河',
        profession: '坦克 战士',
        spell: 'K',
        src: '../images/story/hero/40660475542197.jpg',
    },
    {
        id: '10',
        area: '大河流域',
        profession: '坦克 辅助',
        spell: 'D',
        src: '../images/story/hero/33388656891546.jpg',
    },
    {
        id: '11',
        area: '建木',
        profession: '坦克 辅助',
        spell: 'T',
        src: '../images/story/hero/524241070493059.jpg',
    },
    {
        id: '12',
        area: '三分之地',
        profession: '坦克 战士',
        spell: 'X',
        src: '../images/story/hero/7593351277808.jpg',
    },
    {
        id: '13',
        area: '大河流域',
        profession: '坦克',
        spell: 'L',
        src: '../images/story/hero/71567211286504.jpg',
    },
    {
        id: '14',
        area: '三分之地',
        profession: '坦克 辅助',
        spell: 'Z',
        src: '../images/story/hero/184661526306200.jpg',
    },
    {
        id: '15',
        area: '三分之地',
        profession: '坦克 战士',
        spell: 'L',
        src: '../images/story/hero/664211000977024.jpg',
    },
    {
        id: '16',
        area: '逐鹿',
        profession: '坦克 法师',
        spell: 'M',
        src: '../images/story/hero/4519469508162.jpg',
    },
    {
        id: '17',
        area: '建木',
        profession: '坦克 辅助',
        spell: 'N',
        src: '../images/story/hero/775111569812043.jpg',
    },
    {
        id: '18',
        area: '河洛',
        profession: '坦克 战士',
        spell: 'C',
        src: '../images/story/hero/632001118049593.jpg',
    },
    {
        id: '19',
        area: '大河流域',
        profession: '坦克',
        spell: 'X',
        src: '../images/story/hero/640041141757817.jpg',
    },
    {
        id: '20',
        area: '三分之地',
        profession: '坦克 辅助',
        spell: 'L',
        src: '../images/story/hero/6266887523314.jpg',
    },
    {
        id: '21',
        area: '日落海',
        profession: '坦克 战士',
        spell: 'Y',
        src: '../images/story/hero/45701468188203.jpg',
    },
    {
        id: '22',
        area: '河洛',
        profession: '坦克 战士',
        spell: 'D',
        src: '../images/story/hero/48361745905777.jpg',
    },
    {
        id: '23',
        area: '逐鹿',
        profession: '坦克 辅助',
        spell: 'Z',
        src: '../images/story/hero/36407803861490.jpg',
    },
    {
        id: '24',
        area: '逐鹿',
        profession: '坦克 战士',
        spell: 'Z',
        src: '../images/story/hero/4638371386568.jpg',
    },
    {
        id: '25',
        area: '逐鹿',
        profession: '坦克',
        spell: 'L',
        src: '../images/story/hero/80750919757873.jpg',
    },
    {
        id: '26',
        area: '逐鹿',
        profession: '坦克',
        spell: 'B',
        src: '../images/story/hero/155221210224517.jpg',
    },
    {
        id: '27',
        area: '河洛',
        profession: '战士 法师',
        spell: 'S',
        src: '../images/story/hero/85473239526448.jpg',
    },
    {
        id: '28',
        area: '日落海',
        profession: '战士',
        spell: 'X',
        src: '../images/story/hero/27859854994324.png',
    },
    {
        id: '29',
        area: '三分之地',
        profession: '战士',
        spell: 'M',
        src: '../images/story/hero/33883177785525.jpg',
    },
    {
        id: '30',
        area: '逐鹿',
        profession: '战士',
        spell: 'Y',
        src: '../images/story/hero/770901264838612.jpg',
    },
    {
        id: '31',
        area: '大河流域',
        profession: '战士 刺客',
        spell: 'Y',
        src: '../images/story/hero/86214230515643.jpg',
    },
    {
        id: '32',
        area: '建木',
        profession: '战士',
        spell: 'P',
        src: '../images/story/hero/19615858476334.jpg',
    },
    {
        id: '33',
        area: '河洛',
        profession: '战士',
        spell: 'L',
        src: '../images/story/hero/45330314537943.jpg',
    },
    {
        id: '34',
        area: '日落海',
        profession: '战士',
        spell: 'K',
        src: '../images/story/hero/7239917087550.jpg',
    },
    {
        id: '35',
        area: '洛河',
        profession: '战士 刺客',
        spell: 'P',
        src: '../images/story/hero/69916960929378.jpg',
    },
    {
        id: '36',
        area: '建木',
        profession: '战士',
        spell: 'N',
        src: '../images/story/hero/652021297028542.jpg',
    },
    {
        id: '37',
        area: '建木',
        profession: '战士',
        spell: 'Y',
        src: '../images/story/hero/365511150355588.jpg',
    },
    {
        id: '38',
        area: '东方海域',
        profession: '战士 刺客',
        spell: 'J',
        src: '../images/story/hero/58109651771952.jpg',
    },
    {
        id: '39',
        area: '日落海',
        profession: '战士',
        spell: 'Y',
        src: '../images/story/hero/44483332637077.jpg',
    },
    {
        id: '40',
        area: '三分之地',
        profession: '战士',
        spell: 'G',
        src: '../images/story/hero/275341569174044.jpg',
    },
    {
        id: '41',
        area: '河洛',
        profession: '战士 法师',
        spell: 'Z',
        src: '../images/story/hero/203361241905570.jpg',
    },
    {
        id: '42',
        area: '三分之地',
        profession: '战士',
        spell: 'L',
        src: '../images/story/hero/980091411957883.jpg',
    },
    {
        id: '43',
        area: '河洛',
        profession: '战士 刺客',
        spell: 'H',
        src: '../images/story/hero/3685977620263.jpg',
    },
    {
        id: '44',
        area: '建木',
        profession: '战士 刺客',
        spell: 'S',
        src: '../images/story/hero/46014866033037.jpg',
    },
    {
        id: '45',
        area: '三分之地',
        profession: '战士',
        spell: 'G',
        src: '../images/story/hero/128165944821.jpg',
    },
    {
        id: '46',
        area: '东方海域',
        profession: '战士',
        spell: 'G',
        src: '../images/story/hero/46551546090153.jpg',
    },
    {
        id: '47',
        area: '三分之地',
        profession: '战士',
        spell: 'D',
        src: '../images/story/hero/744831059647720.jpg',
    },
    {
        id: '48',
        area: '逐鹿',
        profession: '战士 法师',
        spell: 'M',
        src: '../images/story/hero/62651469219485.jpg',
    },
    {
        id: '49',
        area: '逐鹿',
        profession: '战士',
        spell: 'L',
        src: '../images/story/hero/56207935501606.jpg',
    },
    {
        id: '50',
        area: '日落海',
        profession: '战士 法师',
        spell: 'L',
        src: '../images/story/hero/63581396650488.jpg',
    },
    {
        id: '51',
        area: '三分之地',
        profession: '战士 刺客',
        spell: 'Z',
        src: '../images/story/hero/422841175180785.jpg',
    },
    {
        id: '52',
        area: '三分之地',
        profession: '刺客',
        spell: 'L',
        src: '../images/story/hero/35161952266060.jpg',
    },
    {
        id: '53',
        area: '逐鹿',
        profession: '刺客',
        spell: 'J',
        src: '../images/story/hero/25718162647590.jpg',
    },
    {
        id: '54',
        area: '三分之地',
        profession: '刺客 法师',
        spell: 'S',
        src: '../images/story/hero/332921188655301.jpg',
    },
    {
        id: '55',
        area: '三分之地',
        profession: '刺客',
        spell: 'Y',
        src: '../images/story/hero/227131284204645.jpg',
    },
    {
        id: '56',
        area: '河洛',
        profession: '刺客',
        spell: 'X',
        src: '../images/story/hero/70144136701374.jpg',
    },
    {
        id: '57',
        area: '东风流域',
        profession: '刺客 法师',
        spell: 'B',
        src: '../images/story/hero/579210012886.jpg',
    },
    {
        id: '58',
        area: '河洛',
        profession: '刺客',
        spell: 'L',
        src: '../images/story/hero/54178532140165.jpg',
    },
    {
        id: '59',
        area: '东风海域',
        profession: '刺客',
        spell: 'N',
        src: '../images/story/hero/548681020090103.jpg',
    },
    {
        id: '60',
        area: '云中漠地',
        profession: '刺客',
        spell: 'L',
        src: '../images/story/hero/34030207140278.jpg',
    },
    {
        id: '61',
        area: '三分之地',
        profession: '刺客 法师',
        spell: 'D',
        src: '../images/story/hero/1559492280407.png',
    },
    {
        id: '62',
        area: '大河流域',
        profession: '刺客',
        spell: 'H',
        src: '../images/story/hero/26620610693151.jpg',
    },
    {
        id: '63',
        area: '逐鹿',
        profession: '刺客',
        spell: 'A',
        src: '../images/story/hero/977331090834512.jpg',
    },
    {
        id: '64',
        area: '逐鹿',
        profession: '法师',
        spell: 'X',
        src: '../images/story/hero/87864951621394.jpg',
    },
    {
        id: '65',
        area: '河洛',
        profession: '法师',
        spell: 'S',
        src: '../images/story/hero/218171149641279.jpg',
    },
    {
        id: '66',
        area: '河洛',
        profession: '法师',
        spell: 'S',
        src: '../images/story/hero/293661177557011.jpg',
    },
    {
        id: '67',
        area: '日落海',
        profession: '法师',
        spell: 'M',
        src: '../images/story/hero/46616375519675.jpg',
    },
    {
        id: '68',
        area: '河洛',
        profession: '法师',
        spell: 'Y',
        src: '../images/story/hero/91933477302343.jpg',
    },
    {
        id: '69',
        area: '河洛',
        profession: '法师 辅助',
        spell: 'Y',
        src: '../images/story/hero/316771484611139.jpg',
    },
    {
        id: '70',
        area: '建木',
        profession: '法师',
        spell: 'N',
        src: '../images/story/hero/957611093104192.jpg',
    },
    {
        id: '71',
        area: '大河流域',
        profession: '法师',
        spell: 'G',
        src: '../images/story/hero/42817207621092.jpg',
    },
    {
        id: '72',
        area: '三分之地',
        profession: '法师',
        spell: 'Z',
        src: '../images/story/hero/29138566540861.jpg',
    },
    {
        id: '73',
        area: '三分之地',
        profession: '法师',
        spell: 'Z',
        src: '../images/story/hero/86934792945830.jpg',
    },
    {
        id: '74',
        area: '日落海',
        profession: '法师',
        spell: 'A',
        src: '../images/story/hero/4412162996520.jpg',
    },
    {
        id: '75',
        area: '北荒',
        profession: '法师',
        spell: 'W',
        src: '../images/story/hero/605981185208690.jpg',
    },
    {
        id: '76',
        area: '逐鹿',
        profession: '法师',
        spell: 'B',
        src: '../images/story/hero/59618194648034.jpg',
    },
    {
        id: '77',
        area: '逐鹿',
        profession: '法师 辅助',
        spell: 'S',
        src: '../images/story/hero/70493764453797.jpg',
    },
    {
        id: '78',
        area: '大河流域',
        profession: '法师',
        spell: 'Z',
        src: '../images/story/hero/2248336605405.jpg',
    },
    {
        id: '79',
        area: '三分之地',
        profession: '法师',
        spell: 'X',
        src: '../images/story/hero/237121077716001.jpg',
    },
    {
        id: '80',
        area: '建木',
        profession: '法师 辅助',
        spell: 'J',
        src: '../images/story/hero/107021158349230.jpg',
    },
    {
        id: '81',
        area: '三分之地',
        profession: '法师',
        spell: 'Z',
        src: '../images/story/hero/8706478784651.jpg',
    },
    {
        id: '82',
        area: '逐鹿',
        profession: '法师',
        spell: 'Y',
        src: '../images/story/hero/9558902611675.jpg',
    },
    {
        id: '83',
        area: '河洛',
        profession: '法师',
        spell: 'W',
        src: '../images/story/hero/8645575620272.jpg',
    },
    {
        id: '84',
        area: '逐鹿',
        profession: '法师',
        spell: 'G',
        src: '../images/story/hero/84899525679925.jpg',
    },
    {
        id: '85',
        area: '建木',
        profession: '法师',
        spell: 'D',
        src: '../images/story/hero/782471528444287.jpg',
    },
    {
        id: '86',
        area: '日落海',
        profession: '射手',
        spell: 'A',
        src: '../images/story/hero/384301448271504.png',
    },
    {
        id: '87',
        area: '逐鹿',
        profession: '射手',
        spell: 'M',
        src: '../images/story/hero/645021221580209.jpg',
    },
    {
        id: '88',
        area: '云中漠地',
        profession: '射手',
        spell: 'J',
        src: '../images/story/hero/15595309331581.jpg',
    },
    {
        id: '89',
        area: '河洛',
        profession: '射手',
        spell: 'G',
        src: '../images/story/hero/85961165268981.jpg',
    },
    {
        id: '90',
        area: '河洛',
        profession: '射手',
        spell: 'B',
        src: '../images/story/hero/973981525713211.jpg',
    },
    {
        id: '91',
        area: '三分之地',
        profession: '射手',
        spell: 'H',
        src: '../images/story/hero/85062883647203.jpg',
    },
    {
        id: '92',
        area: '北荒',
        profession: '射手',
        spell: 'C',
        src: '../images/story/hero/669879518974.jpg',
    },
    {
        id: '93',
        area: '日落海',
        profession: '射手',
        spell: 'M',
        src: '../images/story/hero/213931307900110.jpg',
    },
    {
        id: '94',
        area: '大河流域',
        profession: '射手',
        spell: 'Y',
        src: '../images/story/hero/85572974862749.jpg',
    },
    {
        id: '95',
        area: '河洛',
        profession: '射手',
        spell: 'L',
        src: '../images/story/hero/536601401910051.jpg',
    },
    {
        id: '96',
        area: '建木',
        profession: '射手',
        spell: 'H',
        src: '../images/story/hero/64275801657630.jpg',
    },
    {
        id: '97',
        area: '三分之地',
        profession: '射手',
        spell: 'S',
        src: '../images/story/hero/528761277746534.jpg',
    },
    {
        id: '98',
        area: '河洛',
        profession: '射手',
        spell: 'D',
        src: '../images/story/hero/5043088753153.jpg',
    },
    {
        id: '99',
        area: '逐鹿',
        profession: '射手',
        spell: 'L',
        src: '../images/story/hero/175711332695893.jpg',
    },
    {
        id: '100',
        area: '逐鹿',
        profession: '辅助',
        spell: 'L',
        src: '../images/story/hero/72226651341391.jpg',
    },
    {
        id: '101',
        area: '大河流域',
        profession: '辅助',
        spell: 'Y',
        src: '../images/story/hero/757821175652297.jpg',
    },
    {
        id: '102',
        area: '河洛',
        profession: '辅助',
        spell: 'M',
        src: '../images/story/hero/950592351878.jpg',
    },
    {
        id: '103',
        area: '大河流域',
        profession: '辅助',
        spell: 'G',
        src: '../images/story/hero/88527151660191.jpg',
    },
    {
        id: '104',
        area: '三分之地',
        profession: '辅助',
        spell: 'D',
        src: '../images/story/hero/39697765755935.jpg',
    },
    {
        id: '105',
        area: '三分之地',
        profession: '辅助',
        spell: 'C',
        src: '../images/story/hero/9456290393768.jpg',
    },
];
 //英雄首页头部
let storyTopsData=[
     {
         title:'职业',
         date:['全部英雄','坦克','战士','刺客','法师','射手','辅助'],
         width:'style="width:150%;"'
    },
    {
        title:'区域',
        date:['全部英雄','建木','逐鹿','北荒','大河流域','三分之地','日落海','河洛','东风海域','云中漠地'],
        width:'style="width:250%;"'
    },
    {
        title:'拼音',
        date:['全部英雄','A~G','H~N','O~U','V~Z'],
        width:'style="width:130%;"'
    }

]
//故事站首页数据
// 头部轮播
let storyImageData=[
    {
    id:'1',
    image:'../images/story/home/16206255325417.png'
    },
    {
    id:'2',
    image:'../images/story/home/16177896411315.png'
    },
    {
    id:'3',
    image:'../images/story/home/16204465286571.png'
    },
    {
    id:'4',
    image:'../images/story/home/16204469119480.png'
    },
    {
    id:'5',
    image:'../images/story/home/16109634299745.png'
    },
]
// 列表数据
let storyListData=[
    {
     id:'1',
     title:'故事',
     text:'故事-入梦精灵-梦琪',
     image:'../images/story/home/16206255712056.jpg'
    },
    {
     id:'2',
     title:'漫画',
     text:'第三话：绣球之争',
     image:'../images/story/home/16204468424041.jpg'
    },
    {
     id:'3',
     title:'视频',
     text:'我都不知道怎么输的...',
     image:'../images/story/home/16204465875137.jpg'
    },
    {
     id:'4',
     title:'视频',
     text:'【艾琳】月桂之舞',
     image:'../images/story/home/16184968661090.jpg'
    },
    {
     id:'5',
     title:'故事',
     text:'精灵之舞 - 艾琳',
     image:'../images/story/home/16177750665892.png'
    },
    {
     id:'6',
     title:'视频',
     text:'减速流组合 辅助都有一颗输出的心',
     image:'../images/story/home/16182208727618.jpg'
    },
    {
     id:'7',
     title:'视频',
     text:'王者别闹 牛年特别篇',
     image:'../images/story/home/16145671848203.jpg'
    },
    {
     id:'8',
     title:'区域',
     text:'长安·上元',
     image:'../images/story/home/16109634944471.jpg'
    },
    {
     id:'9',
     title:'视频',
     text:'【司空震】强者何谓',
     image:'../images/story/home/16104526472854.jpg'
    },
    {
     id:'10',
     title:'故事',
     text:'雷霆之王-司空震',
     image:'../images/story/home/16104461916309.jpg'
    }
]
// 尾部轮播
let storyImagesData=[
    {
    id:'1',
    image:'../images/story/home/16206256407646.jpg'
    },
    {
    id:'2',
    image:'../images/story/home/16177751294681.jpg'
    },
    {
    id:'3',
    image:'../images/story/home/16104462998981.jpg'
    },
]
//故事站鉴赏数据
let storyAppreciateDate=[
    {
        id:'1',
        text:'区域鉴赏',
        title:'../images/story/appreciate/appreciate-1-text1.png',
        src:'../images/story/appreciate/dd08c9ffcc07acfb4824bbad6c43db62.jpg',
        image:'../images/story/appreciate/appreciate-1-text.png'
    },
    {
        id:'2',
        text:'语言鉴赏',
        title:'../images/story/appreciate/appreciate-2-text2.png',
        src:'../images/story/appreciate/bfcd48bd34a65958244556c35677d106.jpg',
        image:'../images/story/appreciate/appreciate-2-text.png'
    },
    {
        id:'3',
        text:'皮肤鉴赏',
        title:'../images/story/appreciate/appreciate-3-text3.png',
        src:'../images/story/appreciate/6a6639488c2ed3cf514ad2803e7826bb.jpg',
        image:'../images/story/appreciate/appreciate-3-text.png'
    },
    {
        id:'4',
        text:'漫画鉴赏',
        title:'../images/story/appreciate/appreciate-4-text4.png',
        src:'../images/story/appreciate/d956c624ad86668b7486fb815683813f.jpg',
        image:'../images/story/appreciate/appreciate-4-text.png'
    },
    {
        id:'5',
        text:'视频鉴赏',
        title:'../images/story/appreciate/appreciate-5-text5.png',
        src:'../images/story/appreciate/2c61592415cabd5960b5b58c677a330b.jpg',
        image:'../images/story/appreciate/appreciate-5-text.png'
    },
    {
        id:'6',
        text:'音乐鉴赏',
        title:'../images/story/appreciate/appreciate-6-text6.png',
        src:'../images/story/appreciate/3ff75efd3773f51fdb2414d01f5a49b0.jpg',
        image:'../images/story/appreciate/appreciate-6-text.png'
    },
    {
        id:'7',
        text:'文化共创集',
        title:'../images/story/appreciate/appreciate-7-text7.png',
        src:'../images/story/appreciate/b990dcdd0f484a9e38d257d3e13d137e.jpg',
        image:'../images/story/appreciate/appreciate-7-text.png'
    },
]
