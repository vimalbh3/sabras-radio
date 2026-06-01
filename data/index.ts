export const presenters = [
  {
    slug: 'raj-sharma',
    name: 'Raj Sharma',
    initials: 'RS',
    show: 'Morning Glory',
    time: '6am – 10am',
    days: 'Mon – Fri',
    bio: 'Raj has been waking up Sabras listeners for over a decade. His warm energy, sharp wit, and encyclopaedic knowledge of Bollywood make the morning commute something to look forward to.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-2',
    featured: true,
  },
  {
    slug: 'priya-patel',
    name: 'Priya Patel',
    initials: 'PP',
    show: 'Desi Vibes',
    time: '10am – 1pm',
    days: 'Mon – Fri',
    bio: 'Priya brings unstoppable energy to your mid-morning with the hottest desi hits, celebrity gossip and interactive listener competitions.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-1',
    featured: true,
  },
  {
    slug: 'amir-hussain',
    name: 'Amir Hussain',
    initials: 'AH',
    show: 'Afternoon Drive',
    time: '1pm – 4pm',
    days: 'Mon – Fri',
    bio: 'Smooth, soulful and always insightful — Amir curates the perfect soundtrack for your afternoon with Bollywood classics and the latest chart hits.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-3',
    featured: true,
  },
  {
    slug: 'sonia-mehta',
    name: 'Sonia Mehta',
    initials: 'SM',
    show: 'The Drive Home',
    time: '4pm – 7pm',
    days: 'Mon – Fri',
    bio: 'Sonia is the voice millions trust to guide them home. Real stories, real music, and real conversations that matter to the South Asian community.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-2',
    featured: true,
  },
  {
    slug: 'dev-singh',
    name: 'Dev Singh',
    initials: 'DS',
    show: 'The Chart Show',
    time: '7pm – 10pm',
    days: 'Mon – Fri',
    bio: 'Dev counts down the hottest tracks in Bollywood, bhangra and Asian pop, with exclusive listener votes and artist interviews.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-1',
    featured: false,
  },
  {
    slug: 'anita-chopra',
    name: 'Anita Chopra',
    initials: 'AC',
    show: 'Weekend Breakfast',
    time: '8am – 12pm',
    days: 'Sat & Sun',
    bio: 'Anita owns the weekend. Expect the biggest playlist, listener shout-outs, and feel-good banter to make your Saturday and Sunday mornings special.',
    social: { instagram: '#', twitter: '#' },
    swatch: 'img-swatch-3',
    featured: false,
  },
]

// ── Real Sabras Radio schedule ─────────────────────────────────────────────

const WEEKDAY_SLOTS = [
  { time: '00:00', show: 'Sabras Mix',         presenter: 'Non-Stop Hits' },
  { time: '06:00', show: 'Religious Programme', presenter: '' },
  { time: '07:00', show: 'Breakfast Show',      presenter: 'Sam' },
  { time: '10:00', show: 'Mid-morning Show',    presenter: 'Amber' },
  { time: '13:00', show: 'Talks & Talkies',     presenter: 'Nihaal' },
  { time: '15:00', show: 'Long Drive',          presenter: 'Kash Kumar' },
  { time: '19:00', show: 'Sabras Mix',          presenter: '1hr Non-Stop Hits' },
  { time: '20:00', show: 'Gujarati Show',       presenter: 'Mahesh Nathwani' },
  { time: '21:00', show: 'Punjabi Show',        presenter: 'Rajpal' },
  { time: '22:00', show: 'Evening with Rumi',   presenter: 'Rumi' },
]

