import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
      <div class="container">
        <h1 class="title"> Contact Me!</h1>
      </div>
      </div>
    </section>  
    
    <section class="section">
      <div class="container">
        <!-- contract form -->
       <form>
          <!-- name -->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input">
          </div>
          <!-- email -->
          <div class="field">
          <label class="label">Email</label>
            <input type="email" name="email" class="input">
          </div>
          <!-- message -->
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea"></textarea>
          </div>
          <!-- submit button-->
            <button type="submit" class="button is-large is-warning">Send!</button>
       </form>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }
  
  submitFrom() {

  }

}
