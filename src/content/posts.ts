export const posts = [
  {
    id: "build-personal-website",
    title: "从 0 搭建个人网站的完整流程",
    date: "2025-01-01",
    summary:
      "记录使用 React、Vite、Docker、Nginx 和 GitHub Actions 搭建个人网站的过程。",
    tags: ["React", "Vite", "Docker", "Nginx"],
    content: [
      {
        heading: "为什么要搭建个人网站",
        body:
          "个人网站可以作为长期维护的数字名片，用来展示项目经历、技术博客、照片记录和个人简历。相比只把内容放在平台上，个人网站有更高的自主性和可扩展性。",
      },
      {
        heading: "技术选型",
        body:
          "前端使用 React、TypeScript 和 Vite，路由使用 React Router，部署上使用 Docker 和 Nginx，自动化流程使用 GitHub Actions。",
      },
      {
        heading: "部署流程",
        body:
          "代码提交到 GitHub 后，由 GitHub Actions 自动构建项目，并通过 Docker 构建镜像部署到服务器。服务器上的 Nginx 负责域名入口和反向代理。",
      },
    ],
  },
  {
    id: "react-router-pages",
    title: "React Router 多页面结构实践",
    date: "2025-01-05",
    summary:
      "整理如何把单页首页升级成首页、关于、简历、项目、博客、联系等多页面结构。",
    tags: ["React Router", "前端路由"],
    content: [
      {
        heading: "为什么需要多页面",
        body:
          "当网站内容越来越多时，单页结构会显得拥挤。使用 React Router 可以把不同内容拆分到不同路径中，提升浏览体验。",
      },
      {
        heading: "路由设计",
        body:
          "常见个人网站可以设计为首页、关于、简历、项目、照片墙、博客和联系页面，项目和博客再通过动态路由实现详情页。",
      },
    ],
  },
  {
    id: "docker-nginx-deploy",
    title: "使用 Docker 和 Nginx 部署前端网站",
    date: "2025-01-10",
    summary:
      "总结将 Vite 前端项目构建为静态文件，并通过 Nginx 容器提供访问的部署方式。",
    tags: ["Docker", "Nginx", "部署"],
    content: [
      {
        heading: "构建静态文件",
        body:
          "Vite 项目通过 npm run build 会生成 dist 目录，里面包含 index.html、JavaScript、CSS 和图片等静态资源。",
      },
      {
        heading: "容器化部署",
        body:
          "可以使用多阶段 Dockerfile，第一阶段用 Node 构建项目，第二阶段用 Nginx 提供静态资源服务。",
      },
      {
        heading: "前端路由刷新问题",
        body:
          "使用 BrowserRouter 时，访问 /about、/projects 等路径需要 Nginx 配置 try_files，将未知路径回退到 index.html。",
      },
    ],
  },
];

export type Post = (typeof posts)[number];