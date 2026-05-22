import { Link, useParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { posts } from "../content/posts";

export function BlogDetail() {
  const { id } = useParams();

  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <main>
        <section className="page-hero section">
          <div className="container">
            <p className="eyebrow">Post Not Found</p>
            <h1>文章不存在</h1>
            <p>你访问的文章不存在，可能是地址输入错误或文章已经移动。</p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/blog">
                返回博客列表
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
          <p className="eyebrow">{post.date}</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>

          <div className="tag-list page-tags">
            {post.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="button button-secondary" to="/blog">
              返回文章列表
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container article-container">
          <article className="article-card">
            {post.content.map((section) => (
              <section className="article-section" key={section.heading}>
                <SectionTitle
                  eyebrow="Article"
                  title={section.heading}
                  description=""
                />
                <p>{section.body}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}