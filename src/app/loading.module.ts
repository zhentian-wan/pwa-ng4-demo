import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  template: `<h3>Loading...</h3>`
})
export class LoadingScreenComponent {}

@NgModule({
  declarations: [LoadingScreenComponent],
  imports: [
    RouterModule.forChild([
      {path: 'loading', component: LoadingScreenComponent},
    ])
  ]
})
export class LoadingModule {}
