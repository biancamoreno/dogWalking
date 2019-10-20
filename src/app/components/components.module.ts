import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './elements/header/header.component';
import { LogoComponent } from './basic-elements/logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
