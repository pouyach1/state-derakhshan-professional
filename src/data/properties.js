/**
 * Static property catalog for Derakhshan Real Estate.
 * Images: curated Unsplash architecture photography.
 */

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const PROPERTY_TYPES = [
  { value: 'all', label: 'همه انواع' },
  { value: 'apartment', label: 'آپارتمان' },
  { value: 'penthouse', label: 'پنت‌هاوس' },
  { value: 'villa', label: 'ویلا' },
  { value: 'townhouse', label: 'تاون‌هاوس' },
]

export const TRANSACTION_TYPES = [
  { value: 'all', label: 'همه معاملات' },
  { value: 'sale', label: 'فروش' },
  { value: 'rent', label: 'اجاره' },
]

export const LOCATIONS = [
  { value: 'all', label: 'همه محله‌ها' },
  { value: 'الهیه', label: 'الهیه' },
  { value: 'فرشته', label: 'فرشته' },
  { value: 'زعفرانیه', label: 'زعفرانیه' },
  { value: 'نیاوران', label: 'نیاوران' },
  { value: 'فرمانیه', label: 'فرمانیه' },
  { value: 'ولنجک', label: 'ولنجک' },
]

export const BEDROOM_OPTIONS = [
  { value: 'all', label: 'تعداد خواب' },
  { value: '2', label: '۲ خواب و بیشتر' },
  { value: '3', label: '۳ خواب و بیشتر' },
  { value: '4', label: '۴ خواب و بیشتر' },
]

