import './ImageBlock.css'

export default function ImageBlock({
  src,
  alt,
  caption,
  ratio = '4 / 5',
  priority = false,
  className = '',
}) {
  return (
    <figure className={['image-block', className].filter(Boolean).join(' ')}>
      <div className="image-block__frame" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {caption ? <figcaption className="meta">{caption}</figcaption> : null}
    </figure>
  )
}
