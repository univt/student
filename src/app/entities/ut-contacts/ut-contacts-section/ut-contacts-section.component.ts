import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { newDevError } from '~app/dev/dev-error.util'
import { IconComponentType, uTContactIconComponentsMap } from '~entities/ut-contacts/icons/ut-contacts-icon-components.util'
import { UTContactsSectionService } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.service'
import { UTContactsSectionParameters } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.type'
import { UTContactForAPI, UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgComponentOutlet, NgTemplateOutlet],
  selector: 'app-ut-contacts-section',
  standalone: true,
  styleUrl: './ut-contacts-section.component.sass',
  templateUrl: './ut-contacts-section.component.html',
})
export class UTContactsSectionComponent implements OnInit {
  protected contacts: ReadonlyArray<UTContactForTemplate> = []

  protected sectionParameters: UTContactsSectionParameters = {
    list: {
      emptyStateText: 'No data.',
    },
    title: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly uTContactsSectionService: UTContactsSectionService,
  ) {}

  public ngOnInit(): void {
    this.uTContactsSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: UTContactsSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
    this.uTContactsSectionService.readUTContacts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((contacts: ReadonlyArray<UTContactForAPI>): void => {
        this.contacts = prepareUTContactsForTemplate(contacts)
        this.cdr.markForCheck()
      })
  }
}

interface UTContactForTemplate {
  readonly codename: UTContactForAPI['codename']
  readonly iconComponent: IconComponentType
  readonly name: UTContactForAPI['name']
  readonly url: UTContactForAPI['url']
}

function getIconComponent(uTContactCodename: UTContactCodename): IconComponentType | never {
  const iconComponent = uTContactIconComponentsMap.get(uTContactCodename)
  if (!iconComponent) {
    throw newDevError(`Component for ${uTContactCodename} UTContactCodename does not exist.`)
  }
  return iconComponent
}

function prepareUTContactForTemplate({
  codename,
  name,
  url,
}: UTContactForAPI): UTContactForTemplate {
  return {
    codename,
    iconComponent: getIconComponent(codename),
    name,
    url,
  }
}

function prepareUTContactsForTemplate(uTContacts: ReadonlyArray<UTContactForAPI>): ReadonlyArray<UTContactForTemplate> {
  const uTContactsMap = new Map<number, UTContactForTemplate>()
  uTContacts.forEach((contact: UTContactForAPI): void => {
    uTContactsMap.set(contact.order, prepareUTContactForTemplate(contact))
  })
  const result: UTContactForTemplate[] = []
  for (let i = 1; i <= uTContactsMap.size; ++i) {
    const contact = uTContactsMap.get(i)
    if (!contact) {
      throw newDevError('Wrong data. Check the values of `order` properties.')
    }
    result.push(contact)
  }
  return result
}
