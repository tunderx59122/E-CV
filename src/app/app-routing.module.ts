import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CompetenceComponent } from './components/pages/competence/competence.component';
import { MyExperiencesComponent } from './components/pages/MyExperiences/MyExperiences.component';
import { AboutMeComponent } from './components/pages/AboutMe/AboutMe.component';


export const routes: Routes = [
  {
      path: '**',
      redirectTo: 'home'
  },

  {
      path: 'contacts',
      component: ContactComponent
  },
  {
      path: 'competences',
      component: CompetenceComponent
  },
  {
    path: 'my-experiences',
    component: MyExperiencesComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
