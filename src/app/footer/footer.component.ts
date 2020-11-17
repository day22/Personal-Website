import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made by Aidan Day with Angular</p>
        <p>University of Portland</p>
        <p>Day22@up.edu</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
