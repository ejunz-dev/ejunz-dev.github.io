import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Ejunz Documentation',
      description: 'The documentation for Ejunz',
      home: '/en/docs/',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Ejunz 文档',
      description: 'Ejunz 的文档',
      home: '/zh/docs/',
    },
  },
  bundler: webpackBundler(),
  host: '0.0.0.0',
  port: 3333,
  theme: hopeTheme({
    locales: {
      '/en/': {
        navbar: [
          { text: 'Documentation', link: '/en/docs/' },
          { text: 'FAQ', link: '/FAQ/' },
          { text: 'Upgrade Guide', link: '/FAQ/upgrade' },
          { text: 'Debugging Guide', link: '/FAQ/debug' },
          { text: 'Tutorials', link: 'https://ejunz.com/d/faqs/p' },
          { text: 'Development', link: '/dev/' },
          { text: 'API', link: '/api/' },
          { text: 'Plugins', link: '/plugins/' },
        ],
        hostname: 'https://docs.ejunz.com',
        repo: 'ejunz-dev/Ejunz',
        pageInfo: false,
        docsRepo: 'ejunz-dev/ejunz-dev.github.io',
        docsBranch: 'docs',
        editLink: true,
        sidebar: {
          '/en/docs': [
            {
              text: 'Overview',
              children: ['/en/docs/README.md'],
            },
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '文档', link: '/zh/docs/' },
          { text: '计划', link: '/zh/todo/'},
          { text: '常见问题解答', link: '/FAQ/' },
          { text: '升级指南', link: '/FAQ/upgrade' },
          { text: '排障指南', link: '/FAQ/debug' },
          { text: '常用教程', link: 'https://ejunz.com/d/faqs/p' },
          { text: '开发', link: '/dev/' },
          { text: 'API', link: '/api/' },
          { text: '插件', link: '/plugins/' },
        ],
        sidebar: {
          '/zh/docs': [
            {
              text: '总览',
              children: ['/zh/docs/'],
            },
            {
              text: '部署',
              children: [
                {
                text: '部署Ejunz', // 显示的标题
                link: '/zh/docs/install/', // 对应的路径
                }
              ],
          },
          ],
        },
      },
    },
  }),
});
