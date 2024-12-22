import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Ejunz',
      description: 'Welcome to Ejunz Docs',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Ejunz 文档',
      description: '欢迎来到 Ejunz 文档',
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/ejunz.png` }],
    ['link', { rel: 'stylesheet', href: '/twoslash.css' }],
    ['meta', { name: 'theme-color', content: '#ffeded' }],
  ],
  bundler: webpackBundler(),
  host: '0.0.0.0',
  port: 3333,
  theme: hopeTheme({
    logo: '/favicon.ico',
    locales: {
      '/': {
        navbar: [
          { text: 'Docs', link: '/docs/' },
          { text: 'FAQs', link: '/FAQ/' },
          { text: 'Upgrade Guide', link: '/FAQ/upgrade' },
          { text: 'Debug Guide', link: '/FAQ/debug' },
          { text: 'Tutorials', link: 'https://ejunz.ac/d/faqs/p' },
          { text: 'Development', link: '/dev/' },
          { text: 'API', link: '/api/' },
          { text: 'Plugins', link: '/plugins/' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: 'Overview',
              children: ['/docs/'],
            },
            {
              text: 'Deployment',
              children: [
                '/docs/install/',
                '/docs/install/s3',
                '/docs/install/proxy',
                '/docs/install/compiler',
              ],
            },
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '文档', link: '/zh/docs/' },
          { text: '常见问题解答', link: '/zh/FAQ/' },
          { text: '升级指南', link: '/zh/FAQ/upgrade' },
          { text: '排障指南', link: '/zh/FAQ/debug' },
          { text: '常用教程', link: 'https://ejunz.ac/d/faqs/p' },
          { text: '开发', link: '/zh/dev/' },
          { text: 'API', link: '/zh/api/' },
          { text: '插件', link: '/zh/plugins/' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '总览',
              children: ['/zh/docs/'],
            },
            {
              text: '部署',
              children: [
                '/zh/docs/install/',
                '/zh/docs/install/s3',
                '/zh/docs/install/proxy',
                '/zh/docs/install/compiler',
              ],
            },
          ],
        },
      },
    },
    markdown: {
      math: true,
      footnote: true,
      align: true,
      sup: true,
      sub: true,
      highlighter: {
        type: "shiki",
        theme: "nord",
      },
    },
    plugins: {
      slimsearch: {
        indexContent: true,
        locales: {
          '/': {
            cancel: "Cancel",
            placeholder: "Search",
            search: "Search",
            searching: "Searching",
            select: "Select",
            navigate: "Navigate",
            exit: "Exit",
            history: "Search History",
            emptyHistory: "No Search History",
            emptyResult: "No Results Found",
            loading: "Loading Search Index...",
          },
          '/zh/': {
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
        },
      },
    },
  }),
});
