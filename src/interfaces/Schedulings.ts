export interface ISchedulings {
  id: number
  ownerId: number
  isEventOpen: boolean
  hostId: number
  eventName: string
  chain: string
  placeId: number
  placeName: string
  startAt: {
    day: number
    month: number
    year: number
    hour: number
    minute: number
    seconds: number
  }
  endAt: {
    day: number
    month: number
    year: number
    hour: number
    minute: number
    seconds: number
  }
  invitesId: Array<Number>
}
