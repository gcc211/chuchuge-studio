import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { resume } from "../content/resume";
import { siteConfig } from "../content/site";

export function Resume() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Resume</p>
          <h1>个人简历</h1>
          <p>{resume.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="/resume.pdf" download>
              下载 PDF 简历
            </a>
            <Link className="button button-secondary" to="/contact">
              立即联系
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container resume-layout">
          <aside className="resume-sidebar">
            <div className="resume-profile-card">
              <div className="avatar">葛</div>
              <h2>{resume.name}</h2>
              <p>{resume.title}</p>

              <div className="resume-contact-list">
                <span>{siteConfig.email}</span>
                <span>{siteConfig.location}</span>
                <span>{siteConfig.domain}</span>
              </div>

              <a className="button button-primary full-width" href="/resume.pdf" download>
                下载简历
              </a>
            </div>
          </aside>

          <div className="resume-main">
            <section className="resume-section">
              <SectionTitle
                eyebrow="Education"
                title="教育背景"
                description="我的教育经历和专业背景。"
              />

              <div className="timeline">
                {resume.education.map((item) => (
                  <article className="timeline-item" key={`${item.school}-${item.time}`}>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-head">
                        <h3>{item.school}</h3>
                        <span>{item.time}</span>
                      </div>
                      <p className="resume-meta">
                        {item.degree} · {item.major}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <SectionTitle
                eyebrow="Honors"
                title="个人荣誉"
                description="奖项、证书和荣誉经历。"
              />

              <div className="resume-list-card">
                <ul className="highlight-list">
                  {resume.honors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="resume-section">
              <SectionTitle
                eyebrow="Projects"
                title="项目经历"
                description="与开发、测试、部署相关的项目实践。"
              />

              <div className="resume-project-list">
                {resume.projects.map((project) => (
                  <article className="resume-project-card" key={project.name}>
                    <div className="timeline-head">
                      <h3>{project.name}</h3>
                      <span>{project.time}</span>
                    </div>
                    <p className="resume-meta">{project.role}</p>
                    <p>{project.description}</p>

                    <ul className="highlight-list">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <SectionTitle
                eyebrow="Skills"
                title="专业技能"
                description="按照方向整理的技能栈。"
              />

              <div className="skill-grid">
                {resume.skills.map((group) => (
                  <article className="skill-card" key={group.category}>
                    <h3>{group.category}</h3>
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
            </section>

            <section className="resume-section">
              <SectionTitle
                eyebrow="Others"
                title="其它"
                description="补充说明和个人特点。"
              />

              <div className="resume-list-card">
                <ul className="highlight-list">
                  {resume.others.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="resume-section">
              <div className="contact-card contact-card-large">
                <div>
                  <p className="eyebrow">Contact</p>
                  <h2>对我的经历感兴趣？</h2>
                  <p>可以查看 PDF 简历，或者通过邮箱、GitHub 与我联系。</p>
                </div>

                <div className="hero-actions">
                  <a className="button button-secondary" href="/resume.pdf" download="葛楚楚_实习生_南京师范大学_硕士_18451817132.pdf">
                    下载简历
                  </a>
                  <Link className="button button-primary" to="/contact">
                    立即联系
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}