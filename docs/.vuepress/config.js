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
        title: "基本",
        collapsable: false,
        children: [
          "/component/Grid",
          "/component/Card",
          "/component/Button",
          "/component/Icon",
        ],
      },
      {
        title: "Form表单",
        collapsable: false,
        children: [
          "/component/Input",
          "/component/Radio",
          "/component/Checkbox",
          "/component/Switch",
          "/component/Table",
          "/component/Select",
          "/component/Slider",
          "/component/DatePicker",
        ],
      },
     ],
    },
    head:[
      ['meta', { name: 'keywords', content: 'fairy-ui 前端,vue,组件库,vue组件库,UI框架,前端UI框架' }],
    ]
  }
}
