import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { agency } from '../data/agency'
import Button from './Button'
import './Header.css'

const links = [
  { to: '/', label: 'خانه', end: true },
  { to: '/properties', label: 'املاک' },
  { to: '/about', label: 'درباره ما' },
  { to: '/contact', label: 'تماس با ما' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === '/' && !scrolled && !open

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

  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (open) setOpen(false)
  }

  const close = () => setOpen(false)

  return (
    <header
      className={[
        'site-header',
        scrolled ? 'is-scrolled' : '',
        open ? 'is-open' : '',
        overHero ? 'is-over-hero' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="site-header__inner container--wide">
        <Link to="/" className="brand" onClick={close} aria-label={agency.name}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">
            <strong className="brand__fa">{agency.name}</strong>
            <small className="brand__en">Derakhshan Real Estate</small>
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
          <a className="site-header__phone" href={agency.phoneHref} dir="ltr">
            <span className="site-header__phone-label">تماس مستقیم</span>
            <span className="site-header__phone-number">{agency.phone}</span>
          </a>
          <a
            className="site-header__call"
            href={agency.mobileHref || agency.phoneHref}
            aria-label="تماس تلفنی"
          >
            تماس
          </a>
          <Link to="/properties" className="site-header__cta">
            مشاهده املاک
          </Link>
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
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label="بستن منو"
          onClick={close}
        />
        <nav className="mobile-nav__panel" aria-label="منوی موبایل">
          <p className="mobile-nav__kicker meta">املاک درخشان · کرج</p>
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
            <div className="mobile-nav__cta-row">
              <Button href={agency.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
                واتساپ
              </Button>
              <Button href={agency.phoneHref} variant="inverse">
                تماس
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
