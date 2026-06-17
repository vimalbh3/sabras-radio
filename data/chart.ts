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
  { rank:  4, lastWeek:  5,          title: 'Hellallallo',               artist: 'Peddi (Telugu)',                    weeks:  3, peak:  4, spotifyId: '7yfBat6kf9vOPNSWbYyeHp', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0246e6e6a2774e87430e6a5f5c' },
  { rank:  5, lastWeek:  8,          title: 'Chunnari Chunnari – Lets Go', artist: 'Hai Jawani To Ishq Hona Hai',    weeks:  3, peak:  5, spotifyId: '7d4TNquNa91thANgxrD8h2', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027423d9578263dad537a61a22' },
  { rank:  6, lastWeek: 'new',       title: 'Siir Siir',                 artist: 'Nora Fatehi, Vegedream & Sanjoy',  weeks:  1, peak:  6, spotifyId: '3vel6OhBsqzuPXVUMNoHyR', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e799e707cd677f087f6f152d' },
  { rank:  7, lastWeek:  4,          title: 'Shararat',                  artist: 'Dhurandhar',                        weeks: 26, peak:  1, spotifyId: '0uvnGQnVe313EXePbRnZEH', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c53e5adf9f81693d62f98019' },
  { rank:  8, lastWeek:  6,          title: 'Sheesha',                   artist: 'Mitta Ror & Swara Verma',           weeks: 11, peak:  3, spotifyId: '412poAqbwD8OC0dYD1nBkV', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02190b5b394a6fc5574ceea4da' },
  { rank:  9, lastWeek: 10,          title: 'Mashooqa',                  artist: 'Cocktail 2',                        weeks:  3, peak:  9, spotifyId: '64KxZ9K8PYSQ9CVimLlqxK', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02bd164e3bbec608aedda85a22' },
  { rank: 10, lastWeek:  7,          title: 'Jaan Se Guzarte Hain',      artist: 'Dhurandhar 2',                      weeks: 12, peak:  3, spotifyId: '4aWTPC6cuebk9zSpW1PY1Y', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024c3eeb98521e02693a46d6db' },
  { rank: 11, lastWeek: 15,          title: 'Ucha Lamba Kad Forever',    artist: 'Welcome To The Jungle',             weeks:  2, peak: 11, spotifyId: '6K5G42R7yGiwEMxVgGEphi', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027a91de4dd74a42daa4af0037' },
  { rank: 12, lastWeek: 10,          title: 'Wow',                       artist: 'Hai Jawani To Ishq Hona Hai',       weeks:  6, peak:  5, spotifyId: '4vtF4PXXIHaw3k1z846wSn', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026964d76d1a6f4e4a9715b22b' },
  { rank: 13, lastWeek: 11,          title: 'Mutta Kalakki',             artist: 'Youth (Tamil)',                     weeks: 13, peak:  5, spotifyId: '3GNlsHDf3OH7V3LgccGAFc', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02347f6136e4f63cd00675bed2' },
  { rank: 14, lastWeek: 13,          title: 'Ari Ari',                   artist: 'Dhurandhar 2',                      weeks: 13, peak:  4, spotifyId: '2SeUci6OXx1ztZiFiDIyX5', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02f1d982bdf924dd4015ddf475' },
  { rank: 15, lastWeek: 16,          title: 'Chikiri Chikiri',           artist: 'Peddi (Telugu)',                    weeks:  2, peak: 15, spotifyId: '41GTIflnHCWqHgYq7israx', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0232205123b55089a0b3083a32' },
  { rank: 16, lastWeek: 14,          title: 'Aura 10/10',                artist: 'Meesaya Murukku 2 (Tamil)',          weeks: 13, peak:  7, spotifyId: '4UxNXDaE5bCaNhiPEtHsHx', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022624871b49552ce08b1b3070' },
  { rank: 17, lastWeek: 18,          title: 'Gehra Hua',                 artist: 'Dhurandhar',                        weeks: 29, peak:  1, spotifyId: '72EW32eRMEnrHY4ZJf2Z96', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c53e5adf9f81693d62f98019' },
  { rank: 18, lastWeek: 'reentry',   title: 'Rai Rai Raa Raa',           artist: 'Peddi (Telugu)',                    weeks:  1, peak: 18, spotifyId: '29HAoc3GDDbb7mW9isgs9K', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cda5b5fdb9e8e27bc6b27b29' },
  { rank: 19, lastWeek: 17,          title: 'Majboor',                   artist: 'Sheheryar & Zoha Waseem',           weeks:  8, peak: 10, spotifyId: '0lp3WWhjxFVUht81AQmWX8', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ba7861fdb5826a0038078c23' },
  { rank: 20, lastWeek: 23,          title: 'Title Song',                artist: 'Hai Jawani To Ishq Hona Hai',       weeks:  2, peak: 20, spotifyId: '4hzZCaJh4u0r4qxdtcy0Nz', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026e2f4e95f7823181d4122c45' },
  { rank: 21, lastWeek: 'new',       title: 'Sadi Sun',                  artist: 'Harsh Nusi',                        weeks:  1, peak: 21, spotifyId: '3LfDSh8oDROFmebWrUq7De', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02df9039c9844987fb27e95e53' },
  { rank: 22, lastWeek: 21,          title: 'Aaya Sher',                 artist: 'The Paradise (Telugu)',             weeks: 16, peak:  8, spotifyId: '4pr6UpTPTsuzU6gzB2hpPv', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0248be563b0c9f1d7985a7c608' },
  { rank: 23, lastWeek: 24,          title: 'Maskara',                   artist: 'Main Vaapas Aaunga',                weeks:  5, peak: 16, spotifyId: '1ayv6xv4m0zk0iyHuXfuJ4', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a54dd6f0ecc20ea21157caf0' },
  { rank: 24, lastWeek: 'new',       title: 'Vallah',                    artist: 'Cocktail 2',                        weeks:  1, peak: 24, spotifyId: '4ghNyHEWBeYan20mwSWDQ8', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e029725b73ab1b68ed08fe76c4d' },
  { rank: 25, lastWeek: 20,          title: 'Ghis Ghis Ghis',            artist: 'Welcome To The Jungle',             weeks:  3, peak: 12, spotifyId: '5cumiCqwlT9GAg2uktOZlg', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f49b1e4befef4a037f8baf2' },
  { rank: 26, lastWeek: 26,          title: 'Tujhko',                    artist: 'Cocktail 2',                        weeks:  3, peak: 22, spotifyId: '34bZqssAITx04EAzcffySn', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020b70e6ef0759aac7d134de3f' },
  { rank: 27, lastWeek: 22,          title: 'Pagla Bana Delu',           artist: 'Pramod Premi (Bhojpuri)',            weeks:  3, peak: 18, spotifyId: '73NLDrfHTgGn6QHnL4BMCh', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d99f21fe29f70f387713a7e5' },
  { rank: 28, lastWeek: 27,          title: 'Karuppa Kooda Va',          artist: 'Karuppa (Tamil)',                   weeks:  3, peak: 26, spotifyId: '2QAUV5OUidTbSCEo4NToEG', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a90c76c657bba3858e81fe9a' },
  { rank: 29, lastWeek: 29,          title: 'Radharani',                 artist: 'Vishaldan Gadhvi (Gujarati)',        weeks:  3, peak: 27, spotifyId: '7fuRTWcKDpSYM1q6IHUYR2', imageUrl: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020f380baea4fc75a646ebadaa' },
  { rank: 30, lastWeek: 28,          title: 'Vaari Jaavaan',             artist: 'Dhurandhar 2',                      weeks:  3, peak: 28, spotifyId: '1qJiRzRlmNrzYBsMdVPqT2', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027446ea255547084511fbb507' },
]
