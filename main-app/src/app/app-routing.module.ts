import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginsComponent } from './plugins/plugins.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'plugins', component: PluginsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
