import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { IconComponentType, uTContactIconComponentsMap } from '~entities/ut-contacts/icons/ut-contacts-icon-components.util'
import { UTContactsSectionService } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.service'
import { UTContactsSectionParameters } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.type'
import { UTContact, UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgComponentOutlet, NgTemplateOutlet],
  selector: 'app-ut-contacts-section',
  standalone: true,
  styleUrl: './ut-contacts-section.component.sass',
  templateUrl: './ut-contacts-section.component.html',
})
export class UTContactsSectionComponent implements OnInit {
  public contacts: ReadonlyArray<UTContactForTemplate> = []

  public sectionParameters: UTContactsSectionParameters = {
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
      .subscribe((contacts: ReadonlyArray<UTContact>): void => {
        this.contacts = contacts.map(prepareUTContactForTemplate)
        this.cdr.markForCheck()
      })
  }
}

interface UTContactForTemplate {
  readonly codename: UTContact['codename']
  readonly iconComponent: IconComponentType
  readonly name: UTContact['name']
  readonly url: UTContact['url']
}

function getIconComponent(uTContactCodename: UTContactCodename): IconComponentType | never {
  const iconComponent = uTContactIconComponentsMap.get(uTContactCodename)
  if (!iconComponent) {
    throw new Error(`Component for ${uTContactCodename} UTContactCodename does not exist.`)
  }
  return iconComponent
}

function prepareUTContactForTemplate(contact: UTContact): UTContactForTemplate {
  return {
    ...contact,
    iconComponent: getIconComponent(contact.codename),
  }
}
