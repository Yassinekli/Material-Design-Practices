import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
   loading: Boolean;
  
   constructor(private router:Router){
      this.loading = true;
   }

   ngAfterViewInit(){
      this.router.events.subscribe((event)=>{
      if(event instanceof NavigationStart)
         this.loading = true;
      if(event instanceof NavigationEnd)
         this.loading = false;
      
      })
   }
}
