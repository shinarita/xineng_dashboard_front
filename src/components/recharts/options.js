export const getPieChartOption = (values) => {
  const { ac_inner, ac_main, light, socket, kitchen } = values
  return {
    series: [
      {
        name: 'ac_main',
        type: 'pie',
        radius: [8, 10],
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
        radius: [14, 18],
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
        radius: [22, 28],
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
        radius: [32, 42],
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
        radius: [46, 60],
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