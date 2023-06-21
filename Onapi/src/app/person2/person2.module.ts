import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Person2PageRoutingModule } from './person2-routing.module';

import { Person2Page } from './person2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Person2PageRoutingModule
  ],
  declarations: [Person2Page]
})
export class Person2PageModule {}
