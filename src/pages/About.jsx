import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ImageBlock from '../components/ImageBlock'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import { getFeaturedProperties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './About.css'

export default function About() {
  useDocumentMeta({
    title: 'درباره ما | املاک درخشان',
    description:
      'آشنایی با فلسفه، تجربه و رویکرد املاک درخشان در معرفی خانه‌های ممتاز شمال تهران.',
  })

  const images = getFeaturedProperties(3)

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container--wide about-hero__layout">
          <Reveal>
            <div className="about-hero__copy">
              <p className="eyebrow">درباره آژانس</p>
              <h1 className="display">اعتماد، از دقت در انتخاب آغاز می‌شود</h1>
              <p className="subhead">
                املاک درخشان یک آژانس بوتیک برای معرفی املاک ممتاز است. ما به‌جای
                انباشت آگهی، روی کیفیت سکونت، موقعیت و ارائه شفاف تمرکز می‌کنیم.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImageBlock
              src={images[0].images[0]}
              alt="فضای معماری آرام"
              ratio="5 / 6"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="section about-philosophy">
        <div className="container about-philosophy__inner">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="فلسفه"
              title="خانه باید احساس درستی بدهد"
              description="ما ملک را فقط با عدد و متراژ نمی‌سنجیم. نور، سکوت، کیفیت ساخت، دسترسی و تناسب با سبک زندگی موکل، معیارهای اصلی انتخاب ما هستند."
            />
          </Reveal>
          <Reveal>
            <blockquote>
              «هر ملک باید پیش از معرفی، از فیلتر تجربه زیسته عبور کند؛ نه فقط از
              فیلتر قیمت.»
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section about-story">
        <div className="container--wide about-story__layout">
          <Reveal>
            <ImageBlock
              src={images[1].images[0]}
              alt="جزئیات معماری معاصر"
              ratio="4 / 5"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="about-story__copy">
              <SectionHeading
                eyebrow="تجربه"
                title="شناخت محلی، نگاه حرفه‌ای"
                description="سال‌ها فعالیت متمرکز در شمال تهران به ما آموخته که ارزش واقعی یک خانه، در جزئیات محله و کیفیت اجرای آن پنهان است."
              />
              <ul className="about-stats">
                {agency.stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
              <p>
                رویکرد ما ساده است: انتخاب گزینشی، روایت صادقانه، و همراهی تا لحظه
                تماس و بازدید. بدون حساب کاربری، بدون پیچیدگی، با احترام به زمان موکل.
              </p>
              <Button to="/properties" variant="secondary">
                مشاهده املاک
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-approach">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="رویکرد"
              title="چگونه با موکلان کار می‌کنیم"
            />
          </Reveal>
          <div className="about-steps">
            {[
              {
                title: 'شنیدن دقیق نیاز',
                text: 'بودجه، محله، سبک زندگی و اولویت‌های غیرقابل مذاکره را شفاف می‌کنیم.',
              },
              {
                title: 'انتخاب محدود و مرتبط',
                text: 'به‌جای ده‌ها گزینه بی‌ربط، چند ملک واقعاً مناسب پیشنهاد می‌دهیم.',
              },
              {
                title: 'ارائه شفاف',
                text: 'تصاویر، مشخصات و نقاط قوت/ضعف را با زبان ساده و حرفه‌ای بیان می‌کنیم.',
              },
              {
                title: 'همراهی تا تصمیم',
                text: 'بازدید، پاسخ‌گویی و هماهنگی را تا لحظه تصمیم‌گیری پشتیبانی می‌کنیم.',
              },
            ].map((step, index) => (
              <Reveal key={step.title} delay={index * 70} as="article" className="about-step">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-visual">
        <div className="container--wide about-visual__layout">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="ارائه"
                title="عکس خوب، نصف اعتماد است"
                description="باوری که در ارائه ملک داریم ساده است: تصویر باید حقیقت فضا را منتقل کند، نه اغراق تبلیغاتی."
              />
              <Button to="/contact">گفتگو با تیم ما</Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImageBlock
              src={images[2].images[0]}
              alt="نمای داخلی روشن"
              ratio="16 / 11"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="اگر به‌دنبال خانه درست هستید"
        description="تیم املاک درخشان آماده شنیدن نیاز شما و معرفی گزینه‌های واقعی است."
        primary={{ to: '/contact', label: 'تماس با ما' }}
        secondary={{ to: '/properties', label: 'مشاهده املاک' }}
      />
    </div>
  )
}
