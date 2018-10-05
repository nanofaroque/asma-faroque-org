import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LayoutModule} from '../layout/layout.module';
import {ComponentsComponent} from './components.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutModule,
    NgbModule

  ],
  declarations: [ ComponentsComponent]
})
export class ComponentsModule { }
