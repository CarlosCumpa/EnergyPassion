import { RutinasService } from 'src/app/service/rutinas.service';
import { rutinas } from './../../../module/rutinas';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas-creaedita',
  templateUrl: './rutinas-creaedita.component.html',
  styleUrls: ['./rutinas-creaedita.component.css']
})
export class RutinasCreaeditaComponent implements OnInit {

  rutinas:rutinas = new rutinas();
  mensaje: string ="";
  constructor(private RutinasService:RutinasService ,private router: Router) { }

  ngOnInit(): void {
  }
  aceptar():void{

    if (this.rutinas.id > 0 && this.rutinas.Trainer_id > 0 && this.rutinas.Tren_superior.length > 0 && this.rutinas.Tren_inferior.length > 0 && this.rutinas.Tiempo > 0) {

      this.RutinasService.insertar(this.rutinas).subscribe(data => {
        this.RutinasService.listar().subscribe(data => {
          this.RutinasService.setLista(data);
        })
      })
      this.router.navigate(['rutinas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

}
