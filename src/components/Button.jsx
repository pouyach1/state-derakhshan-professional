import { Link } from 'react-router-dom'
import './Button.css'

const VARIANT_CLASS = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  ghost: 'btn--ghost',
  inverse: 'btn--inverse',
  text: 'btn--text',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = ['btn', VARIANT_CLASS[variant], `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <span>{children}</span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      <span>{children}</span>
    </button>
  )
}
