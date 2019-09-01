export const toAdaptivePx = (oldPx) => {
  return `${oldPx * window.innerWidth / 1920}px`
}