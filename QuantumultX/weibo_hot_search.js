var obj = JSON.parse($response.body);

obj.data[0] = {
  "number": 0,
  "itemid": 0,
  "scheme": "weibointernational://search?keyword=%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%B8%BB%E5%B8%AD%E8%AE%B2%E8%AF%9D%E9%87%8C%E7%9A%84%E7%9C%9F%E6%8C%9A%E6%83%85%E8%B0%8A",
  "pic_id": 0,
  "pic": "https://h5.sinaimg.cn/upload/100/1196/2020/04/23/ic_top.png",
  "title": "游龙真帅！",
  "type": "searchtop"
}

$done({ body: JSON.stringify(obj) }); 
