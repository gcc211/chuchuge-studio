import { Link, useParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { projects } from "../content/projects";

export function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main>
        <section className="page-hero section">
          <div className="container">
            <p className="eyebrow">Project Not Found</p>
            <h1>项目不存在</h1>
            <p>你访问的项目不存在，可能是地址输入错误或项目已经移动。</p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">
                返回项目列表
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className="tag-list page-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="button button-secondary" to="/projects">
              返回项目列表
            </Link>
            <Link className="button button-primary" to="/contact">
              交流这个项目
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container detail-layout">
          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Background"
              title="项目背景"
              description="为什么要做这个项目。"
            />
            <p>{project.background}</p>
          </article>

          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Tech Stack"
              title="技术栈"
              description="项目中使用到的主要技术。"
            />
            <div className="tag-list">
              {project.techStack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Responsibilities"
              title="我的职责"
              description="我在项目中主要负责的内容。"
            />
            <ul className="highlight-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Highlights"
              title="项目亮点"
              description="项目中比较重要的实现点。"
            />
            <ul className="highlight-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Difficulties"
              title="难点与解决"
              description="开发过程中遇到的问题和思考。"
            />
            <ul className="highlight-list">
              {project.difficulties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-main-card">
            <SectionTitle
              eyebrow="Result"
              title="项目成果"
              description="最终完成情况和收获。"
            />
            <p>{project.result}</p>
          </article>
        </div>
      </section>
    </main>
  );
}