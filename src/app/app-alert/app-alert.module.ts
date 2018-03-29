import { NgModule } from '@angular/core';
import { AppAlertComponent } from './component/app-alert.component';
import { AppAlertService } from './service/app-alert.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, AlertModule.forRoot()],
  declarations: [AppAlertComponent],
  providers: [AppAlertService],
  exports: [AppAlertComponent]
})
export class AppAlertModule { }
