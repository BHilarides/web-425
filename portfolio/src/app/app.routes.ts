import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { ResumeComponent } from './resume/resume.component';

import { ProjectsComponent } from './projects/projects.component';

import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'notFound'
  }
];
