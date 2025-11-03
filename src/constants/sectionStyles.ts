// Shared section styles to reduce repetition

export const SECTION_STYLES = {
  base: {
    padding: 'py-20 px-4 md:px-[70px]',
    overflow: 'overflow-hidden',
    relative: 'relative'
  },

  background: {
    dark: 'bg-[#1A1A1A]',
    darker: 'bg-[#0A0A0A]',
    black: 'bg-black'
  },

  container: {
    maxWidth: 'max-w-7xl mx-auto',
    centered: 'flex items-center justify-center',
    textCenter: 'text-center'
  },

  header: {
    marginBottom: 'mb-16',
    marginBottomSmall: 'mb-8',
    marginBottomLarge: 'mb-20'
  },

  card: {
    base: 'relative overflow-hidden rounded-[20px]',
    hover: 'group cursor-pointer',
    shadow: 'shadow-lg'
  },

  text: {
    heading: {
      base: 'font-bold capitalize',
      large: 'text-4xl md:text-5xl lg:text-[75px]',
      medium: 'text-3xl md:text-4xl lg:text-5xl',
      small: 'text-2xl md:text-3xl lg:text-4xl'
    },
    gradient: {
      white: 'text-white',
      whiteOpacity: 'text-white/80',
      gradient: 'bg-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
      backgroundClip: 'bg-clip-text',
      webkitBackgroundClip: '-webkit-background-clip',
      webkitTextFillColor: '-webkit-text-fill-transparent'
    }
  }
}

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },

  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
}

export const COMMON_DELAYS = {
  fast: 0.1,
  medium: 0.2,
  slow: 0.3,
  slower: 0.4
}

export const COMMON_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.6,
  slower: 0.8
}