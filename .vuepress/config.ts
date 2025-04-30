import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { shikiPlugin } from "@vuepress/plugin-shiki";


export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Ejunz',
      description: 'The documentation for Ejunz',
      home: '/',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Ejunz',
      description: 'The documentation for Ejunz',
      home: '/en/entry/',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '易君(Ejunz) 文档',
      description: '易君(Ejunz) 的文档',
      home: '/zh/entry/',
    },
  },
  
  bundler: webpackBundler(),
  plugins: [
    shikiPlugin({
        theme: "nord",
    }),
],
  host: '0.0.0.0',
  port: 3333,
  theme: hopeTheme({
    locales: {
      '/en/': {
        navbar: [
          { text: 'Entry', link: '/en/entry/' },
          { text: 'User Manual', link: '/en/user_manual/'},
          { text: 'Moderator Manual', link: '/en/moderator_manual/'},
          { text: 'Developer Manual', link: '/en/developer_manual/'},
          { text: 'Domain Docs', link: '/en/domain_docs/'},
          { text: 'System Docs', link: '/en/system_docs/'},
          { text: 'Domains', link: '/en/domains/'},
          { text: 'Spaces', link: '/en/spaces/'},
          { text: 'Plugins', link: '/en/plugins/'},
          
          // { text: 'FAQ', link: '/FAQ/' },
          // { text: 'Upgrade Guide', link: '/FAQ/upgrade' },
          // { text: 'Debugging Guide', link: '/FAQ/debug' },
          // { text: 'Tutorials', link: 'https://ejunz.com/d/faqs/p' },
          // { text: 'Development', link: '/dev/' },
          // { text: 'API', link: '/api/' },
          // { text: 'Plugins', link: '/plugins/' },
        ],
        plugins: {
          activeHeaderLinks: true,
          prismjs: false,
          copyright: false,
          copyCode: {},
          mdEnhance: {
              align: true,
              sup: true,
              sub: true,
              footnote: true,
              katex: true,
          },
          searchPro: {
              indexContent: true,
              customFields: [],
              locales: {
                  '/': {
                      cancel: "取消",
                      placeholder: "搜索",
                      search: "搜索",
                      searching: "搜索中",
                      select: "选择",
                      navigate: "切换",
                      exit: "关闭",
                      history: "搜索历史",
                      emptyHistory: "无搜索历史",
                      emptyResult: "没有找到结果",
                      loading: "正在加载搜索索引...",
                  },
              }
          }
      },

        hostname: 'https://docs.ejunz.com',
        repo: 'ejunz-dev/Ejunz',
        pageInfo: false,
        docsRepo: 'ejunz-dev/ejunz-dev.github.io',
        docsBranch: 'docs',
        editLink: true,
        sidebar: {
          '/en/entry': [
            {
              text: 'Overview',
              children: ['/en/entry/README.md'],
            },
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '入门', link: '/zh/entry/' },
          { text: '用户手册', link: '/zh/user_manual/'},
          { text: '管理员手册', link: '/zh/moderator_manual/'},
          { text: '开发者手册', link: '/zh/developer_manual/'},
          { text: '域文档', link: '/zh/domain_docs/'},
          { text: '系统文档', link: '/zh/system_docs/'},
          { text: '域', link: '/zh/domains/'},
          { text: '空间', link: '/zh/spaces/'},
          { text: '插件', link: '/zh/plugins/'},

          // { text: '计划', link: '/zh/todo/'},
          // { text: '常见问题解答', link: '/FAQ/' },
          // { text: '升级指南', link: '/FAQ/upgrade' },
          // { text: '排障指南', link: '/FAQ/debug' },
          // { text: '常用教程', link: 'https://ejunz.com/d/faqs/p' },
          // { text: '开发', link: '/dev/' },
          // { text: 'API', link: '/api/' },
          // { text: '插件', link: '/plugins/' },
        ],
        hostname: 'https://docs.ejunz.com',
        repo: 'ejunz-dev/Ejunz',
        pageInfo: false,
        docsRepo: 'ejunz-dev/ejunz-dev.github.io',
        docsBranch: 'docs',
        editLink: true,
        sidebar: {
          '/zh/entry': [
            {
              text: '总览',
              children: ['/zh/entry/'],
            },
            {
              text: '部署',
              children: [
                {
                text: '部署Ejunz', // 显示的标题
                link: '/zh/entry/install/', // 对应的路径
                }
              ],
          },
          ],
        },
      },
    },
  }),
});
