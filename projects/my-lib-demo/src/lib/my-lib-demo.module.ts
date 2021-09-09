import { NgModule } from '@angular/core';
import { MyLibDemoComponent } from './my-lib-demo.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [
    MyLibDemoComponent,
    CounterDemoComponent
  ],
  imports: [
  ],
  exports: [
    MyLibDemoComponent,CounterDemoComponent
  ]
})
export class MyLibDemoModule { }
