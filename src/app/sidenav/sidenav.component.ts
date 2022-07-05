import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  expanded: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(2turn)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  expanded = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 768) {
      this.expanded = false;
      this.onToggleSideNav.emit({
        expanded: this.expanded,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.expanded = !this.expanded;
    this.onToggleSideNav.emit({
      expanded: this.expanded,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.expanded = false;
    this.onToggleSideNav.emit({
      expanded: this.expanded,
      screenWidth: this.screenWidth,
    });
  }
}
