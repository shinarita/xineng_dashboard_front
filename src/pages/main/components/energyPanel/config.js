
export const TotalUsageList = [
  { title: '总电量', key: 'total', icon: 'elec', unit: 'kw/h', count: '' },
  { title: '总用水', key: 'water', icon: 'water', unit: 'm*3', count: '' },
  { title: '开支', key: 'money', icon: 'expenses', unit: '万元', count: '' },
  { title: '人均用电', key: 'average_electric', icon: 'aver_elec', unit: 'kw/h', count: '' },
  { title: '人均用水', key: 'average_water', icon: 'aver_water', unit: 'm*3', count: '' },
  { title: '面均用电', key: 'average_by_area', icon: 'square_elec', unit: 'kw/h', count: '' }
]

export const ElecUsageList = [
  { key: 'airHandler', color: '#FE0262', title: '空调外机', usage: 10, total: 100 },
  { key: 'airInterUnit', color: '#00A0E9', title: '空调内机', usage: 20, total: 100 },
  { key: 'socket', color: '#F8B62D', title: '插座', usage: 30, total: 100 },
  { key: 'lighting', color: '#8FC31F', title: '照明', usage: 40, total: 100 },
  { key: 'kitchen', color: '#601986', title: '厨电', usage: 50, total: 100 }
]
