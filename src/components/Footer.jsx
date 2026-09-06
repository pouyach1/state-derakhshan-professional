import { Link } from 'react-router-dom'
import { agency } from '../data/agency'
import Button from './Button'
import './Footer.css'

const navLinks = [
  { to: '/', label: 'خانه' },
  { to: '/properties', label: 'املاک' },
  { to: '/about', label: 'درباره ما' },
  { to: '/contact', label: 'تماس با ما' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container--wide site-footer__main">
        <div className="site-footer__brand">
          <p className="site-footer__eyebrow">Derakhshan Real Estate</p>
          <h2 className="site-footer__title">{agency.name}</h2>
          <p className="site-footer__tagline">{agency.tagline}</p>
          <div className="site-footer__mobile-cta">
            <Button href={agency.whatsapp} target="_blank" rel="noreferrer">
              واتساپ
            </Button>
            <Button href={agency.phoneHref} variant="secondary">
              تماس
            </Button>
          </div>
        </div>

        <div className="site-footer__groups">
          <div className="site-footer__group">
            <h3>کاوش</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__group">
            <h3>تماس</h3>
            <ul>
              <li>
                <a
                  className="site-footer__phone"
                  href={agency.phoneHref}
                  dir="ltr"
                >
                  {agency.phone}
                </a>
              </li>
              <li>
                <a href={agency.emailHref}>{agency.email}</a>
              </li>
              <li className="site-footer__address">{agency.address}</li>
            </ul>
          </div>

          <div className="site-footer__group">
            <h3>شبکه‌ها</h3>
            <ul>
              <li>
                <a href={agency.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={agency.telegram} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href={agency.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container--wide site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {agency.nameEn}
        </p>
        <p className="site-footer__credit">Designed by Vorqen</p>
      </div>
    </footer>
  )
}
