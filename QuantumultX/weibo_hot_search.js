var originBody = JSON.parse($response.body);

const myData = {
  number: 999,
  itemid: 1,
  pic_id: 1,
  pic: 'https://h5.sinaimg.cn/upload/100/1378/2023/05/16/ic_discovery_hot.png',
  scheme: 'weibointernational://search?keyword=%E6%B8%B8%E9%BE%99%E7%9C%9F%E5%B8%85%EF%BC%81',
  title: '游龙真帅！',
  subject_label: '综艺',
  type: 'topic',
  icon: 'https://h5.sinaimg.cn/upload/100/1378/2023/05/16/ic_discovery_hot.png',
};

// originBody.data = {
//   search_topic: {
//     schema: '热搜',
//     desc: '热搜榜单',
//     cards: [myData].concat(originBody.data.search_topic.cards.slice(1)),
//   },
//   trending_topic: {
//     schema: '热搜',
//     desc: '热搜榜单',
//     cards: [],
//   },
// };

if (originBody.data && originBody.data.search_topic) {
  originBody.data = {
    search_topic: {
      schema: '热搜',
      desc: '热搜榜单',
      cards: [myData].concat(originBody.data.search_topic.cards.slice(1)),
    },
    trending_topic: {
      schema: '热搜',
      desc: '热搜榜单',
      cards: [],
    },
  };
} else {
  originBody.data = [myData].concat(originBody.data.slice(1));
}

$done({ body: JSON.stringify(originBody) });
