import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasModule } from './categorias/categorias.module';
import { EstadosModule } from './estados/estados.module';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {Routes, RouterModule} from '@angular/router';

const rotas: Routes = [
  {path: '', redirectTo:'categorias', pathMatch:'full'},
  {path: 'cidades', component: CidadesCadastroComponent},
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent}  
  ];

@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CidadesModule,
    CategoriasModule,
    EstadosModule,
    HttpClientModule,
    ToastModule,    
SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
  MessageService,
  ConfirmationService
  ],
bootstrap: [AppComponent]
})

export class AppModule { }
