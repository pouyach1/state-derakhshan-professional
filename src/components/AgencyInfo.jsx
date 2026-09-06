import Button from './Button'
import { agency } from '../data/agency'
import './AgencyInfo.css'

export default function AgencyInfo({ compact = false }) {
  return (
    <aside className={['agency-info', compact ? 'agency-info--compact' : ''].join(' ')}>
      <p className="eyebrow">مشاور املاک</p>
      <h3>{agency.name}</h3>
      <p>{agency.tagline}</p>
      <ul className="agency-info__contacts">
        <li>
          <span>تلفن</span>
          <a href={agency.phoneHref} dir="ltr">
            {agency.phone}
          </a>
        </li>
        <li>
          <span>موبایل</span>
          <a href={agency.mobileHref} dir="ltr">
            {agency.mobile}
          </a>
        </li>
        <li>
          <span>ایمیل</span>
          <a href={agency.emailHref}>{agency.email}</a>
        </li>
      </ul>
      <div className="agency-info__actions">
        <Button href={agency.whatsapp} target="_blank" rel="noreferrer">
          واتساپ
        </Button>
        <Button to="/contact" variant="secondary">
          فرم تماس
        </Button>
      </div>
    </aside>
  )
}
