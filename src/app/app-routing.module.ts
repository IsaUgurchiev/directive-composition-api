import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CompostionComponent } from './directive-composition/simple/compostion.component';
import { RenameCompositionComponent } from './directive-composition/rename/rename-composition.component';
import { WrapperCompostion } from './directive-composition/wrapper/wrapper-compostion';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'composition', component: CompostionComponent },
  { path: 'rename-composition', component: RenameCompositionComponent },
  { path: 'wrapper-composition', component: WrapperCompostion },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
