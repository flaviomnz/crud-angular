import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'courses'},
  {
    //path = caminho
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    // caminho para o courses.module (filho)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
