import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent],
  template: `<app-contact></app-contact>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