export const properties = [
  {
    id: 'zafaraniyeh-terrace',
    slug: 'penthouse-zafaraniyeh-terrace',
    title: 'پنت‌هاوس تراس‌دار زعفرانیه',
    location: 'زعفرانیه',
    district: 'تهران',
    price: 98000000000,
    priceLabel: '۹۸ میلیارد تومان',
    transaction: 'sale',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    area: 320,
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    year: 1402,
    featured: true,
    heroOrder: 1,
    images: [
      img('photo-1600596542815-ffad4c1539a9'),
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600566753190-17f0baa2a6c3'),
      img('photo-1600585154340-be6161a56a0c'),
    ],
    description:
      'پنت‌هاوسی با نور شمال‌غربی، تراس وسیع و چشم‌انداز پیوسته به کوه‌های البرز. فضاها با متریال طبیعی، خطوط آرام و جزئیات دقیق طراحی شده‌اند تا سکونت روزمره کیفیتی ماندگار داشته باشد.',
    story:
      'این واحد برای کسانی انتخاب شده که سکوت محله، ارتفاع مناسب و کیفیت ساخت را به متراژ صرف ترجیح می‌دهند.',
    amenities: [
      'تراس ۳۵ متری',
      'آشپزخانه جزیره‌ای',
      'سیستم هوشمند',
      'انباری اختصاصی',
      'لابی اختصاصی',
      'استخر و سونا',
    ],
    coordinates: { lat: 35.807, lng: 51.418 },
  },
  {
    id: 'elahiyeh-garden',
    slug: 'villa-elahiyeh-garden',
    title: 'ویلای باغی الهیه',
    location: 'الهیه',
    district: 'تهران',
    price: 185000000000,
    priceLabel: '۱۸۵ میلیارد تومان',
    transaction: 'sale',
    type: 'villa',
    typeLabel: 'ویلا',
    area: 680,
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    year: 1400,
    featured: true,
    heroOrder: 2,
    images: [
      img('photo-1613490493576-7fde63acd811'),
      img('photo-1600047509807-ba8f99d36cd2'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600573472592-401b489a3cdc'),
    ],
    description:
      'ویلایی مستقل با حیاط خصوصی، استخر روباز و معماری معاصر که میان فضای سبز و حجم‌های سنگی تعادل برقرار کرده است. مناسب سکونت خانوادگی با نیاز به حریم کامل.',
    story:
      'موقعیت ملک امکان دسترسی آرام به فرشته و کامرانیه را فراهم می‌کند؛ بدون از دست دادن حس خلوت.',
    amenities: [
      'حیاط ۵۰۰ متری',
      'استخر روباز',
      'اتاق مهمان مستقل',
      'آشپزخانه دوم',
      'سیستم امنیتی',
      'چیلر مرکزی',
    ],
    coordinates: { lat: 35.798, lng: 51.428 },
  },
  {
    id: 'fereshteh-light',
    slug: 'apartment-fereshteh-light',
    title: 'آپارتمان نورگیر فرشته',
    location: 'فرشته',
    district: 'تهران',
    price: 52000000000,
    priceLabel: '۵۲ میلیارد تومان',
    transaction: 'sale',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 185,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 1401,
    featured: true,
    heroOrder: 3,
    images: [
      img('photo-1502672260266-1c1ef2d93688'),
      img('photo-1560448204-e02f11c3d0e2'),
      img('photo-1560185127-6ed189bf02f4'),
      img('photo-1484154216822-a623401771c7'),
    ],
    description:
      'آپارتمانی بازسازی‌شده با پلان کارآمد، نور جنوبی و جزئیات اجرایی تمیز. مناسب سکونت شهری در قلب محله فرشته با دسترسی پیاده به کافه‌ها و خدمات روزمره.',
    story: 'انتخابی دقیق برای کسانی که کیفیت زندگی شهری را به متراژ افراطی ترجیح می‌دهند.',
    amenities: [
      'بالکن جنوبی',
      'کابینت سفارشی',
      'کف پارکت چوبی',
      'انباری',
      'نگهبانی ۲۴ ساعته',
      'آسانسور دوبل',
    ],
    coordinates: { lat: 35.801, lng: 51.422 },
  },
  {
    id: 'niavaran-horizon',
    slug: 'penthouse-niavaran-horizon',
    title: 'پنت‌هاوس افق نیاوران',
    location: 'نیاوران',
    district: 'تهران',
    price: 72000000000,
    priceLabel: '۷۲ میلیارد تومان',
    transaction: 'sale',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    area: 245,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    year: 1403,
    featured: true,
    heroOrder: 4,
    images: [
      img('photo-1600607687644-c7171b42498b'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1600585154526-990dced4db0d'),
      img('photo-1600047509358-9dc435629748'),
    ],
    description:
      'واحدی در آخرین طبقه با سقف بلند، شیشه‌های سرتاسری و چشم‌انداز دوردست. طراحی داخلی مینیمال، تأکید بر نور و سکوت فضا.',
    story: 'برای سکونت آرام در ارتفاع، با فاصله‌ای هوشمندانه از ازدحام خیابان.',
    amenities: [
      'سقف ۴ متری',
      'روف‌گاردن اختصاصی',
      'شومینه گازی',
      'اتاق کار',
      'جکوزی',
      'پارکینگ مهمان',
    ],
    coordinates: { lat: 35.816, lng: 51.47 },
  },
  {
    id: 'farmanieh-residence',
    slug: 'apartment-farmanieh-residence',
    title: 'رزیدنس فرمانیه',
    location: 'فرمانیه',
    district: 'تهران',
    price: 45000000,
    priceLabel: '۴۵ میلیون تومان',
    priceSuffix: 'ماهیانه',
    transaction: 'rent',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 210,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 1399,
    featured: false,
    images: [
      img('photo-1493809842364-78817add7ffb'),
      img('photo-1522708323590-d24dbb6b0267'),
      img('photo-1556912173-46c336c7fd55'),
      img('photo-1554995207-c18c203602cb'),
    ],
    description:
      'واحد اجاره‌ای مبله در مجتمعی آرام با لابی مرتب و دسترسی مناسب به پارک‌ها. مناسب خانواده‌ها و حرفه‌ای‌هایی که سکونت موقت با استاندارد بالا می‌خواهند.',
    story: 'اجاره‌ای گزینشی با قرارداد شفاف و پشتیبانی مستقیم مشاور.',
    amenities: [
      'مبله کامل',
      'سرویس نظافت',
      'باشگاه مجتمع',
      'انباری',
      'اینترنت فیبر',
      'نگهبانی',
    ],
    coordinates: { lat: 35.803, lng: 51.44 },
  },
  {
    id: 'velenjak-courtyard',
    slug: 'townhouse-velenjak-courtyard',
    title: 'تاون‌هاوس حیاط‌دار ولنجک',
    location: 'ولنجک',
    district: 'تهران',
    price: 110000000000,
    priceLabel: '۱۱۰ میلیارد تومان',
    transaction: 'sale',
    type: 'townhouse',
    typeLabel: 'تاون‌هاوس',
    area: 410,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    year: 1401,
    featured: true,
    images: [
      img('photo-1600585154363-67eb9e2e2099'),
      img('photo-1605276374104-dee2a0ed3cd6'),
      img('photo-1600121848594-d8644e57abab'),
      img('photo-1600607687920-4e2a09cf159d'),
    ],
    description:
      'تاون‌هاوسی چندطبقه با حیاط جنوبی، نور یکنواخت و پلان خانواده‌محور. ترکیب فضای خصوصی و مشترک به‌گونه‌ای طراحی شده که زندگی روزمره روان بماند.',
    story: 'انتخابی برای کسانی که استقلال ویلا را در مقیاس شهری می‌خواهند.',
    amenities: [
      'حیاط جنوبی',
      'آشپزخانه دوبل',
      'اتاق لباس',
      'سالن سینما',
      'موتورخانه مستقل',
      'دوربین مداربسته',
    ],
    coordinates: { lat: 35.82, lng: 51.4 },
  },
  {
    id: 'elahiyeh-studio-view',
    slug: 'apartment-elahiyeh-gallery',
    title: 'آپارتمان گالری‌گونه الهیه',
    location: 'الهیه',
    district: 'تهران',
    price: 38000000,
    priceLabel: '۳۸ میلیون تومان',
    priceSuffix: 'ماهیانه',
    transaction: 'rent',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 145,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    year: 1402,
    featured: false,
    images: [
      img('photo-1536376072261-38c75010e6c9'),
      img('photo-1618221195710-dd6b41faaea6'),
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1615529182904-14819c35db37'),
    ],
    description:
      'واحدی روشن با دیوارهای خنثی و نور کنترل‌شده؛ مناسب سکونت مینیمال یا استفاده به‌عنوان فضای زندگی/کار ترکیبی.',
    story: 'اجاره‌ای آرام در یکی از بهترین بلوک‌های الهیه.',
    amenities: [
      'نورگیر دوطرفه',
      'کمد دیواری',
      'آشپزخانه اپن',
      'بالکن',
      'پارکینگ مسقف',
      'لابی آرام',
    ],
    coordinates: { lat: 35.797, lng: 51.426 },
  },
  {
    id: 'zafaraniyeh-classic',
    slug: 'apartment-zafaraniyeh-classic',
    title: 'آپارتمان کلاسیک زعفرانیه',
    location: 'زعفرانیه',
    district: 'تهران',
    price: 64000000000,
    priceLabel: '۶۴ میلیارد تومان',
    transaction: 'sale',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 230,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    year: 1398,
    featured: false,
    images: [
      img('photo-1600210491892-03d54c0aaf64'),
      img('photo-1600489000022-c2086d79f9d4'),
      img('photo-1600495034863-3a7ba1c4b5c6'),
      img('photo-1600585154084-4e5fe7c39198'),
    ],
    description:
      'واحدی با سقف بلند، گچ‌بری ظریف و بازسازی انتخابی که اصالت فضا را حفظ کرده است. مناسب علاقه‌مندان به سکونت کلاسیکِ به‌روزشده.',
    story: 'تعادل میان شخصیت معماری قدیمی و امکانات زندگی امروز.',
    amenities: [
      'سقف بلند',
      'شومینه',
      'اتاق خدمتکار',
      'انباری بزرگ',
      'تراس غربی',
      'نگهبانی',
    ],
    coordinates: { lat: 35.809, lng: 51.415 },
  },
]

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug)
}

export function getFeaturedProperties(limit = 4) {
  return properties.filter((p) => p.featured).slice(0, limit)
}

export function formatArea(area) {
  return `${area.toLocaleString('fa-IR')} متر`
}

export function formatCount(n) {
  return n.toLocaleString('fa-IR')
}

export function filterProperties(list, filters) {
  return list.filter((p) => {
    if (filters.q) {
      const q = filters.q.trim()
      const hay = `${p.title} ${p.location} ${p.typeLabel} ${p.description}`
      if (!hay.includes(q)) return false
    }
    if (filters.location && filters.location !== 'all' && p.location !== filters.location) {
      return false
    }
    if (filters.type && filters.type !== 'all' && p.type !== filters.type) {
      return false
    }
    if (
      filters.transaction &&
      filters.transaction !== 'all' &&
      p.transaction !== filters.transaction
    ) {
      return false
    }
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      if (p.bedrooms < Number(filters.bedrooms)) return false
    }
    return true
  })
}
