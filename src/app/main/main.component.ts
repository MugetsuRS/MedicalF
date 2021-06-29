import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  value = 'Clear me';
  info: any | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:9999/patient/getall").subscribe(data=>{
        this.info = data;
        console.log(this.info)
    });
  }

}
