import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ImprovementsAndGuaranteesService } from '~entities/improvements-and-guarantees/improvements-and-guarantees.service'
import { ImprovementsAndGuaranteesSection } from '~entities/improvements-and-guarantees/improvements-and-guarantees.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-improvements-and-guarantees-section',
  standalone: true,
  styleUrl: './improvements-and-guarantees-section.component.sass',
  templateUrl: './improvements-and-guarantees-section.component.html',
})
export class ImprovementsAndGuaranteesSectionComponent implements OnInit {
  public section: ImprovementsAndGuaranteesSection = {
    description: '',
    title: '',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly improvementsAndGuaranteesService: ImprovementsAndGuaranteesService,
  ) {}

  public ngOnInit(): void {
    this.improvementsAndGuaranteesService.getImprovementsAndGuaranteesSection()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((section: ImprovementsAndGuaranteesSection): void => {
        this.section = section
        this.cdr.markForCheck()
      })
  }
}
