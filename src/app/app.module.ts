import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CountBarComponent} from './countbar/countbar.component';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { MenuItem } from "primeng/components/common/menuitem";

const appRoutes : Routes = [
   { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   {
    path:'home',
    component: HomeComponent
  },
    {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountBarComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    CandidateDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    MenubarModule,
    TabViewModule,
    PanelModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    //MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
