import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  title: 'Ejunz',
  head: [
    ['link', { rel: 'icon', href: `/ejunz.png` }],
    ['link', { rel: 'stylesheet', href: '/twoslash.css' }],
    ['meta', { name: 'theme-color', content: '#ffeded' }],
  ],
  bundler: webpackBundler(),
  host: '0.0.0.0',
  port: 3333, // 修改为未占用的端口
  theme: hopeTheme({
    logo: '/favicon.ico',
    navbar: [
      { text: '文档', link: '/docs/' },
      { text: '常见问题解答', link: '/FAQ/' },
      { text: '升级指南', link: '/FAQ/upgrade' },
      { text: '排障指南', link: '/FAQ/debug' },
      { text: '常用教程', link: 'https://ejunz.ac/d/faqs/p' },
      { text: '开发', link: '/dev/' },
      { text: 'API', link: '/api/' },
      { text: '插件', link: '/plugins/' },
    ],
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
    sidebar: {
      '/docs/': [
        {
          text: '总览',
          children: ['/docs/'],
        },
        {
          text: '部署',
          children: [
            '/docs/install/',
            '/docs/install/s3',
            '/docs/install/proxy',
            '/docs/install/compiler',
          ],
        },
      ],
    },
  }),
});
