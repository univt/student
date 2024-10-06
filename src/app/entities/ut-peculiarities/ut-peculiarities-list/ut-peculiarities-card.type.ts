import { UTPeculiarityForAPI } from '~entities/ut-peculiarities/ut-peculiarities.type'

export interface UTPeculiarityCard {
  readonly description: UTPeculiarityForAPI['description']
  readonly name: UTPeculiarityForAPI['name']
}
