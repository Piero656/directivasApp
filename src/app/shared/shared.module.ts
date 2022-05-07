import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';


@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
