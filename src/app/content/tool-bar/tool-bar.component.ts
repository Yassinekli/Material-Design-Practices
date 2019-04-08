import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  menuToggle(){ this.sidenavToggle.emit(); }

}
