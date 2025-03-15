import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent  // Declare the ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add FormsModule to imports
  ],
  providers: [ContactService],  // Add ContactService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
