export const projects = [
  {
    id: "personal-website",
    title: "个人网站与自动化部署平台",
    category: "个人网站 / DevOps 实践",
    status: "持续迭代中",
    summary:
      "基于 React、Vite、TypeScript 构建个人网站，使用 Docker、Nginx、GitHub Actions 实现自动化部署。",
    description:
      "该项目是我的个人主页和技术展示平台，用于沉淀项目经历、技术博客、照片记录和个人简历。项目从前端页面开发、多页面路由、Docker 容器化，到服务器 Nginx 部署和域名访问，覆盖了一个网站从开发到上线的完整流程。",
    tags: ["React", "TypeScript", "Vite", "Docker", "Nginx", "GitHub Actions"],
    highlights: [
      "使用 React Router 实现首页、关于、简历、项目、博客、联系等多页面结构",
      "使用 Vite 完成前端工程化构建",
      "使用 Docker 将前端静态资源和 Nginx 打包为镜像",
      "通过 GitHub Actions 实现自动化构建和部署",
      "配置 Nginx 支持 React Router 页面刷新",
    ],
    background:
      "希望拥有一个可以长期维护的个人展示平台，用于记录学习过程、展示项目实践，并作为求职和个人品牌建设的入口。",
    techStack: ["React", "TypeScript", "Vite", "React Router", "Docker", "Nginx", "GitHub Actions"],
    responsibilities: [
      "负责前端页面设计与组件拆分",
      "负责多页面路由和页面结构设计",
      "负责 Dockerfile 和 Nginx 配置",
      "负责 GitHub Actions 自动化部署流程设计",
    ],
    difficulties: [
      "React Router 使用 BrowserRouter 后，服务器刷新子路由会出现 404，需要通过 Nginx 的 try_files 统一回退到 index.html",
      "容器化部署时需要区分宿主机 Nginx 和容器内 Nginx 的职责边界",
    ],
    result:
      "完成了一个支持多页面访问、自动化部署和后续扩展的个人网站基础架构。",
  },
  {
    id: "local-life-service-platform",
    title: "本地生活服务平台",
    category: "后端开发项目",
    status: "开发中",
    summary:
      "围绕本地生活服务场景设计用户、商家、订单、评价等模块，实践后端接口设计与数据库建模。",
    description:
      "该项目模拟本地生活服务业务场景，包含用户注册登录、商家管理、服务发布、订单创建、评价反馈等核心模块。",
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "接口设计"],
    highlights: [
      "设计用户、商家、服务、订单、评价等核心数据表",
      "基于 Spring Boot 实现 RESTful API",
      "使用 MySQL 完成数据持久化",
      "整理接口文档和测试用例",
    ],
    background:
      "通过一个贴近实际业务的项目，练习后端开发中常见的需求分析、数据库设计、接口开发和测试验证流程。",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "MyBatis-Plus", "Postman"],
    responsibilities: [
      "参与需求分析和模块划分",
      "设计数据库表结构",
      "实现用户、商家、订单等核心接口",
      "编写接口测试用例并进行调试",
    ],
    difficulties: [
      "订单状态流转需要设计清晰，避免状态混乱",
      "接口参数校验和异常处理需要统一规范",
    ],
    result:
      "完成核心业务模块设计，提升了对后端业务建模、接口设计和数据库设计的理解。",
  },
];

export type Project = (typeof projects)[number];