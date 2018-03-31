import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppErrorComponent } from './component/app-error.component';
import { ErrorModule } from './error.module';

const routes: Routes = [{
  path: 'error', component: AppErrorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes), ErrorModule],
  exports: [RouterModule, ErrorModule]
})
export class ErrorRouterModule {

}
