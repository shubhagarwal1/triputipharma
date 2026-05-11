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
    'Triputi Pharma | Wholesale Medicine & Pharmaceutical Distributor — Gurugram',
  description:
    'Triputi Pharma is a pharmaceutical wholesaler in Basai Industrial Area, Gurugram. Bulk medicines, KASDAP & PCI catalogues, competitive rates for pharmacies, clinics, and hospitals across Haryana and NCR.',
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'sirsa',
    name: 'Sirsa',
    headline: 'Pharma wholesaler supply for Sirsa & district',
    localBlurb:
      'Pharmacies and stockists in Sirsa rely on consistent availability of generics and branded lines. Triputi Pharma supports Sirsa with wholesale pricing, catalogue-backed ordering, and dependable replenishment from our Gurugram distribution base.',
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    headline: 'Basai Industrial Area — our home hub',
    localBlurb:
      'From Plot No.3, Basai Industrial Area, we serve Gurugram pharmacies, polyclinics, and hospitals with fast turnaround on high-demand molecules and full catalogue coverage.',
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    headline: 'Bulk medicines for Faridabad retailers & clinics',
    localBlurb:
      'Faridabad healthcare retailers can source PCI, KASDAP Healthcare, and KASDAP Genexx ranges in bulk. We focus on price stability and availability for NCR corridors.',
  },
  {
    slug: 'sonipat',
    name: 'Sonipat',
    headline: 'Wholesale pharmaceutical partner for Sonipat',
    localBlurb:
      'Sonipat distributors and counters benefit from structured catalogue ordering and transparent wholesale terms tied to our Gurugram warehouse operations.',
  },
  {
    slug: 'panipat',
    name: 'Panipat',
    headline: 'Medicine supply chain for Panipat pharmacies',
    localBlurb:
      'Panipat medical stores seeking reliable bulk supply can use our downloadable product books and brand-wise PDFs to plan purchases and restock efficiently.',
  },
  {
    slug: 'karnal',
    name: 'Karnal',
    headline: 'Pharma distribution support for Karnal',
    localBlurb:
      'Karnal healthcare businesses looking for a Gurugram-linked wholesaler get access to the same catalogues and price lists used across our Haryana wholesale network.',
  },
  {
    slug: 'rohtak',
    name: 'Rohtak',
    headline: 'Rohtak — catalogue-first wholesale medicines',
    localBlurb:
      'Rohtak retailers can browse PCI and KASDAP lines online before calling or WhatsApping orders, reducing mismatches on strength, pack, and schedule.',
  },
  {
    slug: 'hisar',
    name: 'Hisar',
    headline: 'Hisar pharmacies & wholesale medicine sourcing',
    localBlurb:
      'For Hisar, we emphasise predictable fulfilment on high-rotation SKUs and help counters match patient demand with our wide formulation portfolio.',
  },
  {
    slug: 'bhiwani',
    name: 'Bhiwani',
    headline: 'Wholesale partner for Bhiwani medical trade',
    localBlurb:
      'Bhiwani stockists gain a single Gurugram-based partner for multiple manufacturer lines, simplifying reconciliation and invoice trails.',
  },
  {
    slug: 'rewari',
    name: 'Rewari',
    headline: 'Medicine wholesaler routes covering Rewari',
    localBlurb:
      'Rewari is within our NCR and Haryana service pattern; enquire for route days, MOQ guidance, and catalogue segments relevant to your store mix.',
  },
  {
    slug: 'jhajjar',
    name: 'Jhajjar',
    headline: 'Jhajjar clinics & retailers — bulk pharma supply',
    localBlurb:
      'Jhajjar healthcare sellers can align with our Basai hub for consolidated wholesale orders instead of juggling multiple partial suppliers.',
  },
  {
    slug: 'bahadurgarh',
    name: 'Bahadurgarh',
    headline: 'Bahadurgarh wholesale medicines from Gurugram',
    localBlurb:
      'Proximity to Delhi NCR makes Bahadurgarh a natural fit for our logistics; ask about fast-moving lists and cold-chain expectations where applicable.',
  },
  {
    slug: 'ambala',
    name: 'Ambala',
    headline: 'Ambala pharmaceutical wholesale enquiries',
    localBlurb:
      'Ambala retailers exploring a Gurugram wholesaler can review our PDF catalogues first, then confirm availability and pricing for their basket.',
  },
  {
    slug: 'yamunanagar',
    name: 'Yamunanagar',
    headline: 'Yamunanagar medicine wholesale support',
    localBlurb:
      'Yamunanagar shops benefit from our structured brand-wise PDFs and consolidated invoicing on multi-line orders placed through phone or WhatsApp.',
  },
  {
    slug: 'kurukshetra',
    name: 'Kurukshetra',
    headline: 'Kurukshetra pharma trade — catalogue downloads',
    localBlurb:
      'Kurukshetra counters can preload ordering decisions using our online catalogues, then confirm dispatch timelines with our Gurugram desk.',
  },
  {
    slug: 'kaithal',
    name: 'Kaithal',
    headline: 'Kaithal wholesale medicine sourcing',
    localBlurb:
      'Kaithal healthcare businesses receive the same transparent catalogue access as larger cities, with guidance on pack configuration and schedule placement.',
  },
  {
    slug: 'jind',
    name: 'Jind',
    headline: 'Jind pharmacies — bulk supply partner',
    localBlurb:
      'Jind retailers mapping seasonal demand spikes can use our product book snapshots alongside brand PDFs to secure depth on critical SKUs.',
  },
  {
    slug: 'fatehabad',
    name: 'Fatehabad',
    headline: 'Fatehabad medicine wholesaler connectivity',
    localBlurb:
      'Fatehabad stockists connect to our Gurugram warehouse for scheduled fulfilment and documentation suitable for trade compliance routines.',
  },
  {
    slug: 'noida',
    name: 'Noida',
    headline: 'Noida — NCR pharmaceutical wholesale',
    localBlurb:
      'Noida clinics and retailers sourcing from Haryana wholesalers can review KASDAP and PCI PDFs online and coordinate fulfilment with our Basai team.',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    headline: 'Delhi NCR wholesale medicine enquiries',
    localBlurb:
      'Delhi buyers evaluating Gurugram-based distributors can download catalogues, compare lines, and discuss route economics before placing trial wholesale orders.',
  },
  {
    slug: 'palwal',
    name: 'Palwal',
    headline: 'Palwal bulk pharma supply from Gurugram',
    localBlurb:
      'Palwal healthcare sellers gain access to consolidated brand ranges and printable catalogue references for counter staff training and ordering.',
  },
  {
    slug: 'mahendragarh',
    name: 'Mahendragarh',
    headline: 'Mahendragarh wholesale pharmaceutical support',
    localBlurb:
      'Mahendragarh retailers can reduce stock-outs by aligning with a wholesaler that publishes full PDF catalogues and supports WhatsApp-led order clarifications.',
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
