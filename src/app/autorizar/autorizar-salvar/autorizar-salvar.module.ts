import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutorizarSalvarPage } from './autorizar-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizarSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutorizarSalvarPage]
})
export class AutorizarSalvarPageModule {}
