import { NgModule } from '@angular/core';
import { AppLoaderService } from './service/app-loader.service';
import { AppLoaderComponent } from './component/app-loader.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [AppLoaderComponent],
  providers: [AppLoaderService],
  exports: [AppLoaderComponent]
})
export class AppLoaderModule { }
