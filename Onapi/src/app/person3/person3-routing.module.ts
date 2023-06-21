import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Person3Page } from './person3.page';

const routes: Routes = [
  {
    path: '',
    component: Person3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Person3PageRoutingModule {}
