import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ImprovementsAndGuaranteesSectionService } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.service'
import { ImprovementsAndGuaranteesSectionParameters } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-improvements-and-guarantees-section',
  standalone: true,
  styleUrl: './improvements-and-guarantees-section.component.sass',
  templateUrl: './improvements-and-guarantees-section.component.html',
})
export class ImprovementsAndGuaranteesSectionComponent implements OnInit {
  protected sectionParameters: ImprovementsAndGuaranteesSectionParameters = {
    description: 'No data.',
    title: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly improvementsAndGuaranteesSectionService: ImprovementsAndGuaranteesSectionService,
  ) {}

  public ngOnInit(): void {
    this.improvementsAndGuaranteesSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: ImprovementsAndGuaranteesSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
  }
}
