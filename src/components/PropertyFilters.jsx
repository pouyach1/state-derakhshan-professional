import { useEffect, useId, useMemo, useState } from 'react'
import {
  BEDROOM_OPTIONS,
  LOCATIONS,
  PROPERTY_TYPES,
  TRANSACTION_TYPES,
} from '../data/properties'
import Button from './Button'
import './PropertyFilters.css'

const emptyFilters = {
  q: '',
  location: 'all',
  type: 'all',
  transaction: 'all',
  bedrooms: 'all',
}

export default function PropertyFilters({ value, onChange, resultCount }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()

  const update = (key, next) => {
    onChange({ ...value, [key]: next })
  }

  const activeChips = useMemo(() => {
    const chips = []
    if (value.q?.trim()) chips.push({ key: 'q', label: `جستجو: ${value.q.trim()}` })
    if (value.location !== 'all') chips.push({ key: 'location', label: value.location })
    if (value.type !== 'all') {
      const type = PROPERTY_TYPES.find((item) => item.value === value.type)
      chips.push({ key: 'type', label: type?.label || value.type })
    }
    if (value.transaction !== 'all') {
      const transaction = TRANSACTION_TYPES.find((item) => item.value === value.transaction)
      chips.push({ key: 'transaction', label: transaction?.label || value.transaction })
    }
    if (value.bedrooms !== 'all') {
      chips.push({ key: 'bedrooms', label: `${Number(value.bedrooms).toLocaleString('fa-IR')}+ خواب` })
    }
    return chips
  }, [value])

  const clearChip = (key) => {
    onChange({ ...value, [key]: emptyFilters[key] })
  }

  const clearAll = () => onChange({ ...emptyFilters })

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const fields = (idPrefix) => (
    <>
      <div className="property-filters__search">
        <label htmlFor={`${idPrefix}-property-search`}>جستجو</label>
        <input
          id={`${idPrefix}-property-search`}
          type="search"
          placeholder="نام ملک، محله یا نوع..."
          value={value.q}
          onChange={(e) => update('q', e.target.value)}
        />
      </div>

      <div className="property-filters__row">
        <label>
          <span>محله</span>
          <select value={value.location} onChange={(e) => update('location', e.target.value)}>
            {LOCATIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>نوع ملک</span>
          <select value={value.type} onChange={(e) => update('type', e.target.value)}>
            {PROPERTY_TYPES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>معامله</span>
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
          <span>خواب</span>
          <select value={value.bedrooms} onChange={(e) => update('bedrooms', e.target.value)}>
            {BEDROOM_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  )

  return (
    <div className="property-filters">
      <div className="property-filters__toolbar">
        <p className="property-filters__count meta" aria-live="polite">
          {resultCount.toLocaleString('fa-IR')} ملک
        </p>
        <button
          type="button"
          className="property-filters__toggle"
          aria-expanded={open}
          aria-controls="property-filters-sheet"
          onClick={() => setOpen(true)}
        >
          فیلتر
          {activeChips.length ? (
            <span className="property-filters__badge">
              {activeChips.length.toLocaleString('fa-IR')}
            </span>
          ) : null}
        </button>
        {activeChips.length ? (
          <button type="button" className="property-filters__clear" onClick={clearAll}>
            حذف فیلترها
          </button>
        ) : null}
      </div>

      {activeChips.length ? (
        <ul className="property-filters__chips" aria-label="فیلترهای فعال">
          {activeChips.map((chip) => (
            <li key={chip.key}>
              <button type="button" onClick={() => clearChip(chip.key)}>
                <span>{chip.label}</span>
                <span aria-hidden="true">×</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <form
        className="property-filters__panel property-filters__panel--desktop"
        onSubmit={(e) => e.preventDefault()}
        aria-label="فیلتر املاک"
      >
        {fields('desktop')}
      </form>

      {open ? (
        <div className="property-filters__sheet-root">
          <button
            type="button"
            className="property-filters__backdrop"
            aria-label="بستن فیلترها"
            onClick={() => setOpen(false)}
          />
          <div
            id="property-filters-sheet"
            className="property-filters__sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="property-filters__sheet-handle" aria-hidden="true" />
            <div className="property-filters__sheet-head">
              <h2 id={titleId} className="headline">
                فیلتر املاک
              </h2>
              <button type="button" className="property-filters__sheet-close" onClick={() => setOpen(false)}>
                بستن
              </button>
            </div>
            <form
              className="property-filters__panel property-filters__panel--sheet"
              onSubmit={(e) => {
                e.preventDefault()
                setOpen(false)
              }}
            >
              {fields('sheet')}
              <div className="property-filters__sheet-actions">
                <button type="button" className="property-filters__clear" onClick={clearAll}>
                  پاک کردن
                </button>
                <Button type="submit">
                  نمایش {resultCount.toLocaleString('fa-IR')} ملک
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
