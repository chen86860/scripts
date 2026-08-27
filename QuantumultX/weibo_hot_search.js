const myData = {
  number: 99999,
  itemid: 1,
  pic_id: 1,
  pic: 'https://h5.sinaimg.cn/upload/100/1378/2023/05/16/ic_discovery_hot.png',
  scheme: 'weibointernational://search?keyword=%E6%B8%B8%E9%BE%99%E7%9C%9F%E5%B8%85%EF%BC%81',
  title: '游龙真帅！',
  subject_label: '综艺',
  type: 'topic',
  icon: 'https://h5.sinaimg.cn/upload/100/1378/2023/05/16/ic_discovery_hot.png',
};

try {
  const originBody = JSON.parse($response.body);

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
  } else if (Array.isArray(originBody.data)) {
    originBody.data = [myData].concat(originBody.data.slice(1));
  } else {
    throw new Error('未识别的响应结构');
  }

  $done({ body: JSON.stringify(originBody) });
} catch (e) {
  // 响应体不是预期的 JSON（空 body、测试模式的占位内容、接口改版等），原样放行。
  console.log(`weibo_hot_search.js 跳过：${e}`);
  $done({});
}
