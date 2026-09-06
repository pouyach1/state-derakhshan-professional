import {
  BEDROOM_OPTIONS,
  LOCATIONS,
  PROPERTY_TYPES,
  TRANSACTION_TYPES,
} from '../data/properties'
import './PropertyFilters.css'

export default function PropertyFilters({ value, onChange, resultCount }) {
  const update = (key, next) => {
    onChange({ ...value, [key]: next })
  }

  return (
    <form
      className="property-filters"
      onSubmit={(e) => e.preventDefault()}
      aria-label="فیلتر املاک"
    >
      <div className="property-filters__search">
        <label htmlFor="property-search" className="sr-only">
          جستجو
        </label>
        <input
          id="property-search"
          type="search"
          placeholder="جستجو بر اساس نام، محله یا نوع..."
          value={value.q}
          onChange={(e) => update('q', e.target.value)}
        />
      </div>

      <div className="property-filters__row">
        <label>
          <span className="sr-only">محله</span>
          <select value={value.location} onChange={(e) => update('location', e.target.value)}>
            {LOCATIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">نوع ملک</span>
          <select value={value.type} onChange={(e) => update('type', e.target.value)}>
            {PROPERTY_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">نوع معامله</span>
          <select
            value={value.transaction}
            onChange={(e) => update('transaction', e.target.value)}
          >
            {TRANSACTION_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">تعداد خواب</span>
          <select value={value.bedrooms} onChange={(e) => update('bedrooms', e.target.value)}>
            {BEDROOM_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="property-filters__count meta" aria-live="polite">
        {resultCount.toLocaleString('fa-IR')} ملک
      </p>
    </form>
  )
}
