import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CompostionComponent } from './directive-composition/simple/compostion.component';
import { RenameCompositionComponent } from './directive-composition/rename/rename-composition.component';
import { WrapperCompostion } from './directive-composition/wrapper/wrapper-compostion';
import { PickDirectivesComponent } from './directive-composition/pick-directives/pick-directives.component';
import { DuplicateParamsComposition } from './directive-composition/duplicate-params/duplicate-params-composition';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'composition', component: CompostionComponent },
  { path: 'rename-composition', component: RenameCompositionComponent },
  { path: 'wrapper-composition', component: WrapperCompostion },
  { path: 'pick-directives', component: PickDirectivesComponent },
  { path: 'duplicate-params-composition', component: DuplicateParamsComposition },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
