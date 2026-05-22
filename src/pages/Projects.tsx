import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { projects } from "../content/projects";

export function Projects() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1>项目经历</h1>
          <p>这里整理我的项目实践，包括项目背景、技术栈、核心功能和实现亮点。</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="All Projects"
            title="全部项目"
            description="点击项目卡片可以查看更完整的项目详情。"
          />

          <div className="project-list">
            {projects.map((project) => (
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

                <ul className="highlight-list">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link className="button button-secondary card-action" to={`/projects/${project.id}`}>
                  查看项目详情
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}