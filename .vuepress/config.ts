import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { shikiPlugin } from "@vuepress/plugin-shiki";


export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: '易君 · Ejunz',
      description: 'Make Things easy',
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
          { text: 'System Docs', link: '/en/system_docs/'},
          { text: 'Domain Docs', link: '/en/domain_docs/'},
          { text: 'Plugin Docs', link: '/en/plugin_docs/'},
          
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
          { text: '系统文档', link: '/zh/system_docs/'},
          { text: '域文档', link: '/zh/domain_docs/'},
          { text: '插件文档', link: '/zh/plugin_docs/'},


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
              children: [
                {
                text: '前言', 
                link: '/zh/entry/1.1-ahead', 
                },
                {
                  text: '架构', 
                  link: '/zh/entry/1.2-framework', 
                  },
              ],
            },
            {
              text: '启动',
              children: [
                {
                text: '参数',
                link: '/zh/entry/install',
                }
              ],
          },
          ],
          '/zh/user_manual': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/user_manual/1.1-entry', 
                },
              ],
            },
            {
              text: '用户安全',
              children: [
                {
                text: '安全设置',
                link: '/zh/user_manual/1.2-security',
                },
              ],
          },
          ],
          '/zh/moderator_manual': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/moderator_manual/1.1-entry', 
                },
              ],
            },
            {
              text: '权限配置',
              children: [
                {
                text: '权限',
                link: '/zh/moderator_manual/1.2-perm',
                },
              ],
          },
          ],
          '/zh/developer_manual': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/developer_manual/1.1-entry', 
                },
              ],
            },
            {
              text: '非核心开发',
              children: [
                {
                text: '插件开发',
                link: '/zh/developer_manual/1.2-plugin',
                },
                {
                  text: '空间开发',
                  link: '/zh/developer_manual/1.3-space',
                  },
              ],
          },
          ],
          '/zh/system_docs': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/system_docs/1.1-ahead', 
                },
                {
                  text: '结构', 
                  link: '/zh/system_docs/1.2-framework', 
                  },
              ],
            },
            {
              text: '系统安全',
              children: [
                {
                text: '二步验证',
                link: '/zh/system_docs/2FA',
                },
              ],
          },

          ],
          '/zh/domain_docs': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/domain_docs/1.1-ahead', 
                },
                {
                  text: '规则', 
                  link: '/zh/domain_docs/1.2-rules', 
                  },
              ],
            },
            {
              text: '官方域',
              children: [
                {
                text: 'counter-strike',
                link: '/zh/domain_docs/A001',
                },
                {
                  text: 'I-Ching', 
                  link: '/zh/domain_docs/A002',
                  },
              ],
          },
          {
            text: '认证域',
            children: [
              // {
              // text: 'counter-strike',
              // link: '/zh/entry/A001',
              // },
              // {
              //   text: 'I-Ching', 
              //   link: '/zh/entry/A002',
              //   },
            ],
        },

          ],
          '/zh/plugin_docs': [
            {
              text: '总览',
              children: [
                {
                text: '前言', 
                link: '/zh/plugin_docs/1.1-ahead', 
                },
                {
                  text: '结构', 
                  link: '/zh/plugin_docs/1.2-framework', 
                  },
              ],
            },
            {
              text: '开发',
              children: [
                {
                text: '插件开发',
                link: '/zh/plugin_docs/plugin',
                },
                {
                  text: '空间开发',
                  link: '/zh/plugin_docs/space',
                  },
              ],
          },

          ],
        },
      },
    },
  }),
});
