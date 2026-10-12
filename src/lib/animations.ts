import type { Variants, Transition } from 'framer-motion'

export type EaseName = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' | 'circInOut' | 'backIn' | 'backOut' | 'backInOut' | 'anticipate'

export const easeOut: EaseName = 'easeOut'
export const easeInOut: EaseName = 'easeInOut'

export function makeTransition(t: Omit<Transition, 'ease'> & { ease?: EaseName }): Transition {
  return t as Transition
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: makeTransition({ duration: 0.5, ease: 'easeOut' }),
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: makeTransition({ duration: 0.5, ease: 'easeOut' }),
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: makeTransition({ duration: 0.4, ease: 'easeOut' }),
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}
