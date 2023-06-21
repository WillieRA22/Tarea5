import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'scan' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: '/momentos', icon: 'happy' },
    { title: 'Acerca', url: '/acerca', icon: 'information-circle' },
    { title: 'Vida', url: '/vida', icon: 'hand-right' },
    { title: 'Contrátame', url: '/contratame', icon: 'document' },
    { title: '', url: '/person', icon: '' },
    { title: '', url: '/person2', icon: '' },
    { title: '', url: '/person3', icon: '' },
    { title: '', url: '/moment', icon: '' },
    { title: '', url: '/moment2', icon: '' },
    { title: '', url: '/moment3', icon: '' },
  ];

}
