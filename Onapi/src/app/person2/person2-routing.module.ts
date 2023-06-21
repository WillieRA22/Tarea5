import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Person2Page } from './person2.page';

const routes: Routes = [
  {
    path: '',
    component: Person2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Person2PageRoutingModule {}
