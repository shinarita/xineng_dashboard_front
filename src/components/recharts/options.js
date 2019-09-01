export const getPieChartOption = (values) => {
  const { ac_inner, ac_main, light, socket, kitchen } = values
  return {
    series: [
      {
        name: 'ac_main',
        type: 'pie',
        radius: ['13.3%', '16.7%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return ['rgb(96,25,134)', 'rgb(96,25,134,.47)'][dataIndex]
          }
        },
        data: [
          { value: ac_main[0], name: 'usage' },
          { value: ac_main[1], name: 'other' },
        ]
      },
      {
        name: 'ac_inner',
        type: 'pie',
        radius: ['23.3%', '30%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return ['rgba(142,195,31)', 'rgba(142,195,31,.4)'][dataIndex]
          }
        },
        data: [
          { value: ac_inner[0], name: 'usage' },
          { value: ac_inner[1], name: 'other' },
        ]
      },
      {
        name: 'socket',
        type: 'pie',
        radius: ['36.7%', '46.7%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return ['rgba(248,182,45)', 'rgba(248,182,45,.17)'][dataIndex]
          }
        },
        data: [
          { value: socket[0], name: 'usage' },
          { value: socket[1], name: 'other' },
        ]
      },
      {
        name: 'light',
        type: 'pie',
        radius: ['53.5%', '70%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return ['rgba(0,160,233)', 'rgba(0,160,233,.37)'][dataIndex]
          }
        },
        data: [
          { value: light[0], name: 'usage' },
          { value: light[1], name: 'other' },
        ]
      },
      {
        name: 'kitchen',
        type: 'pie',
        radius: ['76.6%', '100%'],
        hoverAnimation: false,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: ({ dataIndex }) => {
            return ['rgba(254,2,98)', 'rgba(254,2,98,.25)'][dataIndex]
          }
        },
        data: [
          { value: kitchen[0], name: 'usage' },
          { value: kitchen[1], name: 'other' },
        ]
      },
    ]
  }
}