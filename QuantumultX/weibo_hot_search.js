var obj = JSON.parse($response.body);

const myData = {
  "number": 0,
  "itemid": 0,
  "scheme": "weibointernational://search?keyword=%E6%B8%B8%E9%BE%99%E7%9C%9F%E5%B8%85%EF%BC%81",
  "pic_id": 0,
  "pic": "https://h5.sinaimg.cn/upload/100/1196/2020/04/23/ic_top.png",
  "title": "游龙真帅！",
  "type": "searchtop"
}

obj.data = [myData].concat(obj.data.slice(1));

$done({ body: JSON.stringify(obj) }); 
