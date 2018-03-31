import { NgModule } from '@angular/core';
import { ErrorService } from './error.service';
import { AppErrorComponent } from './component/app-error.component';


@NgModule({
  declarations: [AppErrorComponent],
  providers: [ErrorService]
})
export class ErrorModule { }
