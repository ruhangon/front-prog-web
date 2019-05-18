import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoriasPesquisaComponent, CategoriasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent
  ],
  providers: [
    CategoriasService
  ],

})
export class CategoriasModule { }
