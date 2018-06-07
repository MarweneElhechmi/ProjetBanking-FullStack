import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { FormsModule,Validators  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteCompteComponent } from './components/delete-compte/delete-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    ComptesListComponent,
    FooterComponent,
    NavbarComponent,
    WelcomeComponent,
    NotfoundComponent,
    AddCompteComponent,
    DeleteCompteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
