import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GiphPage } from './giph.page';
import { ModalModule } from 'src/app/_modal';
const routes: Routes = [
  {
    path: '',
    component: GiphPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalModule
  ],
  declarations: [GiphPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GiphPageModule {}
