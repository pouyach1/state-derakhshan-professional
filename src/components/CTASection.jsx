import Button from './Button'
import './CTASection.css'

export default function CTASection({
  eyebrow = 'شروع گفتگو',
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <section className="cta-section section">
      <div className="container cta-section__panel">
        <div className="cta-section__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="headline">{title}</h2>
          {description ? <p className="subhead">{description}</p> : null}
        </div>
        <div className="cta-section__actions">
          {primary ? (
            <Button
              to={primary.to}
              href={primary.href}
              variant="inverse"
              size="lg"
            >
              {primary.label}
            </Button>
          ) : null}
          {secondary ? (
            <Button
              to={secondary.to}
              href={secondary.href}
              variant="ghost"
              size="lg"
              className="cta-section__secondary"
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
