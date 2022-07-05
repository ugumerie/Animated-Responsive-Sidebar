import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  expanded: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slide-bar-demo';

  isSideNavExpanded = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavExpanded = data.expanded;
    this.screenWidth = data.screenWidth;
  }
}
