import { Link, Navigate, useParams } from 'react-router-dom'
import AgencyInfo from '../components/AgencyInfo'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import PropertyGallery from '../components/PropertyGallery'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import {
  formatArea,
  formatCount,
  getPropertyBySlug,
  properties,
} from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './PropertyDetail.css'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug)

  useDocumentMeta({
    title: property
      ? `${property.title} | املاک درخشان`
      : 'ملک یافت نشد | املاک درخشان',
    description: property
      ? property.description
      : 'ملک مورد نظر در فهرست املاک درخشان موجود نیست.',
  })

  if (!property) {
    return <Navigate to="/properties" replace />
  }

  const related = properties
    .filter((item) => item.id !== property.id && item.location === property.location)
    .slice(0, 2)

  const fallbackRelated =
    related.length >= 2
      ? related
      : properties.filter((item) => item.id !== property.id).slice(0, 2)

  const specs = [
    { label: 'متراژ', value: formatArea(property.area) },
    { label: 'خواب', value: formatCount(property.bedrooms) },
    { label: 'سرویس', value: formatCount(property.bathrooms) },
    { label: 'پارکینگ', value: formatCount(property.parking) },
    { label: 'سال', value: formatCount(property.year) },
    {
      label: 'معامله',
      value: property.transaction === 'rent' ? 'اجاره' : 'فروش',
    },
  ]

  return (
    <div className="property-detail">
      <section className="property-detail__top section--sm">
        <div className="container--wide">
          <nav className="property-detail__crumb meta" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span>/</span>
            <Link to="/properties">املاک</Link>
            <span>/</span>
            <span>{property.title}</span>
          </nav>

          <div className="property-detail__heading">
            <div>
              <p className="eyebrow">
                {property.location} · {property.typeLabel}
              </p>
              <h1 className="display">{property.title}</h1>
              <p className="property-detail__price price">
                {property.priceLabel}
                {property.priceSuffix ? (
                  <span> / {property.priceSuffix}</span>
                ) : null}
              </p>
            </div>
            <div className="property-detail__heading-actions">
              <Button href={agency.whatsapp} target="_blank" rel="noreferrer">
                درخواست بازدید
              </Button>
              <Button href={agency.phoneHref} variant="secondary">
                تماس تلفنی
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section property-detail__gallery">
        <div className="container--wide">
          <Reveal>
            <PropertyGallery
              key={property.id}
              images={property.images}
              title={property.title}
            />
          </Reveal>
        </div>
      </section>

      <section className="section property-detail__body">
        <div className="container--wide property-detail__layout">
          <div className="property-detail__main">
            <Reveal>
              <ul className="property-detail__specs">
                {specs.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="property-detail__copy">
                <h2 className="headline">درباره این ملک</h2>
                <p>{property.description}</p>
                <p>{property.story}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="property-detail__amenities">
                <h2 className="headline">امکانات و ویژگی‌ها</h2>
                <ul>
                  {property.amenities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="property-detail__map">
                <h2 className="headline">موقعیت</h2>
                <p className="meta">
                  {property.location}، {property.district}
                </p>
                <div className="property-detail__map-frame">
                  <iframe
                    title={`نقشه ${property.title}`}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                      property.coordinates.lng - 0.02
                    }%2C${property.coordinates.lat - 0.015}%2C${
                      property.coordinates.lng + 0.02
                    }%2C${property.coordinates.lat + 0.015}&layer=mapnik&marker=${
                      property.coordinates.lat
                    }%2C${property.coordinates.lng}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <AgencyInfo compact />
          </Reveal>
        </div>
      </section>

      <section className="section property-detail__related">
        <div className="container--wide">
          <SectionHeading
            eyebrow="ادامه کاوش"
            title="ملک‌های مرتبط"
            action={
              <Button to="/properties" variant="text">
                همه املاک
              </Button>
            }
          />
          <PropertyGrid properties={fallbackRelated} columns={2} variant="landscape" />
        </div>
      </section>

      <CTASection
        title="این ملک را از نزدیک ببینید"
        description="برای هماهنگی بازدید یا دریافت جزئیات بیشتر، با تیم املاک درخشان در ارتباط باشید."
        primary={{ href: agency.whatsapp, label: 'پیام واتساپ' }}
        secondary={{ to: '/contact', label: 'صفحه تماس' }}
      />
    </div>
  )
}
