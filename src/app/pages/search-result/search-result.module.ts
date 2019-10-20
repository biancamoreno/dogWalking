import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SearchResultComponent }
];

@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchResultModule { }
