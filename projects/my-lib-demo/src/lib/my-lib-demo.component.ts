import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-demo',
  template: `
    <p style="text-align: center;">
      Demo Library
    </p>
  `,
  styles: [
  ]
})
export class MyLibDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
