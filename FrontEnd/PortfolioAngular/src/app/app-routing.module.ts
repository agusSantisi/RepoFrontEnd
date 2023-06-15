import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevahys', component: NewSkillComponent},
  {path:'edithys/:id', component: EditSkillComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent},
  {path:'editpro/:id', component: EditProyectoComponent},
  {path:'nuevopro', component: NewProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
