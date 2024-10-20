import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { HowAndWhatWeMakeSectionParametersSectionService } from '~composite-sections/how-and-what-we-make/how-and-what-we-make-section.service'
import { HowAndWhatWeMakeSectionParameters } from '~composite-sections/how-and-what-we-make/how-and-what-we-make-section.type'
import { HowAndWhatWeMakeSectionParametersSectionComponent } from './how-and-what-we-make-section.component'

describe('HowAndWhatWeMakeSectionParametersSectionComponent', (): void => {
  let component: HowAndWhatWeMakeSectionParametersSectionComponent;
  let fixture: ComponentFixture<HowAndWhatWeMakeSectionParametersSectionComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        HowAndWhatWeMakeSectionParametersSectionComponent,
        {
          provide: HowAndWhatWeMakeSectionParametersSectionService,
          useClass: HowAndWhatWeMakeSectionParametersSectionStubService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HowAndWhatWeMakeSectionParametersSectionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});

class HowAndWhatWeMakeSectionParametersSectionStubService {
  public readSectionParameters(): Observable<HowAndWhatWeMakeSectionParameters> {
    const sectionParameters: HowAndWhatWeMakeSectionParameters = {
      howWeMake: {
        paragraphTextList: [
          'Text 1.',
          'Text 2.',
          'Text 3.',
        ],
        titleText: 'Как мы делаем?',
      },
      whatWeMake: {
        paragraphTextList: [
          'Text 1.',
          'Text 2.',
        ],
        titleText: 'Что мы делаем?',
      },
    };
    return of(sectionParameters);
  }
}
