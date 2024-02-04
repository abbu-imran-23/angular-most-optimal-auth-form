import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  }, 
  {
    path: "todos",
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
