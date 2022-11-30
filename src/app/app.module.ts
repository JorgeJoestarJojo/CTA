import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import { DataSource } from '@angular/cdk/collections'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { FormControl, Validators } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDateFormats } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postCreateComponent } from './publicaciones/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Headercomponet} from './header/header.component';
import { PostlistComponent } from './publicaciones/post-create/post-list/post-list.component';
import { PostService } from './publicaciones/post.service';
import { CardFancyExample } from './card/card.component';
import { GridListDynamic } from './grid/grid.component';
import { TableBasicExample } from './tabla/tabla.component';
import { Fecha } from './fecha/fecha.component';
import { CardFancyExample2 } from './card_2/card.component';


@NgModule({
  declarations: [
    AppComponent,
    postCreateComponent,
    PostlistComponent,
    Headercomponet,
    PostlistComponent,
    CardFancyExample,
    GridListDynamic,
    TableBasicExample,
    Fecha,
    CardFancyExample2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

