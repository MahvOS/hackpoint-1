export interface Sponsor {
  id: string
  name: string
  logo: string
  width: number
  height: number
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'sponsor-1',
    name: 'Sponsor 1',
    logo: '/assets/hackpoint/sponsorship_section_cyber.png',
    width: 292,
    height: 122,
  },
  {
    id: 'sponsor-2',
    name: 'Sponsor 2',
    logo: '/assets/hackpoint/sponsorship_section_bsi.png',
    width: 221,
    height: 62,
  },
  {
    id: 'sponsor-3',
    name: 'Sponsor 3',
    logo: '/assets/hackpoint/sponsorship_section_meta4sec.png',
    width: 77,
    height: 77,
  },
  {
    id: 'sponsor-4',
    name: 'Sponsor 4',
    logo: '/assets/hackpoint/sponsorship_section_ruangguru.png',
    width: 154,
    height: 86,
  },
  {
    id: 'sponsor-5',
    name: 'Sponsor 5',
    logo: '/assets/hackpoint/sponsorship_section_ruijie.png',
    width: 176,
    height: 51,
  },
]
