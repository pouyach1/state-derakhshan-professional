import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { agency } from '../data/agency'
import Button from './Button'
import './Header.css'

const links = [
  { to: '/', label: 'خانه', end: true },
  { to: '/properties', label: 'املاک' },
  { to: '/about', label: 'درباره ما' },
  { to: '/contact', label: 'تماس' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={['site-header', scrolled ? 'is-scrolled' : '', open ? 'is-open' : '']
      .filter(Boolean)
      .join(' ')}
    >
      <div className="site-header__inner container--wide">
        <Link to="/" className="brand" onClick={close} aria-label={agency.name}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">
            <strong>{agency.name}</strong>
            <small>{agency.nameEn}</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="ناوبری اصلی">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                ['site-nav__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone meta" href={agency.phoneHref}>
            {agency.phone}
          </a>
          <Button to="/contact" size="sm" className="site-header__cta">
            مشاوره
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={['mobile-nav', open ? 'is-open' : ''].filter(Boolean).join(' ')}
        hidden={!open}
      >
        <nav className="mobile-nav__panel" aria-label="منوی موبایل">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={close}
              className={({ isActive }) =>
                ['mobile-nav__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mobile-nav__footer">
            <p className="meta">{agency.address}</p>
            <Button to="/properties" onClick={close}>
              مشاهده املاک
            </Button>
            <Button href={agency.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
              پیام واتساپ
            </Button>
            <Button href={agency.phoneHref} variant="inverse">
              تماس تلفنی
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
