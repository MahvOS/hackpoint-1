// Consistent design tokens for the application
export const DESIGN_TOKENS = {
  // Spacing
  sectionPadding: {
    py: 'py-20',
    px: 'px-4 md:px-[70px]',
  },
  headerMargin: {
    default: 'mb-16',
    large: 'mb-20',
    small: 'mb-8',
  },

  // Colors
  colors: {
    primary: '#D33533',
    background: '#1A1A1A',
    text: {
      primary: '#FFFFFF',
      secondary: '#D3D3D3',
      muted: '#808080',
      opacity: {
        light: 'rgba(255,255,255,0.8)',
        medium: 'rgba(255,255,255,0.5)',
        dark: 'rgba(255,255,255,0.3)',
      },
    },
    border: {
      light: 'rgba(255,255,255,0.3)',
      medium: 'rgba(255,255,255,0.2)',
      dark: 'rgba(255,255,255,0.1)',
    },
  },

  // Typography
  typography: {
    heading: {
      h1: 'text-4xl md:text-5xl lg:text-[65px]',
      h2: 'text-3xl md:text-4xl lg:text-5xl',
      h3: 'text-2xl md:text-3xl lg:text-4xl',
    },
    body: {
      large: 'text-lg md:text-xl',
      medium: 'text-base md:text-lg',
      small: 'text-sm md:text-base',
    },
  },

  // Animation
  animation: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.6,
      slower: 0.8,
    },
    interval: {
      hero: 2000,
      slider: 4000,
      rotation: 8000,
    },
    ease: {
      default: 'easeOut',
      spring: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
    },
  },

  // Glass morphism
  glass: {
    blur: {
      light: 'backdrop-blur-[12px]',
      medium: 'backdrop-blur-[42.118px]',
      heavy: 'backdrop-blur-[49.5px]',
    },
    background: 'rgba(0,0,0,0.3)',
    hover: 'hover:bg-white/10',
  },

  // Assets
  assets: {
    base: '/assets',
    hackpoint: {
      logo: '/assets/hackpoint/navbar_logo.png',
      cyberfestLogo: '/assets/hackpoint/navbar_cyberfest_logo.png',
      heroLogo: '/assets/hackpoint/hero-section_center_logo.png',
      backgroundPattern: '/assets/background-pattern.svg',
      backgroundLanding: '/assets/hackpoint/background_landing_page.png',
      programEvents: {
        rectangle: '/assets/hackpoint/programevent_section_rectangle .svg',
        nationalCTF: '/assets/hackpoint/programevent_section_nationalctf.png',
        talkshow: '/assets/hackpoint/programevent_section_talkshow.png',
        networking: '/assets/hackpoint/programevent_section_networking.png',
        bootSponsor: '/assets/hackpoint/programevent_section_bootsponsor.png',
      },
      textures: {
        testimonialToSponsorship: '/assets/hackpoint/texture_testimonials_to_sponsorship.png',
        aboutBackground: '/assets/hackpoint/ed4cbc71a4b0b7c17d6768430b93b4e0907a536b.svg',
      },
    },
    placeholder: '/assets/placeholder-image.png',
    fallback: '/assets/fallback-image.png',
  },

  // Layout dimensions
  layout: {
    announcementHeight: '60px',
    arrowContainer: 'w-[120px] h-[120px]',
    borderRadius: {
      card: 'rounded-[50px]',
      button: 'rounded-full',
      small: 'rounded-lg',
    },
  },
}

export default DESIGN_TOKENS
