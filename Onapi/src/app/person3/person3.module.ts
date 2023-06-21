import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Person3PageRoutingModule } from './person3-routing.module';

import { Person3Page } from './person3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Person3PageRoutingModule
  ],
  declarations: [Person3Page]
})
export class Person3PageModule {}
