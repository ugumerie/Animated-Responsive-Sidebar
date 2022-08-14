import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul
      *ngIf="sidenavExpanded && data.items && data.items.length > 0"
      class="sublevel-nav"
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
              }
            }
      "
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <!-- displays angle icon for when items array is populated -->
        <a
          class="sublevel-nav-link"
          *ngIf="item.items && item.items.length > 0"
          (click)="handleClick(item)"
          [ngClass]="getActiveClass(item)"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="sidenavExpanded">
            {{ item.label }}
          </span>
          <i
            *ngIf="item.items && sidenavExpanded"
            class="menu-collapse-icon"
            [ngClass]="
              !item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'
            "
          ></i>
        </a>

        <!-- items array is empty -->
        <a
          [routerLink]="[item.routelink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{ exact: true }"
          class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="sidenavExpanded">
            {{ item.label }}
          </span>
        </a>

        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [data]="item"
            [sidenavExpanded]="sidenavExpanded"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*', //height will be computed dynmically
        })
      ),
      transition('visible <=> hidden', [
        style({
          overflow: 'hidden',
        }),
        animate('{{transitionParams}}'),
      ]),
      transition('void => *', [animate(0)]),
    ]),
  ],
})
export class SublevelMenuComponent implements OnInit {
  @Input() data: INavbarData = {
    routelink: '',
    icon: '',
    label: '',
    items: [],
  };

  @Input() sidenavExpanded = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }

    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routelink)
      ? 'active-sublevel'
      : '';
  }
}
