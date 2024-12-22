import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';

export default defineUserConfig({
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Ejunz Documentation',
      description: 'The documentation for Ejunz',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Ejunz 文档',
      description: 'Ejunz 的文档',
    },
  },
  bundler: webpackBundler(), 
  host: '0.0.0.0',
  port: 3333,
  theme: hopeTheme({
    locales: {
      '/en/': {
        navbar: [
          { text: 'Guide', link: '/en/guide/' },
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Introduction',
              children: ['/en/README.md', '/en/guide/README.md'],
            },
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '指南', link: '/zh/guide/' },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '介绍',
              children: ['/zh/README.md', '/zh/guide/README.md'],
            },
          ],
        },
      },
    },
  }),
});
