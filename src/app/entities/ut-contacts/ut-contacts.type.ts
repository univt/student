export interface UTContact {
  readonly codename: UTContactCodename
  readonly name: string
  readonly url: string
}

export enum UTContactCodename {
  Instagram = 'instagram',
  VK = 'vk',
}
