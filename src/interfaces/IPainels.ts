interface ILink {
  uri: string
  title: string
  order: number
}

export interface IPainel {
  id: number
  links: Array<ILink>
}