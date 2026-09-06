/**
 * Static property catalog for Derakhshan Real Estate (Karaj).
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
  { value: 'مهرشهر', label: 'مهرشهر' },
  { value: 'عظیمیه', label: 'عظیمیه' },
  { value: 'مصباح', label: 'مصباح' },
  { value: 'فردیس', label: 'فردیس' },
  { value: 'دهقان‌ویلا', label: 'دهقان‌ویلا' },
]

export const BEDROOM_OPTIONS = [
  { value: 'all', label: 'تعداد خواب' },
  { value: '2', label: '۲ خواب و بیشتر' },
  { value: '3', label: '۳ خواب و بیشتر' },
  { value: '4', label: '۴ خواب و بیشتر' },
]

export const properties = [
  {
    id: 'mehrshahr-terrace-penthouse',
    slug: 'penthouse-mehrshahr-terrace',
    title: 'پنت‌هاوس مدرن با تراس در مهرشهر',
    location: 'مهرشهر',
    district: 'کرج',
    price: 45000000000,
    priceLabel: '۴۵ میلیارد تومان',
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
      'پنت‌هاوسی روشن در مهرشهر با تراس وسیع، نورگیری مطلوب و پلان باز. فضاها با متریال طبیعی و جزئیات اجرایی تمیز طراحی شده‌اند و برای سکونت خانوادگی با استاندارد بالا مناسب‌اند.',
    story:
      'انتخابی برای کسانی که فضای باز، آرامش محله و کیفیت ساخت را در مهرشهر کرج جست‌وجو می‌کنند.',
    amenities: [
      'تراس ۳۵ متری',
      'آشپزخانه جزیره‌ای',
      'سیستم هوشمند',
      'انباری اختصاصی',
      'لابی منظم',
      'استخر و سونا',
    ],
    coordinates: { lat: 35.833, lng: 50.935 },
  },
  {
    id: 'azimiyeh-garden-villa',
    slug: 'villa-azimiyeh-garden',
    title: 'ویلای مدرن باغی در عظیمیه',
    location: 'عظیمیه',
    district: 'کرج',
    price: 78000000000,
    priceLabel: '۷۸ میلیارد تومان',
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
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600573472592-401b489a3cdc'),
      img('photo-1564013799919-ab600027ffc6'),
    ],
    description:
      'ویلایی مستقل در عظیمیه با حیاط خصوصی، استخر روباز و معماری معاصر. ترکیب فضای سبز و حجم‌های سنگی، حریم کامل و دسترسی مناسب به خدمات شهری کرج را فراهم کرده است.',
    story:
      'مناسب خانواده‌هایی که استقلال ویلا، فضای باز و موقعیت معتبر عظیمیه را هم‌زمان می‌خواهند.',
    amenities: [
      'حیاط ۵۰۰ متری',
      'استخر روباز',
      'اتاق مهمان مستقل',
      'آشپزخانه دوم',
      'سیستم امنیتی',
      'چیلر مرکزی',
    ],
    coordinates: { lat: 35.84, lng: 51.008 },
  },
  {
    id: 'mesbah-family-apartment',
    slug: 'apartment-mesbah-light',
    title: 'آپارتمان خانوادگی نورگیر در مصباح',
    location: 'مصباح',
    district: 'کرج',
    price: 14500000000,
    priceLabel: '۱۴٫۵ میلیارد تومان',
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
      img('photo-1493809842364-78817add7ffb'),
    ],
    description:
      'آپارتمان بازسازی‌شده در مصباح با پلان کارآمد، نور جنوبی و جزئیات اجرایی تمیز. موقعیت محله دسترسی روزمره به خدمات شهری را ساده می‌کند و برای زندگی خانوادگی انتخابی متعادل است.',
    story:
      'واحدی دقیق برای کسانی که کیفیت سکونت و دسترسی شهری در مصباح را به متراژ افراطی ترجیح می‌دهند.',
    amenities: [
      'بالکن جنوبی',
      'کابینت سفارشی',
      'کف پارکت چوبی',
      'انباری',
      'نگهبانی',
      'آسانسور',
    ],
    coordinates: { lat: 35.815, lng: 50.975 },
  },
  {
    id: 'azimiyeh-horizon-penthouse',
    slug: 'penthouse-azimiyeh-horizon',
    title: 'پنت‌هاوس مدرن در عظیمیه',
    location: 'عظیمیه',
    district: 'کرج',
    price: 28500000000,
    priceLabel: '۲۸٫۵ میلیارد تومان',
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
      img('photo-1600585154526-990dced4db0d'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1600566752355-35792bedcfea'),
    ],
    description:
      'واحدی در طبقه آخر عظیمیه با سقف بلند، شیشه‌های سرتاسری و چشم‌انداز باز شهری. طراحی داخلی مینیمال است و بر نور، سکوت و کیفیت متریال تأکید دارد.',
    story:
      'برای سکونت آرام در ارتفاع، در یکی از موقعیت‌های مطلوب مسکونی کرج.',
    amenities: [
      'سقف ۴ متری',
      'روف‌گاردن اختصاصی',
      'شومینه گازی',
      'اتاق کار',
      'جکوزی',
      'پارکینگ مهمان',
    ],
    coordinates: { lat: 35.842, lng: 51.01 },
  },
  {
    id: 'dehghanvilla-furnished-rent',
    slug: 'apartment-dehghanvilla-residence',
    title: 'آپارتمان مبله خانوادگی در دهقان‌ویلا',
    location: 'دهقان‌ویلا',
    district: 'کرج',
    price: 28000000,
    priceLabel: '۲۸ میلیون تومان',
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
      img('photo-1522708323590-d24dbb6b0267'),
      img('photo-1556912173-46c336c7fd55'),
      img('photo-1554995207-c18c203602cb'),
      img('photo-1536376072261-38c75010e6c9'),
    ],
    description:
      'واحد اجاره‌ای مبله در دهقان‌ویلا، داخل مجتمعی آرام با لابی مرتب و دسترسی مناسب به خدمات محلی. مناسب خانواده‌ها و سکونت میان‌مدت با استاندارد مشخص.',
    story: 'اجاره‌ای گزینشی با قرارداد شفاف و پشتیبانی مستقیم مشاور املاک درخشان.',
    amenities: [
      'مبله کامل',
      'سرویس نظافت',
      'پارکینگ ثابت',
      'انباری',
      'اینترنت',
      'نگهبانی',
    ],
    coordinates: { lat: 35.85, lng: 50.96 },
  },
  {
    id: 'mehrshahr-courtyard-townhouse',
    slug: 'townhouse-mehrshahr-courtyard',
    title: 'تاون‌هاوس حیاط‌دار در مهرشهر',
    location: 'مهرشهر',
    district: 'کرج',
    price: 52000000000,
    priceLabel: '۵۲ میلیارد تومان',
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
      'تاون‌هاوسی چندطبقه در مهرشهر با حیاط جنوبی، نور یکنواخت و پلان خانواده‌محور. فضای خصوصی و مشترک طوری تفکیک شده که زندگی روزمره روان و مستقل بماند.',
    story:
      'انتخابی برای کسانی که حس استقلال ویلا را در مقیاس شهری مهرشهر می‌خواهند.',
    amenities: [
      'حیاط جنوبی',
      'آشپزخانه دوبل',
      'اتاق لباس',
      'سالن خانواده',
      'موتورخانه مستقل',
      'دوربین مداربسته',
    ],
    coordinates: { lat: 35.831, lng: 50.942 },
  },
  {
    id: 'mesbah-gallery-rent',
    slug: 'apartment-mesbah-gallery',
    title: 'آپارتمان دوخوابه بازسازی‌شده در مصباح',
    location: 'مصباح',
    district: 'کرج',
    price: 18000000,
    priceLabel: '۱۸ میلیون تومان',
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
      img('photo-1618221195710-dd6b41faaea6'),
      img('photo-1616486338812-3dadae4b4ace'),
      img('photo-1615529182904-14819c35db37'),
      img('photo-1600210491369-e753d80a41f3'),
    ],
    description:
      'واحد روشن و بازسازی‌شده در مصباح با دیوارهای خنثی و نور کنترل‌شده؛ مناسب سکونت مینیمال یا زندگی/کار ترکیبی در موقعیتی شهری و در دسترس.',
    story: 'اجاره‌ای آرام برای افرادی که سادگی فضا و دسترسی محلی را اولویت می‌دهند.',
    amenities: [
      'نورگیر دوطرفه',
      'کمد دیواری',
      'آشپزخانه اپن',
      'بالکن',
      'پارکینگ مسقف',
      'لابی آرام',
    ],
    coordinates: { lat: 35.818, lng: 50.978 },
  },
  {
    id: 'fardis-family-apartment',
    slug: 'apartment-fardis-family',
    title: 'آپارتمان نوساز خانوادگی در فردیس',
    location: 'فردیس',
    district: 'کرج',
    price: 9800000000,
    priceLabel: '۹٫۸ میلیارد تومان',
    transaction: 'sale',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    area: 160,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    year: 1403,
    featured: false,
    images: [
      img('photo-1570129477492-45c003edd2be'),
      img('photo-1568605114967-8130f3a36994'),
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1560448204-e02f11c3d0e2'),
    ],
    description:
      'آپارتمان نوساز در فردیس با پلان کاربردی، نورگیری مناسب و امکانات کامل ساختمانی. گزینه‌ای منطقی برای سکونت خانوادگی یا سرمایه‌گذاری مسکونی در غرب کرج.',
    story:
      'تعادل میان قیمت، متراژ و دسترسی؛ مناسب خریدارانی که به دنبال واحدی تمیز و به‌روز در فردیس هستند.',
    amenities: [
      'آسانسور',
      'پارکینگ',
      'انباری',
      'بالکن',
      'سیستم گرمایش پکیج',
      'نگهبانی',
    ],
    coordinates: { lat: 35.724, lng: 50.988 },
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
