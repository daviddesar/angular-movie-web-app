import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';
import { DemoLifecycleChildComponent } from './demo-lifecycle-child/demo-lifecycle-child.component';



@NgModule({
  declarations: [DemoLifecycleComponent, DemoLifecycleChildComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoLifecycleComponent]
})
export class DemoLifeCycleModule { }
