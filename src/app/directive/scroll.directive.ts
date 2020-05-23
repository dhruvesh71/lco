import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostListener('document:scroll', ['$event'])
  documentScroll(event: any) {

    const scrollPosition = window.scrollY;
    const home = document.getElementById('home');
    const header = document.getElementById('header');
    const headerMenu = document.getElementById('header-menu');
    const headerIcon = document.getElementById('header-icon');

    if (scrollPosition >= 480) {
      headerMenu.style.display = 'block';
      headerIcon.style.display = 'none';

      header.style.backgroundColor = '#fff';
      header.style.color = '#000';
      header.style.position = 'fixed';
      header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.2)';
    } else {
      headerIcon.style.display = 'block';
      headerMenu.style.display = 'none';

      header.style.backgroundColor = 'transparent';
      header.style.color = '#fff';
      header.style.borderBottom = 'none';
    }

    home.style.transform = `translate3d(0px, ${scrollPosition / 3}px, 0px)`;


  }

}
