module.exports = {
  logo: '/Vue.png',
  title: 'fairy-ui',
  description: '简洁,高效,快速',
  plugins: ['demo-container'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: 'componentDocs/Card' },
      { text: 'github', link: 'https://github.com/James-handsome/fairy-ui' },
    ],
    sidebar: [
      '/',
      'componentDocs/Card',
      'componentDocs/Button'
    ]
  }
}
