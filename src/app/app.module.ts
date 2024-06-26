import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CompetenceComponent } from './components/pages/competence/competence.component';
import { MatCardModule } from '@angular/material/card'
import { AboutMeComponent } from './components/pages/AboutMe/AboutMe.component';
import { MyExperiencesComponent } from './components/pages/MyExperiences/MyExperiences.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { HomeComponent } from './components/pages/Home/Home.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ContactComponent,
    CompetenceComponent,
    AboutMeComponent,
    MyExperiencesComponent,
    HomeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
