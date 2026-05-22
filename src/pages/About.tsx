import { SectionTitle } from "../components/SectionTitle";
import { siteConfig } from "../content/site";

const skillGroups = [
  {
    title: "后端开发",
    items: ["Java", "Spring Boot", "MySQL", "Redis", "MyBatis-Plus", "RESTful API"],
  },
  {
    title: "测试方向",
    items: ["测试用例设计", "接口测试", "功能测试", "Postman", "自动化测试学习中"],
  },
  {
    title: "运维与部署",
    items: ["Linux", "Nginx", "云服务器", "日志排查", "CI/CD 学习中"],
  },
  {
    title: "AI 应用",
    items: ["大模型应用", "提示词工程", "AI 编程辅助", "AI 工具链"],
  },
];

export function About() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>关于我</h1>
          <p>
            我是{siteConfig.name}，{siteConfig.school}
            {siteConfig.major}专业本硕在读，目前关注 Java 后端开发、软件测试、SRE 运维和 AI 应用方向。
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Profile"
            title="个人简介"
            description="我希望通过持续的项目实践，建立完整的软件工程能力。"
          />

          <div className="about-card">
            <p>
              我正在学习如何把一个项目从需求分析、数据库设计、接口开发、测试验证，
              一直到部署上线完整地做出来。
            </p>
            <p>
              目前我也在搭建自己的个人网站，用来沉淀项目经历、技术笔记和学习记录。
              这个网站本身也是一个从本地开发到服务器部署的完整实践。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Skills"
            title="技能方向"
            description="以下是我正在重点积累的能力方向。"
          />

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}