export const fullSchedule = [
  { day: 'Monday',    slots: WEEKDAY_SLOTS },
  { day: 'Tuesday',   slots: WEEKDAY_SLOTS },
  { day: 'Wednesday', slots: WEEKDAY_SLOTS },
  { day: 'Thursday',  slots: WEEKDAY_SLOTS },
  { day: 'Friday',    slots: WEEKDAY_SLOTS },
  { day: 'Saturday',  slots: [
    { time: '00:00', show: 'Sabras Mix',          presenter: 'Non-Stop Hits' },
    { time: '06:00', show: 'Religious Programme',  presenter: '' },
    { time: '07:00', show: 'Saturday Breakfast',   presenter: 'Zahara' },
    { time: '09:00', show: 'Mic & Masala',         presenter: 'Missy B' },
    { time: '12:00', show: 'Punjabi Show',         presenter: 'Jagdeep Rainu' },
    { time: '14:00', show: 'Gujarati Show',        presenter: 'Shobha Joshi' },
    { time: '16:00', show: 'Chart Show',           presenter: 'Sam' },
    { time: '19:00', show: 'Desi Mashup',          presenter: 'Akshay' },
    { time: '22:00', show: 'Ghazal-e-Bahar',       presenter: 'Sahil' },
  ]},
  { day: 'Sunday', slots: [
    { time: '00:00', show: 'Sabras Mix',           presenter: 'Non-Stop Hits' },
    { time: '09:00', show: 'Sunday Request',       presenter: 'Vishal Jogiya' },
    { time: '12:00', show: 'Punjabi Show',         presenter: 'Jagdeep Rainu' },
    { time: '14:00', show: 'Gujarati Show',        presenter: 'Shobha Joshi' },
    { time: '16:00', show: 'Filmi Kalakar',        presenter: 'Alia' },
    { time: '18:00', show: 'Sunday Mirchi',        presenter: 'Dhruv Pandya' },
    { time: '19:00', show: 'Bollywood Gold',       presenter: 'Rajpal' },
    { time: '22:00', show: 'Ghazal-e-Bahar',       presenter: 'Sahil' },
  ]},
]

// ── Dynamic schedule strip (used by ScheduleStrip component) ───────────────
// Returns the 4 slots around the current UK time: now, next, later, tonight.

function toMins(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + (m ?? 0)
}

export function getScheduleToday() {
  const now   = new Date()
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'long',
    hour:    '2-digit',
    minute:  '2-digit',
    hour12:  false,
  }).formatToParts(now)

  const day     = parts.find(p => p.type === 'weekday')?.value ?? 'Monday'
  const hour    = parts.find(p => p.type === 'hour')?.value    ?? '00'
  const minute  = parts.find(p => p.type === 'minute')?.value  ?? '00'
  const nowMins = toMins(`${hour}:${minute}`)

  const slots = fullSchedule.find(d => d.day === day)?.slots ?? WEEKDAY_SLOTS

  // Find the last slot whose start ≤ now
  let idx = 0
  for (let i = 0; i < slots.length; i++) {
    if (toMins(slots[i].time) <= nowMins) idx = i
  }

  const labels = ['NOW', 'NEXT', 'LATER', 'TONIGHT'] as const
  return slots.slice(idx, idx + 4).map((slot, i) => ({
    label:     labels[i] ?? 'LATER',
    show:      slot.show,
    presenter: slot.presenter,
    time:      slot.time,
  }))
}

