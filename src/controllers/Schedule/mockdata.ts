import { ISchedulings } from "src/interfaces/Schedulings";

export const scheduleDataList: Array<ISchedulings> =  [
  {
    id: 1,
    chain: 'café',
    startAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 1',
    hostId: -1,
    invitesId: [],
    isEventOpen: false,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  },
  {
    id: 1,
    chain: 'café',
    startAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 1',
    hostId: -1,
    invitesId: [],
    isEventOpen: true,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  },
  {
    id: 2,
    chain: 'café',
    startAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 1',
    hostId: -1,
    invitesId: [],
    isEventOpen: false,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  }
]