export interface ChartEntry {
  rank: number
  lastWeek: number | 'new' | 'reentry'
  title: string
  artist: string
  weeks: number
  peak: number
  spotifyId: string | null
  imageUrl: string | null
}

export const CHART_WEEK   = 24
export const CHART_ENDING = '21 June 2026'
export const CHART_HOST   = 'Sam'
export const CHART_TIME   = 'Every Saturday 4–7pm'

export const CHART: ChartEntry[] = [
  { rank:  1, lastWeek:  1,          title: 'Jaiye Sajana',              artist: 'Dhurandhar 2',                      weeks: 12, peak:  1, spotifyId: '6xwKNAUHeo2DbWNAPi8aEy', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024c3eeb98521e02693a46d6db' },
  { rank:  2, lastWeek:  2,          title: 'Bangles',                   artist: 'Sanju Rathod & G Spark (Marathi)',  weeks:  8, peak:  1, spotifyId: '0ocYeOy5vn4UjX4DLsLoJ0', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027ff6a68a330e81721829ec01' },
  { rank:  3, lastWeek:  3,          title: 'Bairaan',                   artist: 'Banjaare',                          weeks: 12, peak:  1, spotifyId: '0RsH8g8DxdYZgdGcod5I36', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02cdce9a38222807fa703b4396' },
  { rank:  4, lastWeek:  5,          title: 'Hellallallo',               artist: 'Peddi (Telugu)',                    weeks:  3, peak:  4, spotifyId: null, imageUrl: null },
  { rank:  5, lastWeek:  8,          title: 'Chunnari Chunnari – Lets Go', artist: 'Hai Jawani To Ishq Hona Hai',    weeks:  3, peak:  5, spotifyId: null, imageUrl: null },
  { rank:  6, lastWeek: 'new',       title: 'Siir Siir',                 artist: 'Nora Fatehi, Vegedream & Sanjoy',  weeks:  1, peak:  6, spotifyId: null, imageUrl: null },
  { rank:  7, lastWeek:  4,          title: 'Shararat',                  artist: 'Dhurandhar',                        weeks: 26, peak:  1, spotifyId: null, imageUrl: null },
  { rank:  8, lastWeek:  6,          title: 'Shee',                      artist: 'Mitta Ror & Swara Verma',           weeks: 11, peak:  3, spotifyId: null, imageUrl: null },
  { rank:  9, lastWeek: 10,          title: 'Mashooqa',                  artist: 'Cocktail 2',                        weeks:  3, peak:  9, spotifyId: null, imageUrl: null },
  { rank: 10, lastWeek:  7,          title: 'Jaan Se Guzarte Hain',      artist: 'Dhurandhar 2',                      weeks: 12, peak:  3, spotifyId: null, imageUrl: null },
  { rank: 11, lastWeek: 15,          title: 'Ucha Lamba Kad Forever',    artist: 'Welcome To The Jungle',             weeks:  2, peak: 11, spotifyId: null, imageUrl: null },
  { rank: 12, lastWeek: 10,          title: 'Wow',                       artist: 'Hai Jawani To Ishq Hona Hai',       weeks:  6, peak:  5, spotifyId: null, imageUrl: null },
  { rank: 13, lastWeek: 11,          title: 'Mutta Kalakki',             artist: 'Youth (Tamil)',                     weeks: 13, peak:  5, spotifyId: null, imageUrl: null },
  { rank: 14, lastWeek: 13,          title: 'Ari Ari',                   artist: 'Dhurandhar 2',                      weeks: 13, peak:  4, spotifyId: null, imageUrl: null },
  { rank: 15, lastWeek: 16,          title: 'Chikiri Chikiri',           artist: 'Peddi (Telugu)',                    weeks:  2, peak: 15, spotifyId: null, imageUrl: null },
  { rank: 16, lastWeek: 14,          title: 'Aura 10/10',                artist: 'Meesaya Murukku 2 (Tamil)',          weeks: 13, peak:  7, spotifyId: null, imageUrl: null },
  { rank: 17, lastWeek: 18,          title: 'Gehra Hua',                 artist: 'Dhurandhar',                        weeks: 29, peak:  1, spotifyId: null, imageUrl: null },
  { rank: 18, lastWeek: 'reentry',   title: 'Rai Rai Ra Ra',             artist: 'Peddi (Telugu)',                    weeks:  1, peak: 18, spotifyId: null, imageUrl: null },
  { rank: 19, lastWeek: 17,          title: 'Majboor',                   artist: 'Sheheryar & Zoha Waseem',           weeks:  8, peak: 10, spotifyId: null, imageUrl: null },
  { rank: 20, lastWeek: 23,          title: 'Title Song',                artist: 'Hai Jawani To Ishq Hona Hai',       weeks:  2, peak: 20, spotifyId: null, imageUrl: null },
  { rank: 21, lastWeek: 'new',       title: 'Sadi Sun',                  artist: 'Harsh Nusi',                        weeks:  1, peak: 21, spotifyId: null, imageUrl: null },
  { rank: 22, lastWeek: 21,          title: 'Aaya Sher',                 artist: 'The Paradise (Telugu)',             weeks: 16, peak:  8, spotifyId: null, imageUrl: null },
  { rank: 23, lastWeek: 24,          title: 'Maskara',                   artist: 'Main Vaapas Aaunga',                weeks:  5, peak: 16, spotifyId: null, imageUrl: null },
  { rank: 24, lastWeek: 'new',       title: 'Vallah',                    artist: 'Cocktail 2',                        weeks:  1, peak: 24, spotifyId: null, imageUrl: null },
  { rank: 25, lastWeek: 20,          title: 'Ghis Ghis Ghis',            artist: 'Welcome To The Jungle',             weeks:  3, peak: 12, spotifyId: null, imageUrl: null },
  { rank: 26, lastWeek: 26,          title: 'Tujhko',                    artist: 'Cocktail 2',                        weeks:  3, peak: 22, spotifyId: null, imageUrl: null },
  { rank: 27, lastWeek: 22,          title: 'Pagla Bana Delu',           artist: 'Pramod Premi (Bhojpuri)',            weeks:  3, peak: 18, spotifyId: null, imageUrl: null },
  { rank: 28, lastWeek: 27,          title: 'Karuppa Kooda Va',          artist: 'Karuppa (Tamil)',                   weeks:  3, peak: 26, spotifyId: null, imageUrl: null },
  { rank: 29, lastWeek: 29,          title: 'Radharani',                 artist: 'Vishaldan Gadhvi (Gujarati)',        weeks:  3, peak: 27, spotifyId: null, imageUrl: null },
  { rank: 30, lastWeek: 28,          title: 'Vaari Jaavaan',             artist: 'Dhurandhar 2',                      weeks:  3, peak: 28, spotifyId: null, imageUrl: null },
]
