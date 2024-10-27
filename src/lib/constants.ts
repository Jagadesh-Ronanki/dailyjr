// show customised outline when an element has focus (but only if the user is
// using the keyboard)
// TODO: move this to a global css rule
export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fce7f3]/70`

export const LINK_STYLES = `text-[#fce7f3] underline decoration-[#fce7f3]/20 underline-offset-2 transition-all hover:text-[#ede9fe] hover:decoration-[#ede9fe]/40`

export const LINK_SUBTLE_STYLES = `hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-[#fce7f3]/90`

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-[#ede9fe]/0 hover:before:text-[#fce7f3]/50 pl-[1em] -ml-[1em]`

export const OOF_GRAD = `bg-gradient-to-br from-[#fce7f3] to-[#fce7f3]/30 bg-clip-text text-transparent`