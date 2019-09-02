export const toAdaptivePx = (oldPx) => {
  return `${oldPx * window.innerWidth / 1920}px`
}

export const toAdaptiveVw = (oldPx) => {
  return `${oldPx * 100 / 1920}vw`
}