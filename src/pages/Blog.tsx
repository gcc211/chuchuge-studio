import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { posts } from "../content/posts";

export function Blog() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>技术博客</h1>
          <p>这里整理我的学习笔记、项目复盘和网站搭建记录。</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Posts"
            title="全部文章"
            description="点击文章卡片可以查看完整内容。"
          />

          <div className="post-grid">
            {posts.map((post) => (
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
    </main>
  );
}