import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTPeculiarityForAPI } from '~entities/ut-peculiarities/ut-peculiarities.type'

@Injectable({
  providedIn: 'root',
})
export class UTPeculiaritiesService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<readonly UTPeculiarityForAPI[]> {
    return this.httpClient.get<readonly UTPeculiarityForAPI[]>(utPeculiaritiesURL)
  }
}

const utPeculiaritiesURL = 'https://univt.github.io/student-data/data/entities/ut-peculiarities/ut-peculiarities.json'
