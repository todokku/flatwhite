module.exports = {
  head: [
    ["link", {rel: "icon", href: `/logo.png`}],
    ["link", {rel: "manifest", href: "/manifest.json"}],
    ["meta", {name: "theme-color", content: "#3eaf7c"}],
    ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
    ["link", {rel: "apple-touch-icon", href: `/logo.png`}]
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "FlatWhite",
      description: "Online Course Saas Platform"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "小白",
      description: "知识付费平台"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {text: "Features", link: "/features/"},
          {text: "Get Started", link: "/get-started/"},
          {text: "Learn", link: "/guide/"},
          {text: "Github", link: "https://github.com/codewithkai/flatwhite"}
        ]
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {text: "功能", link: "/features/"},
          {text: "起步", link: "/get-started/"},
          {text: "学习", link: "/guide/"},
          {text: "Github", link: "https://github.com/codewithkai/flatwhite"}
        ]
      }
    }
  }
};
