module.exports = {
  plugins: {
    'autoprefixer': require('autoprefixer'),
    'cssnano': require('cssnano'),
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1920,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1080
    }
  }
}