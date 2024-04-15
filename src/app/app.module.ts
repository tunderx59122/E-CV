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


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ContactComponent,
    CompetenceComponent,
    AboutMeComponent,
    MyExperiencesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
