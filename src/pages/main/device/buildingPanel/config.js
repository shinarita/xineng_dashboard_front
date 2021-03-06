import { DeviceTypes } from '@constants'

export const RoomPolygons = {
  '3f': {
    viewBox: '0 0 740 577',
    positions: [
      { room: "309", points: "3 4 139 4 139 233 3 233", iconPosition: { left: 56, top: 103 } },
      { room: "308", points: "3 235 139 235 139 300 3 300", iconPosition: { left: 56, top: 252 } },
      { room: "307", points: "3 303 108 303 108 347 3 347", iconPosition: { left: 40, top: 309 } },
      { room: "305", points: "3 419 64 419 64 456 3 456", iconPosition: { left: 21, top: 421 } },
      { room: "304", points: "3 458 66 458 66 489 3 489", iconPosition: { left: 21, top: 459 } },
      { room: "301", points: "3 491 91 491 91 551 3 570", iconPosition: { left: 30, top: 510 } },
      { room: "302", points: "93 491 135 491 135 541 93 551", iconPosition: { left: 102, top: 504 } },
      { room: "303", points: "138 441 199 441 198 528 138 541", iconPosition: { left: 156, top: 474 } },
      { room: "306", points: "65 375 107 375 107 417 65 417", iconPosition: { left: 74, top: 381 } },
      { room: "310", points: "142 4 268 4 268 132 142 132", iconPosition: { left: 194, top: 57 } },
      { room: "311", points: "271 4 402 4 402 132 271 132", iconPosition: { left: 322, top: 57 } },
      { room: "312", points: "404 4 535 4 535 132 404 132", iconPosition: { left: 458, top: 57 } },
      { room: "313", points: "538 64 584 64 584 117 538 117", iconPosition: { left: 547, top: 76 } },
      { room: "316", points: "678 176 734 175 734 230 678 230", iconPosition: { left: 693, top: 188 } },
      { room: "318", points: "678 233 734 233 734 293 678 293", iconPosition: { left: 693, top: 248 } },
      { room: "320", points: "678 295 734 295 734 350 678 350", iconPosition: { left: 693, top: 308 } },
      { room: "322", points: "678 352 734 352 734 409 678 409", iconPosition: { left: 693, top: 368 } },
      { room: "324", points: "678 411 734 411 734 453 678 462", iconPosition: { left: 693, top: 421 } },
      { room: "323", points: "539 422 644 422 644 468 539 486", iconPosition: { left: 573, top: 432 } },
      { room: "321", points: "539 362 644 362 644 418 539 418", iconPosition: { left: 573, top: 374 } },
      { room: "319", points: "539 295 644 295 644 359 539 359", iconPosition: { left: 573, top: 310 } },
      { room: "315", points: "600 176 644 176 644 221 600 221", iconPosition: { left: 609, top: 252 } },
      { room: "317", points: "600 243 644 243 644 292 600 292", iconPosition: { left: 609, top: 185 } },
      // { room: "309", points: "3 3 139 3 139 232 3 232", iconPosition: { left: 56, top: 103 } },
      // { room: "308", points: "0 233 138.5 233 138 298 0 298", iconPosition: { left: 56, top: 252 } },
      // { room: "307", points: "0 301 106 301 105.617329 345 0 345", iconPosition: { left: 40, top: 309 } },
      // { room: "305", points: "0 417 63 417 62.7725632 455 0 455", iconPosition: { left: 21, top: 421 } },
      // { room: "304", points: "0 456 63 456 62.7725632 488 0 488", iconPosition: { left: 21, top: 459 } },
      // { room: "301", points: "0 489 90 489 89.7725632 549 0 568.5", iconPosition: { left: 30, top: 510 } },
      // { room: "302", points: "91 489 133 489 132.893863 539.490566 91 549", iconPosition: { left: 102, top: 504 } },
      // { room: "303", points: "136 439 197 439 196.845848 526.309434 136 539", iconPosition: { left: 156, top: 474 } },
      // { room: "306", points: "63 373 106 373 105.844765 415 63 415", iconPosition: { left: 74, top: 381 } },
      // { room: "310", points: "140 0 267 0 266.541516 131 140 131", iconPosition: { left: 194, top: 57 } },
      // { room: "311", points: "269 0 400 0 399.527076 131 269 131", iconPosition: { left: 322, top: 57 } },
      // { room: "312", points: "402 0 533 0 532.527076 131 402 131", iconPosition: { left: 458, top: 57 } },
      // { room: "313", points: "536 62 583 62 582.830325 115 536 115", iconPosition: { left: 547, top: 76 } },
      // { room: "316", points: "676 175 732 175 731.797834 228 676 228", iconPosition: { left: 693, top: 188 } },
      // { room: "318", points: "676 231 732 231 731.797834 289 676 289", iconPosition: { left: 693, top: 248 } },
      // { room: "320", points: "676 293 732 293 731.797834 346 676 346", iconPosition: { left: 693, top: 308 } },
      // { room: "322", points: "676 350 732 350 731.797834 407 676 407", iconPosition: { left: 693, top: 368 } },
      // { room: "324", points: "676 409 732 409 732 451 676 460.5", iconPosition: { left: 693, top: 421 } },
      // { room: "323", points: "537 420 642 420 642 466.5 537 484", iconPosition: { left: 573, top: 432 } },
      // { room: "321", points: "537 360 642 360 642 416 537 416", iconPosition: { left: 573, top: 374 } },
      // { room: "319", points: "537 293 642 293 642 357 537 357", iconPosition: { left: 573, top: 310 } },
      // { room: "315", points: "598 174 642 174 642 219 598 219", iconPosition: { left: 609, top: 252 } },
      // { room: "317", points: "598 241 642 241 642 290 598 290", iconPosition: { left: 609, top: 185 } },
    ]
  },
  '7f': {
    viewBox: '-1 -5 740 577',
    positions: [
      { room: "716", points: "1 186.5 82.5 186.5 82.5 201 102.5 201 102.5 186.5 112.5 186.5 112.5 61.5 66 61.5 66 0 0 0", iconPosition: { left: 47, top: 103 } },
      { room: "718", points: "67 33 46 26", rect: true, iconPosition: { left: 78, top: 37 } },
      { room: "719", points: "67 0 63 30", rect: true, iconPosition: { left: 86, top: 6 } },
      { room: "717", points: "113.5 186.5 167.5 186.5 167.5 0 133.282178 0 133.282178 32 114.034653 32", iconPosition: { left: 129, top: 103 } },
      { room: "720", points: "170 0 365 128", rect: true, iconPosition: { left: 336, top: 53 } },
      { room: "715", points: "104 188 63 95", rect: true, iconPosition: { left: 122, top: 223 } },
      { room: "725", points: "658 126 76 161", rect: true, iconPosition: { left: 673, top: 198 } },
      { room: "724", points: "664 0 72 112", rect: true, iconPosition: { left: 688, top: 50 } },
      { room: "721", points: "536 60 48 51", rect: true, iconPosition: { left: 546, top: 78 } },
      { room: "722", points: "570 126 83 28", rect: true, iconPosition: { left: 579, top: 132 } },
      { room: "727", points: "600 239 44 49", rect: true, iconPosition: { left: 610, top: 253 } },
      { room: "726", points: "600 172 44 45", rect: true, iconPosition: { left: 610, top: 186 } },
      { room: "714", points: "3 192 78 56", rect: true, iconPosition: { left: 29, top: 208 } },
      { room: "713", points: "3 250 78 56", rect: true, iconPosition: { left: 29, top: 267 } },
      { room: "709", points: "3 308 105 49", rect: true, iconPosition: { left: 43, top: 320 } },
      { room: "711", points: "145 284 22 34", rect: true, iconPosition: { left: 144, top: 292 } },
      { room: "708", points: "2 359 58 41", rect: true, iconPosition: { left: 20, top: 369 } },
      { room: "710", points: "145 320 22 38", rect: true, iconPosition: { left: 144, top: 329 } },
      { room: "707", points: "2 402 58 38", rect: true, iconPosition: { left: 20, top: 412 } },
      { room: "706", points: "2 442 103 26", rect: true, iconPosition: { left: 40, top: 445 } },
      { room: "704", points: "2 470 103 34", rect: true, iconPosition: { left: 40, top: 478 } },
      { room: "701", points: "2 506 91 506 91 548 2 567", iconPosition: { left: 33, top: 520 } },
      { room: "728", points: "537 322 597.5 322 597.5 363.5 639.5 365 640 464.5 537 483", iconPosition: { left: 571, top: 410 } },
      { room: "702", points: "93 506 134 506 134 537.540984 93 546", iconPosition: { left: 102, top: 513 } },
      { room: "703", points: "137 436 199 436 199 523.5 137 536", iconPosition: { left: 156, top: 473 } },
      { room: "729", points: "667 322 732 322 733.5 448.5 643 462.5 643 364 667 364", iconPosition: { left: 675, top: 392 } },
    ]
  }
}

