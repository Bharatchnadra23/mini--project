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
=======
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FlexLayoutModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Responsive Layout App';
}
