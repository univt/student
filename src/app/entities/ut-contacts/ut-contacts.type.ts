export interface UTContactForAPI {
  readonly codename: UTContactCodename
  readonly name: string
  readonly order: number
  readonly url: string
}

export enum UTContactCodename {
  Instagram = 'instagram',
  VK = 'vk',
}
