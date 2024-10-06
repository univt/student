import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UTThemeSwitcherService {
  private readonly themeLink = this.document.getElementById(
    'app-theme-link-element'
  ) as HTMLLinkElement

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public switchTheme(theme: UTTheme): void {
    this.themeLink.href = `${theme}.css`
  }
}

export enum UTTheme {
  Dark = 'lara-dark-amber',
  Light = 'lara-light-amber',
}
