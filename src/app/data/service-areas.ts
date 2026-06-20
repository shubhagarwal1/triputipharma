/**
 * Service-area hubs for local SEO. Each entry has a unique blurb to reduce thin / duplicate content.
 * When adding cities, also append URLs to public/sitemap.xml and public/seo-urls.txt
 */
export interface ServiceArea {
  slug: string;
  name: string;
  /** One-line hook for UI + meta variety */
  headline: string;
  /** 2–3 sentences unique to this city / cluster */
  localBlurb: string;
}

export const SITE_ORIGIN = 'https://triputipharma.com';

export const DEFAULT_META = {
  title:
    'Triputi Pharma | Pharmaceutical Marketing & Distribution Partner — Haryana, Delhi NCR, Rajasthan & Gujarat',
  description:
    'Triputi Pharma is a trusted pharmaceutical marketing and distribution partner in Sector 9, Basai, Gurugram. 2000+ products and reliable supply for pharmacies, hospitals, clinics, and healthcare institutions across Haryana, Delhi NCR, Rajasthan, and Gujarat.',
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'sirsa',
    name: 'Sirsa',
    headline: 'Pharmaceutical distribution partner for Sirsa & district',
    localBlurb:
      'Pharmacies and healthcare providers in Sirsa rely on consistent availability of generics and branded lines. Triputi Pharma supports Sirsa with catalogue-backed ordering and dependable replenishment from our Gurugram distribution base.',
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    headline: 'Sector 9, Basai — our home hub',
    localBlurb:
      'From our Sector 9 (Basai) hub, we serve Gurugram pharmacies, polyclinics, and hospitals with fast turnaround on high-demand molecules and full catalogue coverage.',
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    headline: 'Reliable medicine supply for Faridabad pharmacies & clinics',
    localBlurb:
      'Faridabad pharmacies, clinics, and hospitals can source our trusted brand portfolio with dependable availability. We focus on stock consistency and timely delivery across the NCR corridor.',
  },
  {
    slug: 'sonipat',
    name: 'Sonipat',
    headline: 'Pharmaceutical distribution partner for Sonipat',
    localBlurb:
      'Sonipat pharmacies and healthcare counters benefit from structured catalogue ordering and transparent terms tied to our Gurugram distribution operations.',
  },
  {
    slug: 'panipat',
    name: 'Panipat',
    headline: 'Medicine supply chain for Panipat pharmacies',
    localBlurb:
      'Panipat medical stores seeking reliable supply can use our downloadable product books and brand-wise PDFs to plan purchases and restock efficiently.',
  },
  {
    slug: 'karnal',
    name: 'Karnal',
    headline: 'Pharmaceutical distribution support for Karnal',
    localBlurb:
      'Karnal healthcare providers connected to our Gurugram hub get access to the same catalogues and product range used across our distribution network.',
  },
  {
    slug: 'rohtak',
    name: 'Rohtak',
    headline: 'Rohtak — catalogue-first pharmaceutical supply',
    localBlurb:
      'Pharmacies in Rohtak can browse our brand lines online before calling or WhatsApping orders, reducing mismatches on strength, pack, and schedule.',
  },
  {
    slug: 'hisar',
    name: 'Hisar',
    headline: 'Hisar pharmacies & dependable medicine sourcing',
    localBlurb:
      'For Hisar, we emphasise predictable fulfilment on high-rotation SKUs and help healthcare counters match patient demand with our wide formulation portfolio.',
  },
  {
    slug: 'bhiwani',
    name: 'Bhiwani',
    headline: 'Distribution partner for the Bhiwani medical trade',
    localBlurb:
      'Bhiwani pharmacies gain a single Gurugram-based partner for multiple brand lines, simplifying reconciliation and invoice trails.',
  },
  {
    slug: 'rewari',
    name: 'Rewari',
    headline: 'Medicine distribution routes covering Rewari',
    localBlurb:
      'Rewari is within our NCR and Haryana service pattern; enquire for route days, order guidance, and catalogue segments relevant to your store mix.',
  },
  {
    slug: 'jhajjar',
    name: 'Jhajjar',
    headline: 'Jhajjar clinics & pharmacies — reliable pharma supply',
    localBlurb:
      'Jhajjar healthcare providers can align with our Gurugram hub for consolidated orders instead of juggling multiple partial suppliers.',
  },
  {
    slug: 'bahadurgarh',
    name: 'Bahadurgarh',
    headline: 'Bahadurgarh pharmaceutical supply from Gurugram',
    localBlurb:
      'Proximity to Delhi NCR makes Bahadurgarh a natural fit for our logistics; ask about fast-moving lists and cold-chain expectations where applicable.',
  },
  {
    slug: 'ambala',
    name: 'Ambala',
    headline: 'Ambala pharmaceutical distribution enquiries',
    localBlurb:
      'Ambala pharmacies exploring a Gurugram-based distribution partner can review our PDF catalogues first, then confirm availability and pricing for their basket.',
  },
  {
    slug: 'yamunanagar',
    name: 'Yamunanagar',
    headline: 'Yamunanagar medicine distribution support',
    localBlurb:
      'Yamunanagar pharmacies benefit from our structured brand-wise PDFs and consolidated invoicing on multi-line orders placed by phone or WhatsApp.',
  },
  {
    slug: 'kurukshetra',
    name: 'Kurukshetra',
    headline: 'Kurukshetra pharma trade — catalogue downloads',
    localBlurb:
      'Kurukshetra healthcare counters can preload ordering decisions using our online catalogues, then confirm dispatch timelines with our Gurugram desk.',
  },
  {
    slug: 'kaithal',
    name: 'Kaithal',
    headline: 'Kaithal pharmaceutical sourcing',
    localBlurb:
      'Kaithal healthcare providers receive the same transparent catalogue access as larger cities, with guidance on pack configuration and schedule placement.',
  },
  {
    slug: 'jind',
    name: 'Jind',
    headline: 'Jind pharmacies — dependable supply partner',
    localBlurb:
      'Jind pharmacies mapping seasonal demand spikes can use our product book snapshots alongside brand PDFs to secure depth on critical SKUs.',
  },
  {
    slug: 'fatehabad',
    name: 'Fatehabad',
    headline: 'Fatehabad medicine distribution connectivity',
    localBlurb:
      'Fatehabad pharmacies connect to our Gurugram warehouse for scheduled fulfilment and documentation suitable for trade compliance routines.',
  },
  {
    slug: 'noida',
    name: 'Noida',
    headline: 'Noida — NCR pharmaceutical distribution',
    localBlurb:
      'Noida clinics and pharmacies sourcing from Haryana can review our brand PDFs online and coordinate fulfilment with our Gurugram team.',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    headline: 'Delhi NCR pharmaceutical distribution enquiries',
    localBlurb:
      'Delhi buyers evaluating Gurugram-based distribution partners can download catalogues, compare lines, and discuss route economics before placing trial orders.',
  },
  {
    slug: 'palwal',
    name: 'Palwal',
    headline: 'Palwal pharmaceutical supply from Gurugram',
    localBlurb:
      'Palwal healthcare providers gain access to consolidated brand ranges and printable catalogue references for counter staff training and ordering.',
  },
  {
    slug: 'mahendragarh',
    name: 'Mahendragarh',
    headline: 'Mahendragarh pharmaceutical distribution support',
    localBlurb:
      'Mahendragarh pharmacies can reduce stock-outs by aligning with a distribution partner that publishes full PDF catalogues and supports WhatsApp-led order clarifications.',
  },
  {
    slug: 'nuh',
    name: 'Nuh',
    headline: 'Nuh (Mewat) pharmaceutical distribution support',
    localBlurb:
      'Pharmacies and clinics in Nuh (Mewat) can rely on our Gurugram hub for steady availability of essential medicines, catalogue-backed ordering, and responsive support across the district.',
  },
  {
    slug: 'charkhi-dadri',
    name: 'Charkhi Dadri',
    headline: 'Charkhi Dadri pharmaceutical supply partner',
    localBlurb:
      'Charkhi Dadri healthcare providers connect with our distribution network for consistent stock of high-demand lines, transparent ordering, and dependable replenishment from Gurugram.',
  },
];

const SLUG_MAP = new Map(SERVICE_AREAS.map((a) => [a.slug, a]));

export function getServiceAreaBySlug(
  slug: string | null | undefined,
): ServiceArea | null {
  if (!slug) {
    return null;
  }
  const normalized = slug.toLowerCase().trim();
  return SLUG_MAP.get(normalized) ?? null;
}

export function normalizeCityQuery(raw: string | null | undefined): string | null {
  if (!raw) {
    return null;
  }
  const slug = raw
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return SLUG_MAP.has(slug) ? slug : null;
}
