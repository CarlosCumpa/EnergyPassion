import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // de no aparecer lo agregas
import { rutinas } from './../module/rutinas'; //de no aparecer lo agreags
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class RutinasService {

  private url:string=`${environment.host_clientes}`; //se crea variante url
  private listaCambio = new Subject<rutinas[]>()

  listar(){
    return this.http.get<rutinas[]>(this.url);
  }
  insertar(rutinas: rutinas) {
    return this.http.post(this.url, rutinas);
  }
  setLista(listaNueva: rutinas[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  constructor(private http:HttpClient) { }
}
