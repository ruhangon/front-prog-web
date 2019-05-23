import { Estado } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL = 'http://localhost:8090/estados';
  estadosURLFiltro = this.estadosURL;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.estadosURLFiltro = this.estadosURL+'/filtro?nome='+filtro.nome;
    }else{
      this.estadosURLFiltro = this.estadosURL;
    }
    return this.http.get<any>(this.estadosURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.estadosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(est: Estado): Promise<any>{
    return this.http.post(this.estadosURL, est).toPromise();
  }

  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }

}
