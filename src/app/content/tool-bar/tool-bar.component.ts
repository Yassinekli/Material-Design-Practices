import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Language {
  lang: string;
}

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  selectedOption : string;
  languages: Language[] = [
    {lang: 'en'},
    {lang: 'fr'},
    {lang: 'es'}
  ];

  @Output() sidenavToggle = new EventEmitter();
  @Output() languageSelection = new EventEmitter();

  constructor() { this.selectedOption = 'en'; }
  ngOnInit() {}

  menuToggle(){ this.sidenavToggle.emit(); }

  changed(event){ this.languageSelection.emit(event.value); }
}
