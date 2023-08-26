var obj = JSON.parse($response.body);

const myData = {
  "number": 0,
  "itemid": 1,
  "pic_id": 1,
  "pic": "",
  "scheme": "weibointernational://search?keyword=%E6%B8%B8%E9%BE%99%E7%9C%9F%E5%B8%85%EF%BC%81",
  "title": "游龙真帅！",
  "subject_label": "综艺",
  "type": "topic",
  "icon": "https://h5.sinaimg.cn/upload/100/1378/2023/05/16/ic_discovery_hot.png"
};

obj.data = [myData].concat(obj.data.slice(1));

$done({ body: JSON.stringify(obj) }); 
