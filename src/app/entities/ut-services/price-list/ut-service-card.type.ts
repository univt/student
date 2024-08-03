import { UTServiceForAPI } from '~entities/ut-services/ut-services.type'

export interface UTServiceCard {
  readonly codename: UTServiceForAPI['codename']
  readonly contactURL: UTServiceForAPI['contactURL']
  readonly name: UTServiceForAPI['name']
  readonly priceDescription: UTServiceForAPI['priceDescription']
}
