import { InstagramIconComponent } from '~entities/ut-contacts/icons/instagram-icon/instagram-icon.component'
import { VKIconComponent } from '~entities/ut-contacts/icons/vk-icon/vk-icon.component'
import { UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'

export type IconComponentType = typeof InstagramIconComponent | typeof VKIconComponent

export const uTContactIconComponentsMap = new Map<UTContactCodename, IconComponentType>([
  [UTContactCodename.Instagram, InstagramIconComponent],
  [UTContactCodename.VK, VKIconComponent],
])
