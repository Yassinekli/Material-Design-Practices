import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
   
   // @ViewChild('sidenav', {read: ElementRef}) sidenav: ElementRef;
   // @ViewChild('listnav') listnav: ElementRef;
   
   loading : Boolean;
   // sidenavWidth : String;
   // listnavWidth : String;

   constructor(private router:Router) { this.loading = true; }

   ngOnInit(){
      // this.sidenavWidth = window.getComputedStyle(this.sidenav.nativeElement).height;
      // this.listnavWidth = window.getComputedStyle(this.listnav.nativeElement).height;
   }
   
   ngAfterViewInit(){
      this.router.events.subscribe((event)=>{
         if(event instanceof NavigationStart) { this.loading = true; };
         if(event instanceof NavigationEnd || event instanceof NavigationCancel) { setInterval(()=>{ this.loading = false; }, 2000); }
      })
   }

}
