import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
