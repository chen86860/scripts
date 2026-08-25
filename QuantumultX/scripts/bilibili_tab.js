/***********************************************
> 应用名称：B站底栏 Tab 固定响应
> 适配接口：https://app.bilibili.com/x/resource/show/tab/v2
> 作用说明：请求不落地，直接返回固定的 tab 配置。
>          底栏仅保留 3 个（首页 / 关注 / 我的），
>          已移除 uri 为 bilibili://im/home_tab 的「消息」tab。
> 数据来源：2026-08-25 抓包（iphone_i / build 90800200）
> 类型说明：http-request 脚本，不产生真实网络请求
> 兼容平台：Shadowrocket / Surge / Loon / Quantumult X
***********************************************/

const payload = {
  code: 0,
  config: {
    no_login_avatar:
      'https://i0.hdslb.com/bfs/archive/689ed56f5b8b9bd26a90b20c52d464ebc0156185.png',
    no_login_avatar_type: 0,
    popup_style: 1,
    search_entrance: 5,
    tab_simplify: false,
  },
  data: {
    tab: [
      { id: 4015, name: '直播', uri: 'bilibili://live/home', tab_id: '直播tab', pos: 1 },
      {
        id: 477,
        name: '推荐',
        uri: 'bilibili://pegasus/promo',
        tab_id: '推荐tab',
        pos: 2,
        default_selected: 1,
      },
      { id: 4043, name: '热门', uri: 'bilibili://pegasus/hottopic', tab_id: '热门tab', pos: 3 },
    ],
    bottom: [
      {
        id: 486,
        icon: 'http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png',
        icon_selected:
          'http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png',
        name: '首页',
        uri: 'bilibili://main/home/',
        tab_id: '首页Bottom',
        pos: 1,
      },
      {
        id: 488,
        icon: 'http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png',
        icon_selected:
          'http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png',
        name: '关注',
        uri: 'bilibili://following/home/',
        tab_id: 'dynamic',
        pos: 2,
      },
      {
        id: 489,
        icon: 'http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png',
        icon_selected:
          'http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png',
        name: '我的',
        uri: 'bilibili://user_center/',
        tab_id: '我的Bottom',
        pos: 3,
      },
    ],
    top_left: {
      has_recent_tab: 0,
      url: 'bilibili://root?bottom_tab_id=我的Bottom',
      goto: 1,
      story_background_image: '',
      story_foreground_image: '',
      listen_background_image: '',
      listen_foreground_image: '',
      game_background_image: '',
      game_foreground_image: '',
    },
  },
  message: 'OK',
};

const body = JSON.stringify(payload);
const headers = { 'Content-Type': 'application/json; charset=utf-8' };

if (typeof $task !== 'undefined') {
  // Quantumult X
  $done({ status: 'HTTP/1.1 200 OK', headers, body });
} else {
  // Shadowrocket / Surge / Loon
  $done({ response: { status: 200, headers, body } });
}
