module.exports = {
  logo: '/Vue.png',
  title: 'fairy-ui 前端 UI 框架',
  description: '简洁,高效,快速',
  plugins: ['demo-container'],
  themeConfig: {
    displayAllHeaders: false,
    sidebar: "auto",
    nav: [
      {
        text: "指南",
        link: "/guide/introduce"
      },
      {
        text: "组件",
        link: "/component/installation",
      },
      { text: 'github', link: 'https://github.com/James-handsome/fairy-ui' },
    ],
    sidebar: {
      '/guide':[
        {
          title: "介绍",
          collapsable: false,
          children: ["/guide/introduce.md"],
        },
      ],
      '/component':
      [
        {
        title: "开发指南",
        collapsable: false,
        children: [
          "/component/installation", 
          "/component/quickstart",
        ],
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/component/Card",
          "/component/Button",
        ],
      },
     ],
    },
    head:[
      ['meta', { name: 'keywords', content: 'fairy-ui 前端,vue,组件库,vue组件库,UI框架,前端UI框架' }],
       // <!--百度站长自动推送-->
      [
        "script",
        {},
        `
        (function(){
          var bp = document.createElement('script');
          var curProtocol = window.location.protocol.split(':')[0];
          if (curProtocol === 'https') {
              bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
          }
          else {
              bp.src = 'http://push.zhanzhang.baidu.com/push.js';
          }
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(bp, s);
         })();`
      ]
    ]
  }
}
