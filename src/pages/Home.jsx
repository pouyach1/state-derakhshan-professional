import { Link } from 'react-router-dom'
import AgencyInfo from '../components/AgencyInfo'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import ImageBlock from '../components/ImageBlock'
import PropertyGrid from '../components/PropertyGrid'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../data/agency'
import { getFeaturedProperties, properties } from '../data/properties'
import { useDocumentMeta } from '../hooks/useReveal'
import './Home.css'

export default function Home() {
  useDocumentMeta({
    title: 'املاک درخشان | خانه‌های ممتاز کرج',
    description:
      'املاک درخشان؛ آژانس تخصصی معرفی و ارائه املاک ممتاز در مهرشهر، عظیمیه، مصباح، فردیس و دهقان‌ویلا.',
  })

  const featured = getFeaturedProperties(4)
  const heroProperty = featured[0]

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden={!heroProperty}>
          <img
            src={heroProperty.images[0]}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero__veil" />
        </div>

        <div className="container--wide home-hero__content">
          <p className="eyebrow">املاک درخشان · کرج</p>
          <h1 className="display">
            خانه‌هایی که
            <span> با دقت دیده شده‌اند</span>
          </h1>
          <p className="home-hero__lead home-hero__lead--full">
            املاک درخشان یک نمایشگاه دیجیتال برای املاک ممتاز کرج است؛ انتخابی
            محدود، ارائه دقیق، و مسیری روشن تا گفتگوی مستقیم با مشاور.
          </p>
          <p className="home-hero__lead home-hero__lead--mobile">
            انتخابی محدود از املاک ممتاز کرج؛ معرفی دقیق تا گفتگو با مشاور.
          </p>
          <div className="home-hero__actions">
            <Button to="/properties" size="lg">
              مشاهده املاک
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="home-hero__ghost">
              تماس با درخشان
            </Button>
          </div>
          <div className="home-hero__trust meta" aria-label="محله‌های تخصصی">
            <span>مهرشهر</span>
            <span aria-hidden="true">·</span>
            <span>عظیمیه</span>
            <span aria-hidden="true">·</span>
            <span>مصباح</span>
            <span aria-hidden="true">·</span>
            <span>فردیس</span>
            <span aria-hidden="true">·</span>
            <span>دهقان‌ویلا</span>
          </div>
        </div>
      </section>

      <section className="section home-featured">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="انتخاب سردبیر"
              title="ملک‌های منتخب این فصل"
              description="مجموعه‌ای محدود از واحدها و ویلاهایی که از نظر موقعیت، نور، کیفیت ساخت و حس سکونت بررسی شده‌اند."
              action={
                <Button to="/properties" variant="text">
                  همه املاک
                </Button>
              }
            />
          </Reveal>
          <Reveal>
            <PropertyGrid properties={featured} columns={2} variant="landscape" />
          </Reveal>
        </div>
      </section>

      <section className="section home-discover">
        <div className="container--wide home-discover__layout">
          <Reveal>
            <SectionHeading
              eyebrow="کاوش محله"
              title="محله‌هایی که می‌شناسیم"
              description="تمرکز ما روی چند منطقه کلیدی کرج است؛ جایی که جزئیات محله به‌اندازه خود ملک اهمیت دارد."
            />
            <ul className="home-locations">
              {agency.locations.map((item) => (
                <li key={item.name}>
                  <Link to={`/properties?location=${encodeURIComponent(item.name)}`}>
                    <span>{item.name}</span>
                    <strong>{item.count.toLocaleString('fa-IR')} ملک</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ImageBlock
              src={featured[1]?.images[0]}
              alt="نمای معماری معاصر"
              caption="نور، متریال و نسبت‌ها؛ سه معیار اصلی انتخاب ما"
              ratio="4 / 5"
            />
          </Reveal>
        </div>
      </section>

      <section className="section home-agency">
        <div className="container--wide home-agency__layout">
          <Reveal>
            <ImageBlock
              src={featured[2]?.images[0]}
              alt="فضای داخلی آرام و روشن"
              ratio="5 / 6"
              priority={false}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="home-agency__copy">
              <SectionHeading
                eyebrow="آژانس"
                title="کم‌ حرف، دقیق، معتبر"
                description="ما به‌جای فهرست بلند املاک، روی کیفیت معرفی تمرکز می‌کنیم. هر ملک روایت، تصویر و مشخصات شفاف دارد تا تصمیم‌گیری ساده‌تر شود."
              />
              <ul className="home-principles">
                <li>
                  <strong>انتخاب گزینشی</strong>
                  <span>فقط ملک‌هایی که استاندارد سکونت ما را دارند.</span>
                </li>
                <li>
                  <strong>ارائه حرفه‌ای</strong>
                  <span>عکس معماری، توضیح دقیق و مشخصات خوانا.</span>
                </li>
                <li>
                  <strong>ارتباط مستقیم</strong>
                  <span>بدون حساب کاربری؛ فقط تماس شفاف با مشاور.</span>
                </li>
              </ul>
              <div className="home-agency__stats">
                {agency.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <Button to="/about" variant="secondary">
                بیشتر درباره درخشان
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-services">
        <div className="container--wide">
          <Reveal>
            <SectionHeading
              eyebrow="خدمات"
              title="آنچه برای موکلان انجام می‌دهیم"
              description="خدماتی متمرکز برای خرید، فروش و اجاره املاک ممتاز؛ بدون پیچیدگی‌های نرم‌افزاری."
            />
          </Reveal>
          <div className="home-services__grid">
            {agency.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60} as="article" className="service-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-strip">
        <div className="container--wide home-strip__layout">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="مجموعه‌ها"
                title={`${properties.length.toLocaleString('fa-IR')} ملک آماده بازدید`}
                description="از پنت‌هاوس‌های تراس‌دار تا ویلاهای باغی؛ فهرست ما کوتاه اما باکیفیت است."
              />
              <Button to="/properties">ورود به فهرست املاک</Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <AgencyInfo />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="برای ملک مناسب، گفتگو کافی است"
        description="اگر به‌دنبال خانه‌ای خاص در کرج هستید، همین حالا با تیم درخشان در ارتباط باشید."
        primary={{ to: '/contact', label: 'صفحه تماس' }}
        secondary={{ href: agency.whatsapp, label: 'پیام در واتساپ' }}
      />
    </div>
  )
}
