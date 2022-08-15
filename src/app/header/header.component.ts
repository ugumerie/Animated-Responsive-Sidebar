import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() expanded = false;
  @Input() screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getHeadClass(): string {
    let styleClass = ''

    if (this.expanded && this.screenWidth > 768) {
      styleClass = 'head-trimmed'
    } else {
      styleClass = 'head-md-screen'
    }
    
    return styleClass
  }
}
