import { Link } from 'react-router-dom'
import { formatArea, formatCount } from '../data/properties'
import './PropertyCard.css'

export default function PropertyCard({ property, priority = false, variant = 'default' }) {
  const specs = [
    formatArea(property.area),
    `${formatCount(property.bedrooms)} خواب`,
    `${formatCount(property.bathrooms)} سرویس`,
  ]

  return (
    <article className={['property-card', `property-card--${variant}`].join(' ')}>
      <Link
        to={`/properties/${property.slug}`}
        className="property-card__link"
        aria-label={`مشاهده ${property.title}`}
      >
        <div className="property-card__media">
          <img
            src={property.images[0]}
            alt=""
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="property-card__badges">
            <span>{property.transaction === 'rent' ? 'اجاره' : 'فروش'}</span>
            <span>{property.typeLabel}</span>
          </div>
        </div>

        <div className="property-card__body">
          <p className="property-card__meta meta">
            <span>{property.location}</span>
            <span aria-hidden="true">،</span>
            <span>{property.district}</span>
          </p>
          <h3>{property.title}</h3>
          <p className="property-card__price price">
            {property.priceLabel}
            {property.priceSuffix ? (
              <span className="property-card__suffix"> / {property.priceSuffix}</span>
            ) : null}
          </p>
          <ul className="property-card__specs" aria-label="مشخصات کلیدی">
            {specs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span className="property-card__cta">
            مشاهده ملک
            <span aria-hidden="true">←</span>
          </span>
        </div>
      </Link>
    </article>
  )
}
