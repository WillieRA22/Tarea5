import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'vida',
    loadChildren: () => import('./vida/vida.module').then( m => m.VidaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'person2',
    loadChildren: () => import('./person2/person2.module').then( m => m.Person2PageModule)
  },
  {
    path: 'person3',
    loadChildren: () => import('./person3/person3.module').then( m => m.Person3PageModule)
  },
  {
    path: 'moment',
    loadChildren: () => import('./moment/moment.module').then( m => m.MomentPageModule)
  },
  {
    path: 'moment2',
    loadChildren: () => import('./moment2/moment2.module').then( m => m.Moment2PageModule)
  },
  {
    path: 'moment3',
    loadChildren: () => import('./moment3/moment3.module').then( m => m.Moment3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
