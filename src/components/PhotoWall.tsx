import { photos } from "../content/photos";

type PhotoWallProps = {
  limit?: number;
};

export function PhotoWall({ limit }: PhotoWallProps) {
  const visiblePhotos = typeof limit === "number" ? photos.slice(0, limit) : photos;

  return (
    <div className="photo-wall">
      {visiblePhotos.map((photo, index) => (
        <article className={`photo-card photo-card-${index + 1}`} key={photo.id}>
          <img
            className="photo-image"
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
          />

          <div className="photo-overlay" />

          <div className="photo-info">
            <h3>{photo.title}</h3>
            {photo.description ? <p>{photo.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}