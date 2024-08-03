import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MottoSectionService } from '~entities/motto/motto-section/motto-section.service'
import { MottoSectionParameters } from '~entities/motto/motto-section/motto-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-motto-section',
  standalone: true,
  styleUrl: './motto-section.component.sass',
  templateUrl: './motto-section.component.html',
})
export class MottoSectionComponent implements OnInit {
  public sectionParameters: MottoSectionParameters = {
    description: 'No data.',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly mottoSectionService: MottoSectionService,
  ) {}

  public ngOnInit(): void {
    this.mottoSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: MottoSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
  }
}
