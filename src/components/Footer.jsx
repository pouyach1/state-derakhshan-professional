import { Link } from 'react-router-dom'
import { agency } from '../data/agency'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container--wide site-footer__top">
        <div className="site-footer__brand">
          <p className="eyebrow">Derakhshan</p>
          <h2 className="headline">{agency.name}</h2>
          <p className="subhead">{agency.tagline}</p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h3>کاوش</h3>
            <ul>
              <li>
                <Link to="/properties">املاک</Link>
              </li>
              <li>
                <Link to="/about">درباره ما</Link>
              </li>
              <li>
                <Link to="/contact">تماس</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>ارتباط</h3>
            <ul>
              <li>
                <a href={agency.phoneHref} dir="ltr">
                  {agency.phone}
                </a>
              </li>
              <li>
                <a href={agency.emailHref}>{agency.email}</a>
              </li>
              <li>
                <a href={agency.whatsapp} target="_blank" rel="noreferrer">
                  واتساپ
                </a>
              </li>
              <li>
                <a href={agency.telegram} target="_blank" rel="noreferrer">
                  تلگرام
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>دفتر</h3>
            <ul>
              <li>{agency.address}</li>
              <li>{agency.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container--wide site-footer__bottom">
        <p>© {new Date().getFullYear()} {agency.name}. تمامی حقوق محفوظ است.</p>
        <p className="meta">نمایشگاه دیجیتال املاک درخشان</p>
      </div>
    </footer>
  )
}
