import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent{
  @Input() expanded = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';

    if (this.expanded && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.expanded && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
