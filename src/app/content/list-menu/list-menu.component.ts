import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  menuToggle(){
    this.sidenavToggle.emit();
  }
}
