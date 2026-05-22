import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>页面不存在</h1>
          <p>你访问的页面不存在，可能是地址输入错误，或者页面已经移动。</p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/">
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}