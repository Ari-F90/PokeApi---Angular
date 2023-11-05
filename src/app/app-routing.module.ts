import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: ':id', component: CardPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
