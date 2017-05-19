import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './pictures.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PicturesComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [PicturesComponent]
})
export class PicturesModule { }
