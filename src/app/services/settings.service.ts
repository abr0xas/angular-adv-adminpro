import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public themeLink = document.querySelector( '#theme' )

  constructor() {

    const theme = localStorage.getItem( 'theme' ) || 'default'
    const url = `./assets/css/colors/${ theme }.css`
    this.themeLink?.setAttribute( 'href', url )
    
   }

   changeTheme( theme: string) {

    const url = `./assets/css/colors/${ theme }.css`
    this.themeLink?.setAttribute( 'href', url )
    localStorage.setItem( 'theme', theme )
    this.checkCurrentTheme()
  }

  checkCurrentTheme() {

    const links: NodeListOf<Element> = document.querySelectorAll('.selector')
    
    links?.forEach( elem => {
      
      elem.classList.remove('working')
      const btnTheme = elem.getAttribute('data-theme')
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`
      const currentTheme = this.themeLink?.getAttribute( 'href' )

      if( btnThemeUrl === currentTheme ) {
        elem.classList.add( 'working' )
      }

    })

  }
}
