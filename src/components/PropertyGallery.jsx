import { useState } from 'react'
import './PropertyGallery.css'

export default function PropertyGallery({ images, title }) {
  const [active, setActive] = useState(0)
  const safeActive = Math.min(active, images.length - 1)

  const go = (dir) => {
    setActive((current) => {
      const next = current + dir
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  return (
    <div className="property-gallery">
      <div className="property-gallery__stage">
        <img src={images[safeActive]} alt={`${title} — تصویر ${safeActive + 1}`} />
        {images.length > 1 ? (
          <>
            <button
              type="button"
              className="property-gallery__nav property-gallery__nav--prev"
              onClick={() => go(-1)}
              aria-label="تصویر قبلی"
            >
              ›
            </button>
            <button
              type="button"
              className="property-gallery__nav property-gallery__nav--next"
              onClick={() => go(1)}
              aria-label="تصویر بعدی"
            >
              ‹
            </button>
            <p className="property-gallery__counter" aria-live="polite">
              {(safeActive + 1).toLocaleString('fa-IR')} /{' '}
              {images.length.toLocaleString('fa-IR')}
            </p>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="property-gallery__thumbs">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                className={index === safeActive ? 'is-active' : undefined}
                onClick={() => setActive(index)}
                aria-label={`نمایش تصویر ${index + 1}`}
                aria-current={index === safeActive}
              >
                <img src={`${src}&w=400`} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
