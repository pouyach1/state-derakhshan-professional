import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'default',
  action,
  className = '',
}) {
  return (
    <div
      className={[
        'section-heading',
        `section-heading--${align}`,
        `section-heading--${tone}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="section-heading__copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="headline">{title}</h2> : null}
        {description ? <p className="subhead">{description}</p> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  )
}
