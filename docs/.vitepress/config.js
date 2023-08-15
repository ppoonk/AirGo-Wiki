export default {
    themeConfig: {
        // logo: '/test.jpg',

        footer: {
            message: '所有内容仅用于技术交流，一切后果与作者无关',
            copyright: 'Copyright © AirGo'
        },
        nav: [
            { text: 'AirGo机场', link: 'https://airgoo.link' },
            { text: '免流模块', link: '/module/', activeMatch: '/module/' },
            { text: '流量小组件', link: '/components/', activeMatch: '/components/' },

        ],
        // socialLinks: [{ icon: "github", link: "https://github.com" }],
        sidebar: {
            '/module/': [
                {
                    text: 'AirGo免流模块',
                    items: [
                        { text: '安装', link: '/module/' },
                        { text: '导入订阅或节点', link: '/module/1' },
                        { text: '手动选择节点', link: '/module/2' },
                        { text: '自动切换节点', link: '/module/3' },
                        { text: '负载均衡', link: '/module/4' },
                        { text: '其他说明', link: '/module/5' },
                    ]
                }
            ],
            '/components/': [
                {
                    text: 'AirGo流量小组件',
                    items: [
                        { text: '安装', link: '/components/' },
                        { text: '其他说明', link: '/components/one' },
                    ]
                }
            ]
        },
        docFooter: { prev: '上一篇', next: '下一篇' },
    },
    //其他全局配置信息
    title: 'AirGo',
    description: 'AirGo',
    // outDir: '../dist'
}