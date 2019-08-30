export const getRadiusBarChartOption = (valueArray, total) => {
  const [ac_main, ac_inner, socket, light, kitchen] = valueArray
  const option = {
    angleAxis: {
      axisLabel: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    radiusAxis: {
      type: 'category',
      data: ['kitchen', 'light', 'socket', 'ac_inner', 'ac_main'],
      z: 10,
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      max: 5
    },
    polar: {
      radius: 60
    },
    series: [{
      type: 'bar',
      barWidth: 6,
      data: [
        {
          value: kitchen,
          itemStyle: {
            color: 'rgb(96,25,134,.47)'
          }
        }, {
          value: light,
          itemStyle: {
            color: 'rgba(142,195,31,.4)'
          }
        }, {
          value: socket,
          itemStyle: {
            color: 'rgba(248,182,45,.17)'
          }
        }, {
          value: ac_inner,
          itemStyle: {
            color: 'rgba(0,160,233,.37)'
          }
        }, {
          value: ac_main,
          itemStyle: {
            color: 'rgba(254,2,98,.25)'
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
          value: (total - kitchen),
          itemStyle: {
            color: 'rgb(96,25,134)'
          }
        }, {
          value: (total - light),
          itemStyle: {
            color: 'rgba(142,195,31)'
          }
        }, {
          value: (total - socket),
          itemStyle: {
            color: 'rgba(248,182,45)'
          }
        }, {
          value: (total - ac_inner),
          itemStyle: {
            color: 'rgba(0,160,233)'
          }
        }, {
          value: (total - ac_main),
          itemStyle: {
            color: 'rgba(254,2,98)'
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
  return option
}