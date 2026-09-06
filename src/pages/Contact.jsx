import { useState } from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import { useDocumentMeta } from '../hooks/useReveal'
import './Contact.css'

const initialForm = {
  name: '',
  phone: '',
  message: '',
}

export default function Contact() {
  useDocumentMeta({
    title: 'تماس | املاک درخشان',
    description:
      'راه‌های ارتباط مستقیم با املاک درخشان: تلفن، واتساپ، تلگرام، ایمیل و مراجعه حضوری.',
  })

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section--sm">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="تماس"
              title="گفتگو را ساده شروع کنید"
              description="بدون فرم‌های پیچیده و بدون حساب کاربری. کافی است تماس بگیرید، پیام بفرستید یا از طریق فرم کوتاه زیر با ما در ارتباط باشید."
            />
          </Reveal>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container--wide contact-body__layout">
          <Reveal>
            <div className="contact-channels">
              <article>
                <h2>تلفن دفتر</h2>
                <a href={agency.phoneHref} dir="ltr">
                  {agency.phone}
                </a>
              </article>
              <article>
                <h2>موبایل مشاور</h2>
                <a href={agency.mobileHref} dir="ltr">
                  {agency.mobile}
                </a>
              </article>
              <article>
                <h2>پیام‌رسان</h2>
                <div className="contact-channels__links">
                  <a href={agency.whatsapp} target="_blank" rel="noreferrer">
                    واتساپ
                  </a>
                  <a href={agency.telegram} target="_blank" rel="noreferrer">
                    تلگرام
                  </a>
                </div>
              </article>
              <article>
                <h2>ایمیل</h2>
                <a href={agency.emailHref}>{agency.email}</a>
              </article>
              <article className="contact-channels__wide">
                <h2>آدرس دفتر</h2>
                <p>{agency.address}</p>
                <p className="meta">{agency.hours}</p>
                <div className="contact-channels__actions">
                  <Button href={agency.mapLink} target="_blank" rel="noreferrer" variant="secondary">
                    مسیر روی نقشه
                  </Button>
                  <Button
                    href={agency.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    variant="text"
                  >
                    اینستاگرام
                  </Button>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <h2 className="headline">پیام کوتاه</h2>
              <p className="meta">فقط برای هماهنگی اولیه؛ ما مستقیم با شما تماس می‌گیریم.</p>

              <label>
                نام
                <input
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                />
              </label>

              <label>
                شماره تماس
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  dir="ltr"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </label>

              <label>
                پیام
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                />
              </label>

              <Button type="submit">ارسال پیام</Button>

              {submitted ? (
                <p className="contact-form__success" role="status">
                  پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section contact-map">
        <div className="container--wide">
          <Reveal>
            <div className="contact-map__frame">
              <iframe
                title="موقعیت دفتر املاک درخشان"
                src={agency.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
