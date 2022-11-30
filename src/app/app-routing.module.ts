import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFancyExample } from './card/card.component';
import { postCreateComponent } from './publicaciones/post-create/post-create.component';
import { PostlistComponent } from './publicaciones/post-create/post-list/post-list.component';
import { TableBasicExample } from './tabla/tabla.component';

const routes: Routes = [
  {path: '', component:  PostlistComponent},
  {path: 'create', component: postCreateComponent},
  {path:'edit/:postId', component: postCreateComponent},
  {path: 'card', component: CardFancyExample},
  {path: 'table', component: TableBasicExample}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
