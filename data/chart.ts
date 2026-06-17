export interface ChartEntry {
  rank: number
  lastWeek: number | 'new'
  title: string
  artist: string
  weeks: number
  peak: number
  spotifyId: string | null  // paste Spotify track ID to enable embed preview
}

export const CHART_WEEK    = 24
export const CHART_ENDING  = '21 June 2026'
export const CHART_HOST    = 'Sam'
export const CHART_TIME    = 'Every Saturday 4–7pm'

export const CHART: ChartEntry[] = [
  { rank:  1, lastWeek:  2,     title: 'Tum Kya Mile',         artist: 'Arijit Singh & Shreya Ghoshal',    weeks: 12, peak:  1, spotifyId: null },
  { rank:  2, lastWeek:  1,     title: 'Kesariya',             artist: 'Arijit Singh',                     weeks: 24, peak:  1, spotifyId: null },
  { rank:  3, lastWeek:  5,     title: 'Chand Mera Dil',       artist: 'Shreya Ghoshal',                   weeks:  6, peak:  3, spotifyId: null },
  { rank:  4, lastWeek:  3,     title: 'Teri Baaton Mein',     artist: 'Asees Kaur & Tanveer Evan',        weeks:  9, peak:  2, spotifyId: null },
  { rank:  5, lastWeek:  8,     title: 'O Bedardeya',          artist: 'Arijit Singh',                     weeks: 15, peak:  4, spotifyId: null },
  { rank:  6, lastWeek:  4,     title: 'Deva Deva',            artist: 'Arijit Singh',                     weeks: 18, peak:  2, spotifyId: null },
  { rank:  7, lastWeek: 'new',  title: 'Lover',                artist: 'Diljit Dosanjh',                   weeks:  1, peak:  7, spotifyId: null },
  { rank:  8, lastWeek:  6,     title: 'Raataan Lambiyan',     artist: 'Jubin Nautiyal & Asees Kaur',      weeks: 32, peak:  1, spotifyId: null },
  { rank:  9, lastWeek: 11,     title: 'G.O.A.T.',             artist: 'Diljit Dosanjh',                   weeks:  4, peak:  9, spotifyId: null },
  { rank: 10, lastWeek:  7,     title: 'Apna Bana Le',         artist: 'Arijit Singh',                     weeks: 21, peak:  3, spotifyId: null },
  { rank: 11, lastWeek: 14,     title: 'Besharam Rang',        artist: 'Shilpa Rao & Caralisa Monteiro',   weeks:  8, peak:  5, spotifyId: null },
  { rank: 12, lastWeek:  9,     title: 'Pasoori',              artist: 'Ali Sethi & Shae Gill',            weeks: 46, peak:  1, spotifyId: null },
  { rank: 13, lastWeek: 15,     title: 'Heeriye',              artist: 'Jasleen Royal ft. Arijit Singh',   weeks:  7, peak: 11, spotifyId: null },
  { rank: 14, lastWeek: 12,     title: 'Softly',               artist: 'Karan Aujla',                      weeks: 11, peak:  8, spotifyId: null },
  { rank: 15, lastWeek: 'new',  title: 'Naina',                artist: 'Arijit Singh',                     weeks:  1, peak: 15, spotifyId: null },
  { rank: 16, lastWeek: 13,     title: 'Jhoome Jo Pathaan',    artist: 'Arijit Singh & Sukriti Kakar',     weeks: 14, peak:  4, spotifyId: null },
  { rank: 17, lastWeek: 19,     title: 'Ranjha',               artist: 'B Praak & Jasleen Royal',          weeks:  5, peak: 17, spotifyId: null },
  { rank: 18, lastWeek: 16,     title: 'Sajni',                artist: 'Arijit Singh',                     weeks:  3, peak: 13, spotifyId: null },
  { rank: 19, lastWeek: 20,     title: 'Dance Ka Bhoot',       artist: 'Arijit Singh',                     weeks: 16, peak:  9, spotifyId: null },
  { rank: 20, lastWeek: 18,     title: 'Illegal Weapon 2.0',   artist: 'Jasmine Sandlas',                  weeks:  9, peak: 12, spotifyId: null },
  { rank: 21, lastWeek: 23,     title: 'Naatu Naatu',          artist: 'Rahul Sipligunj & Kaala Bhairava', weeks: 22, peak:  5, spotifyId: null },
  { rank: 22, lastWeek: 17,     title: 'Jhol',                 artist: 'Maanu & Annural Khalid',           weeks:  7, peak: 14, spotifyId: null },
  { rank: 23, lastWeek: 25,     title: 'Nach Punjaban',        artist: 'Gurnam Bhullar',                   weeks:  4, peak: 22, spotifyId: null },
  { rank: 24, lastWeek: 21,     title: 'Woh Bhi Din The',      artist: 'Jubin Nautiyal',                   weeks:  6, peak: 18, spotifyId: null },
  { rank: 25, lastWeek: 22,     title: 'Taare Ginn',           artist: 'Darshan Raval',                    weeks:  8, peak: 20, spotifyId: null },
  { rank: 26, lastWeek: 'new',  title: 'Kya Loge Tum',        artist: 'Arijit Singh',                     weeks:  1, peak: 26, spotifyId: null },
  { rank: 27, lastWeek: 28,     title: 'Proper Patola',        artist: 'Diljit Dosanjh & Badshah',         weeks: 14, peak:  6, spotifyId: null },
  { rank: 28, lastWeek: 26,     title: 'Ik Vaari Aa',          artist: 'Arijit Singh',                     weeks: 10, peak: 19, spotifyId: null },
  { rank: 29, lastWeek: 30,     title: 'Tenu Leke',            artist: 'Udit Narayan',                     weeks:  3, peak: 27, spotifyId: null },
  { rank: 30, lastWeek: 27,     title: 'Lamborghini',          artist: 'Honey Singh & Neha Kakkar',        weeks:  5, peak: 24, spotifyId: null },
]
