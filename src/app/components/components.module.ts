import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './elements/header/header.component';
import { LogoComponent } from './basic-elements/logo/logo.component';
import { SearchFormComponent } from './elements/search-form/search-form.component';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './basic-elements/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchFormComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SearchFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
