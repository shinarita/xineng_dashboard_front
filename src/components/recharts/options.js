export const RadiusBarChartOption = {
  angleAxis: {
    axisLabel: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  radiusAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5'],
    z: 10,
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    max: 5
  },
  polar:{
      radius:60
  },
  series: [{
    type: 'bar',
    barWidth: 6,
    data: [
      {
        value: 1,
        itemStyle: {
          color: 'rgb(96,25,134)'
        }
      }, {
        value: 2,
        itemStyle: {
          color: 'rgba(142,195,31)'
        }
      }, {
        value: 3,
        itemStyle: {
          color: 'rgba(248,182,45)'
        }
      }, {
        value: 4,
        itemStyle: {
          color: 'rgba(0,160,233)'
        }
      }, {
        value: 5,
        itemStyle: {
          color: 'rgba(254,2,98)'
        }
      }
    ],
    coordinateSystem: 'polar',
    name: 'A',
    stack: 'a'
  }, {
    type: 'bar',
    barCategoryGap: 18,
    data: [
      {
        value: 9,
        itemStyle: {
          color: 'rgb(96,25,134,.47)'
        }
      }, {
        value: 8,
        itemStyle: {
          color: 'rgba(142,195,31,.4)'
        }
      }, {
        value: 7,
        itemStyle: {
          color: 'rgba(248,182,45,.17)'
        }
      }, {
        value: 6,
        itemStyle: {
          color: 'rgba(0,160,233,.37)'
        }
      }, {
        value: 5,
        itemStyle: {
          color: 'rgba(254,2,98,.25)'
        }
      }
    ],
    coordinateSystem: 'polar',
    name: 'B',
    stack: 'a'
  }],
  legend: {
    show: false
  }
}