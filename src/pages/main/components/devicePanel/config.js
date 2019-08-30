export const DeviceList = [
  {
    key: 'fire_alarm',
    title: '消防报警',
    icon: require('../../../../images/icons/icon_control_fire.png'),
    width: 44,
    height: 35,
    items: [
      { key: 'detectors', title: '烟感数量', unit: '个', count: '' },
      { key: 'alarms', title: '报警数', unit: '个', count: '' },
      { key: 'running', title: '运行中', unit: '个', count: '' },
    ]
  }, {
    key: 'ir_sensors',
    title: '人体感应',
    icon: require('../../../../images/icons/icon_control_body.png'),
    width: 34,
    height: 34,
    items: [
      { key: 'rooms', title: '房间总数', unit: '间', count: '' },
      { key: 'occupied', title: '有人房间', unit: '间', count: '' },
      { key: 'error', title: '异常房间', unit: '间', count: '' },
    ]
  }, {
    key: 'central_ac',
    title: '中央空调',
    icon: require('../../../../images/icons/icon_control_aircondition.png'),
    width: 32,
    height: 33,
    items: [
      { key: 'running', title: '运行中', unit: '台', count: '' },
      { key: 'running_on_empty', title: '无人运行', unit: '台', count: '' },
      { key: 'full_running', title: '高速运行', unit: '台', count: '' },
    ]
  }, {
    key: 'elevator',
    title: '电梯',
    icon: require('../../../../images/icons/icon_control_elevator.png'),
    width: 34,
    height: 34,
    items: [
      { key: 'total', title: '总计', unit: '部', count: '' },
      { key: 'running', title: '客梯停靠', unit: '楼', count: '' },
      { key: 'error', title: '货梯停靠', unit: '楼', count: '' },
    ]
  }, {
    key: 'acs',
    title: '门锁',
    icon: require('../../../../images/icons/icon_control_cocker.png'),
    width: 29,
    height: 35,
    items: [
      { key: 'total', title: '总计', unit: '把', count: '' },
      { key: 'count', title: '开门次数', unit: '次', count: '' },
      { key: 'open', title: '开启状态', unit: '次', count: '' },
    ]
  }, {
    key: 'camera',
    title: '摄像头',
    icon: require('../../../../images/icons/icon_control_monitor.png'),
    width: 39,
    height: 38,
    items: [
      { key: 'total', title: '总计', unit: '台', count: '' },
      { key: 'general', title: '普通探头', unit: '台', count: '' },
      { key: 'ai', title: 'AI探头', unit: '台', count: '' },
    ]
  }, {
    key: 'light',
    title: '照明',
    icon: require('../../../../images/icons/icon_control_light.png'),
    width: 27,
    height: 27,
    items: [
      { key: 'total', title: '总计', unit: '个', count: '' },
      { key: 'online', title: '其中在线', unit: '个', count: '' },
      { key: 'light_on', title: '其中用电', unit: '个', count: '' },
    ]
  },
  // {
  //   key: 'lighting11',
  //   title: '照明222222',
  //   icon: require('../../../../images/icons/icon_control_fire.png'),
  //   width: 27,
  //   height: 27,
  //   items: [
  //     { key: 'totalLightings', title: '总计', unit: '个', count: '' },
  //     { key: 'onlineLightings', title: '其中在线', unit: '个', count: '' },
  //     { key: 'onpowerLightings', title: '其中用电', unit: '个', count: '' },
  //   ]
  // }
]

