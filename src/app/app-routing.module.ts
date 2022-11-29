import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { DecompositionButtonComponent } from './directive-composition/decomposition-button.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'directive-composition', component: DecompositionButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
