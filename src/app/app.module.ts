import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CountBarComponent} from './countbar/countbar.component';
import { AppComponent } from './app.component';
import {MenubarModule,MenuItem} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    MenubarModule,
    //MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
