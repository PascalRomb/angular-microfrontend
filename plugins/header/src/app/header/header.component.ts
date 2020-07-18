import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'header-plugin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = "Header Component";
  public dateTime = "";
  public locations$ : Observable<string> = of(""); 
  
  constructor(private http: HttpClient) { 

    this.locations$ = new Observable((observer) => {
      let watchId: number;
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          observer.next("[lat: " + position.coords.latitude + " , long: " 
          + position.coords.longitude + " , timestamp: " + position.timestamp + "]");
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
    });
  }

  ngOnInit(): void {
    this.http.get("http://worldtimeapi.org/api/timezone/Europe/rome").subscribe((data) => {
      this.dateTime = data['datetime'];
    })
  }

}
