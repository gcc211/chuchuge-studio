import { Link } from "react-router-dom";
import { PhotoWall } from "../components/PhotoWall";
import { SectionTitle } from "../components/SectionTitle";
import { posts } from "../content/posts";
import { projects } from "../content/projects";
import { siteConfig } from "../content/site";

const skillGroups = [
  {
    title: "Java 后端开发",
    items: ["Java", "Spring Boot", "MySQL", "Redis", "接口设计"],
  },
  {
    title: "软件测试",
    items: ["测试用例", "接口测试", "功能测试", "自动化测试学习中"],
  },
  {
    title: "SRE / 运维",
    items: ["Linux", "Nginx", "部署发布", "日志排查"],
  },
  {
    title: "AI 应用方向",
    items: ["大模型应用", "提示词工程", "AI 工具链"],
  },
];

export function Home() {
  const featuredProjects = projects.slice(0, 2);
  const latestPosts = posts.slice(0, 3);

  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{siteConfig.nickname}</p>
            <h1>{siteConfig.heroTitle}</h1>
            <p className="hero-description">{siteConfig.heroDescription}</p>
            <p className="hero-slogan">{siteConfig.slogan}</p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">
                查看项目
              </Link>
              <Link className="button button-secondary" to="/about">
                了解我
              </Link>
            </div>
          </div>

          <aside className="hero-card" aria-label="个人信息卡片">
            <div className="avatar">葛</div>
            <h2>{siteConfig.name}</h2>
            <p>{siteConfig.school}</p>
            <ul>
              <li>
                <span>专业</span>
                <strong>{siteConfig.major}</strong>
              </li>
              <li>
                <span>地点</span>
                <strong>{siteConfig.location}</strong>
              </li>
              <li>
                <span>毕业时间</span>
                <strong>{siteConfig.graduation}</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Overview"
            title="网站概览"
            description="这里是我的个人主页入口，展示学习方向、项目实践、照片记录和技术博客。"
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

      <section className="section section-muted">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              eyebrow="Featured Projects"
              title="精选项目"
              description="首页只展示部分项目，完整内容可以进入项目页查看。"
            />
            <Link className="text-link" to="/projects">
              查看全部项目 →
            </Link>
          </div>

          <div className="project-list">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-header">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="status">{project.status}</span>
                </div>

                <p className="project-summary">{project.summary}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link className="button button-secondary card-action" to={`/projects/${project.id}`}>
                    查看详情
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              eyebrow="Gallery"
              title="照片墙预览"
              description="记录学习、生活、校园与项目实践中的一些片段。"
            />
            <Link className="text-link" to="/gallery">
              查看更多照片 →
            </Link>
          </div>

          <PhotoWall limit={6} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head-row">
            <SectionTitle
              eyebrow="Latest Posts"
              title="最新博客"
              description="整理学习过程中的知识点、项目经验和部署记录。"
            />
            <Link className="text-link" to="/blog">
              查看全部文章 →
            </Link>
          </div>

          <div className="post-grid">
            {latestPosts.map((post) => (
              <article className="post-card" key={post.id}>
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <div className="tag-list">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="button button-secondary card-action" to={`/blog/${post.id}`}>
                    阅读全文
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-card contact-card-large">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>欢迎联系我</h2>
              <p>
                如果你对我的项目、经历或学习方向感兴趣，可以进入联系页面查看联系方式。
              </p>
            </div>

            <Link className="button button-primary" to="/contact">
              联系我
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}