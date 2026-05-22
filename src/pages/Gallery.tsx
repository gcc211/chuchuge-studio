import { PhotoWall } from "../components/PhotoWall";
import { SectionTitle } from "../components/SectionTitle";

export function Gallery() {
  return (
    <main>
      <section className="page-hero section">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>照片墙</h1>
          <p>
            这里记录学习、生活、校园、项目实践中的一些片段。后续可以替换为真实照片。
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Moments"
            title="生活与学习记录"
            description="先使用占位卡片，等你准备好真实照片后，我们再切换为图片展示。"
          />

          <PhotoWall />
        </div>
      </section>
    </main>
  );
}