export const DeviceStatusimages = {
  [DeviceTypes.elevator]: {
    on: require('./images/elevator_on.png'),
    off: require('./images/elevator_off.png')
  },
  [DeviceTypes.centralAc]: {
    'true': require('./images/ac_on.png'),
    'false': require('./images/ac_off.png')
  },
  [DeviceTypes.light]: {
    '2': require('./images/light_main.png'),
    '3': require('./images/light_on.png'),
    '0': require('./images/light_off.png'),
    '1': require('./images/light_sub.png'),
  },
  [DeviceTypes.lock]: {
    'true': require('./images/locker_on.png'),
    'false': require('./images/locker_off.png'),
  },
  [DeviceTypes.irSensors]: {
    'true': require('./images/body_on.png'),
    'false': require('./images/body_off.png'),
  },
  [DeviceTypes.fireAlarm]: {
    on: require('./images/charger_on.png'),
    off: require('./images/charger_off.png'),
  }
}

export const MointorPositions = {
  '3f': [
    { id: 'moni15', x: 113, y: 474 },
    { id: 'moni14', x: 162, y: 287 },
    { id: 'moni13', x: 179, y: 353 },
    { id: 'moni12', x: 135, y: 143 },
    { id: 'moni11', x: 289, y: 134 },
    { id: 'moni10', x: 446, y: 134 },
    { id: 'moni9', x: 590, y: 0 },
    { id: 'moni8', x: 590, y: 112 },
    { id: 'moni7', x: 646, y: 166 },
    { id: 'moni6', x: 646, y: 286 },
    { id: 'moni5', x: 646, y: 446 },
    { id: 'moni4', x: 146, y: 134 },
    { id: 'moni3', x: 715, y: 134 },
    { id: 'moni2', x: 55, y: 353 },
    { id: 'moni1', x: 0, y: 471 }
  ],
  '7f': [
    { id: 'moni14', x: 113, y: 342 },
    { id: 'moni13', x: 29, y: 284 },
    { id: 'moni12', x: 75, y: 330 },
    { id: 'moni11', x: 5, y: 16 },
    { id: 'moni10', x: 33, y: 179 },
    { id: 'moni9', x: 54, y: 402 },
    { id: 'moni8', x: 120, y: 169 },
    { id: 'moni7', x: 132, y: 130 },
    { id: 'moni6', x: 134, y: 10 },
    { id: 'moni5', x: 452, y: 112 },
    { id: 'moni4', x: 653, y: 288 },
    { id: 'moni3', x: 545, y: 94 },
    { id: 'moni2', x: 499, y: 150 },
    { id: 'moni1', x: 454, y: 10 }
  ]
}

export const ElevatorPositions = {
  '3f': [
    { id: 'elevator1', x: 0, y: 404 },
    { id: 'elevator2', x: 473, y: 0 }
  ],
  '7f': [
    { id: 'elevator1', x: 0, y: 394 },
    { id: 'elevator2', x: 473, y: 0 }
  ]
}
