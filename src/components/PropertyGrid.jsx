import Button from './Button'
import PropertyCard from './PropertyCard'
import './PropertyGrid.css'

export default function PropertyGrid({ properties, columns = 3, variant = 'default' }) {
  if (!properties?.length) {
    return (
      <div className="property-grid__empty">
        <p>ملکی با این مشخصات یافت نشد.</p>
        <p className="meta">فیلترها را تغییر دهید یا همه املاک را مشاهده کنید.</p>
        <Button to="/properties" variant="secondary">
          نمایش همه املاک
        </Button>
      </div>
    )
  }

  return (
    <div className={`property-grid property-grid--${columns}`}>
      {properties.map((property, index) => (
        <PropertyCard
          key={property.id}
          property={property}
          priority={index < 2}
          variant={variant}
        />
      ))}
    </div>
  )
}