export const newsArticles = {
  bollywood: [
    {
      slug: 'arijit-singh-sabras-session',
      category: 'Bollywood',
      headline: 'Arijit Singh Announces Exclusive Sabras Radio Live Session This Summer',
      excerpt: 'The nation\'s most beloved voice is coming to Sabras. Arijit Singh talks new music, his journey, and what fans can expect.',
      date: '23 May 2026',
      readTime: '4 min read',
      swatch: 'img-swatch-2',
    },
    {
      slug: 'kareena-kapoor-exclusive',
      category: 'Bollywood',
      headline: 'Kareena Kapoor Khan Opens Up About Family Life & Her Landmark New Film',
      excerpt: 'In a candid conversation with Sonia Mehta, Bollywood\'s queen reflects on 25 years in cinema, motherhood, and her most personal role yet.',
      date: '21 May 2026',
      readTime: '6 min read',
      swatch: 'img-swatch-1',
    },
    {
      slug: 'bollywood-charts-summer',
      category: 'Bollywood',
      headline: 'The Top 10 Bollywood Tracks Dominating the Charts This Summer',
      excerpt: 'From dancefloor anthems to soulful ballads — these are the songs defining the South Asian music scene right now.',
      date: '20 May 2026',
      readTime: '3 min read',
      swatch: 'img-swatch-3',
    },
  ],
  entertainment: [
    {
      slug: 'asian-music-awards-nominees',
      category: 'Entertainment',
      headline: 'Asian Music Awards 2026: Full Nominees List Revealed — Who Should Win?',
      excerpt: 'The nominations are in and the competition is fierce. We break down the categories, the contenders, and our predictions.',
      date: '22 May 2026',
      readTime: '5 min read',
      swatch: 'img-swatch-2',
    },
    {
      slug: 'srk-london-premiere',
      category: 'Entertainment',
      headline: 'SRK Spotted at London Premiere — Exclusive Red Carpet Coverage',
      excerpt: 'Shah Rukh Khan brought the Bollywood glamour to Leicester Square. Our team was there for every moment.',
      date: '19 May 2026',
      readTime: '4 min read',
      swatch: 'img-swatch-1',
    },
    {
      slug: 'sabras-chart-show-launch',
      category: 'Entertainment',
      headline: 'The New Sabras Chart Show: Everything You Need to Know',
      excerpt: 'Dev Singh\'s brand-new weekly countdown show launches next Friday. Here\'s what\'s changing and how you can vote.',
      date: '18 May 2026',
      readTime: '3 min read',
      swatch: 'img-swatch-3',
    },
  ],
  world: [
    {
      slug: 'south-asian-heritage-month',
      category: 'World',
      headline: 'South Asian Heritage Month: How Communities Are Celebrating Across the UK',
      excerpt: 'From Edinburgh to Birmingham, events, exhibitions and conversations are putting South Asian stories at the heart of British cultural life.',
      date: '22 May 2026',
      readTime: '5 min read',
      swatch: 'img-swatch-2',
    },
    {
      slug: 'diaspora-music-global',
      category: 'World',
      headline: 'How the South Asian Diaspora Is Reshaping Global Music',
      excerpt: 'British-Asian artists are breaking records and boundaries. We explore the movement that\'s making the world listen.',
      date: '20 May 2026',
      readTime: '7 min read',
      swatch: 'img-swatch-1',
    },
    {
      slug: 'community-awards-2026',
      category: 'World',
      headline: 'Community Awards 2026: Nominations Now Open — Nominate Your Hero',
      excerpt: 'Sabras Radio celebrates the unsung heroes of the South Asian community. Submit your nominations before 30 June.',
      date: '17 May 2026',
      readTime: '2 min read',
      swatch: 'img-swatch-3',
    },
  ],
}

export const events = [
  {
    slug: 'bollywood-summer-night',
    name: 'Bollywood Summer Night',
    venue: 'O2 Indigo, London',
    date: 'Sat 14 Jun 2026',
    time: '7:00 PM',
    category: 'Music',
    description: 'A spectacular evening of live Bollywood music, dance performances and DJ sets. Hosted by Raj Sharma and Priya Patel.',
    swatch: 'img-swatch-2',
  },
  {
    slug: 'asian-music-festival',
    name: 'Asian Music Festival',
    venue: 'Victoria Park, London',
    date: 'Sun 20 Jul 2026',
    time: '12:00 PM',
    category: 'Festival',
    description: 'The UK\'s biggest celebration of Asian music returns with 20+ artists across three stages. Free entry.',
    swatch: 'img-swatch-1',
  },
  {
    slug: 'sabras-roadshow-birmingham',
    name: 'Sabras Roadshow',
    venue: 'NEC, Birmingham',
    date: 'Fri 1 Aug 2026',
    time: '6:00 PM',
    category: 'Roadshow',
    description: 'Your favourite presenters hit the road. Live broadcasts, competitions, prizes and a full evening of entertainment.',
    swatch: 'img-swatch-3',
  },
  {
    slug: 'eid-festival-special',
    name: 'Eid Festival Special',
    venue: 'Hyde Park, London',
    date: 'Sat 13 Sep 2026',
    time: '11:00 AM',
    category: 'Community',
    description: 'Celebrating Eid with the community. Food, music, family activities and live broadcasts all day long.',
    swatch: 'img-swatch-4',
  },
]

export const competitions = [
  {
    slug: 'win-bollywood-tickets',
    title: 'Win Bollywood Summer Night Tickets',
    prize: '2 x VIP Tickets + Backstage Pass',
    closes: '10 Jun 2026',
    swatch: 'img-swatch-2',
  },
  {
    slug: 'chart-show-vote',
    title: 'Vote for the #1 Track on The Chart Show',
    prize: 'Weekly listener vote — results every Friday',
    closes: 'Ongoing',
    swatch: 'img-swatch-1',
  },
  {
    slug: 'win-arijit-experience',
    title: 'Win the Ultimate Arijit Singh Experience',
    prize: 'Tickets + Meet & Greet + Signed Album',
    closes: '30 Jun 2026',
    swatch: 'img-swatch-3',
  },
]
