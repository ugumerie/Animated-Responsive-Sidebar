import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupensComponent } from './coupens.component';
import { CoupensListComponent } from './coupens-list/coupens-list.component';


@NgModule({
  declarations: [CoupensComponent, CoupensListComponent,],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
