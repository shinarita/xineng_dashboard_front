import { DeviceTypes } from '@constants'

export const DeviceList = [
  {
    key: DeviceTypes.fireAlarm,
    title: '消防报警',
    icon: require('../../../../images/icons/icon_control_fire.png'),
    items: [
      { key: 'detectors', title: '烟感数量', unit: '个', value: '' },
      { key: 'alarms', title: '报警数', unit: '个', value: '' },
      { key: 'running', title: '运行中', unit: '个', value: '' },
    ]
  }, {
    key: DeviceTypes.irSensors,
    title: '人体感应',
    icon: require('../../../../images/icons/icon_control_body.png'),
    items: [
      {
        key: 'rooms', title: '工作中', unit: '间', value: function (row) {
          if (!row) { return '--' }
          return `${row.rooms - row.empty}/${row.rooms}`
        }
      },
      {
        key: 'occupied', title: '办公室', unit: '间', value: function (row) {
          if (!row) { return '--' }
          return `${row.offices - row.offices_empty}/${row.offices}`
        }
      },
      {
        key: 'error', title: '会议室', unit: '间', value: function (row) {
          if (!row) { return '--' }
          return `${row.meeting_room - row.meeting_empty}/${row.meeting_room}`
        }
      },
    ]
  }, {
    key: DeviceTypes.centralAc,
    title: '中央空调',
    icon: require('../../../../images/icons/icon_control_aircondition.png'),
    items: [
      {
        key: 'running_outer', title: '外机运行', unit: '台', value: function (row) {
          if (!row) { return '--' }
          return `${row.outter_run}/${row.outter}`
        }
      },
      {
        key: 'running_inner', title: '内机运行', unit: '台', value: function (row) {
          if (!row) { return '--' }
          return `${row.inner_run}/${row.inner}`
        }
      },
      { key: 'run_on_empty', title: '无人运行', unit: '台', value: '' },
    ]
  }, {
    key: DeviceTypes.elevator,
    title: '电梯',
    icon: require('../../../../images/icons/icon_control_elevator.png'),
    items: [
      {
        key: 'location1', title: '客梯停靠', unit: '', value: function (row) {
          const { location1 } = row
          if (isNaN(parseInt(location1))) {
            return location1
          }
          return `${location1}楼`
        }
      },
      {
        key: 'location2', title: '货梯停靠', unit: '', value: function (row) {
          const { location2 } = row
          if (isNaN(parseInt(location2))) {
            return location2
          }
          return `${location2}楼`
        }
      },
      { key: 'total', title: '当前运行', unit: '部', value: '' },
    ]
  }, {
    key: DeviceTypes.lock,
    title: '门锁',
    icon: require('../../../../images/icons/icon_control_cocker.png'),
    items: [
      { key: 'total', title: '总计', unit: '把', value: '' },
      { key: 'open', title: '打开状态', unit: '扇', value: '' },
      { key: 'infra', title: '非法进入', unit: '扇', value: '' },
    ]
  }, {
    key: DeviceTypes.camera,
    title: '摄像头',
    icon: require('../../../../images/icons/icon_control_monitor.png'),
    width: 39,
    height: 38,
    items: [
      { key: 'total', title: '总计', unit: '台', value: '' },
      { key: 'general', title: '普通探头', unit: '台', value: '' },
      { key: 'ai', title: 'AI探头', unit: '台', value: '' },
    ]
  }, {
    key: DeviceTypes.light,
    title: '照明',
    icon: require('../../../../images/icons/icon_control_light.png'),
    items: [
      { key: 'total', title: '总计', unit: '个', value: '' },
      {
        key: 'main', title: '主照明', unit: '路', value: function (row) {
          if (!row) { return '--' }
          return `${row.main_run}/${row.total_main}`
        }
      },
      {
        key: 'sub', title: '辅照明', unit: '路', value: function (row) {
          if (!row) { return '--' }
          return `${row.aux_run}/${row.total_aux}`
        }
      },
    ]
  },
  // {
  //   key: 'lighting11',
  //   title: '照明222222',
  //   icon: require('../../../../images/icons/icon_control_fire.png'),
  //   width: 27,
  //   height: 27,
  //   items: [
  //     { key: 'totalLightings', title: '总计', unit: '个', value: '' },
  //     { key: 'onlineLightings', title: '其中在线', unit: '个', value: '' },
  //     { key: 'onpowerLightings', title: '其中用电', unit: '个', value: '' },
  //   ]
  // }
]

