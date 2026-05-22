import { SectionTitle } from "../components/SectionTitle";
import { siteConfig } from "../content/site";

export function Contact() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>联系我</h1>
          <p>
            如果你对我的项目、经历或学习方向感兴趣，可以通过以下方式联系我。
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Get in touch"
            title="联系方式"
            description="目前主要使用邮箱和 GitHub。"
          />

          <div className="contact-card">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub：gcc211
            </a>
            <span>域名：{siteConfig.domain}</span>
            <span>地点：{siteConfig.location}</span>
          </div>
        </div>
      </section>
    </main>
  );
}