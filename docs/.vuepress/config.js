module.exports = {
  title: '余的个人博客',  // 网站标题
  description: '吾日三省吾身',    // 网站描述  
  head: [
      // 网页标签图标，'/'指向docs/.vuepress/public 文件目录
      ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  base: '/',// 设置站点根路径
  dest: './ROOT',  // 设置输出目录
  plugins: [],
  themeConfig: {
    // 添加导航栏
    nav: [
        { text: '主页', link: '/' },
        { text: 'Android', 
            items: [
                {text: '源码', link: '/android/sourcecode/'},
                {text: '架构', link: '/android/architecture/'},
                {text: '逆向', link: '/android/hook/'}
            ]
        },
        { text: 'Github', link: 'https://github.com/coder-pig' },
        { text: '关于我', link: '/other/aboutme.md' },
    ],
  }
}