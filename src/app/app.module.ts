import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { JokesGalleryComponent } from './components/jokes-gallery/jokes-gallery.component';
import { ViewJokeModalComponent } from './components/view-joke-modal/view-joke-modal.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { SingleJokeComponent } from './components/jokesType/single-joke/single-joke.component';
import { TwopartJokeComponent } from './components/jokesType/twopart-joke/twopart-joke.component';
import { MenuComponent } from './components/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JokesGalleryComponent,
    ViewJokeModalComponent,
    SingleJokeComponent,
    TwopartJokeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
     MatInputModule ,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
