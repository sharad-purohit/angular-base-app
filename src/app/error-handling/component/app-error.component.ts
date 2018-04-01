import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.scss']
})
export class AppErrorComponent implements OnInit {

  error: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.map(params => params.get('error')).subscribe(error => {
      this.error = error;
    });
  }

}
