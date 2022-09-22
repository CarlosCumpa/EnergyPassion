
import { rutinas } from './../../../module/rutinas';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';//de no estar lo agregas
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutinas-listar',
  templateUrl: './rutinas-listar.component.html',
  styleUrls: ['./rutinas-listar.component.css']
})
export class RutinasListarComponent implements OnInit {
  lista:rutinas[]=[];
  dataSource:MatTableDataSource<rutinas>=new MatTableDataSource();

  displayedColumns: string[]=['id','Trainer_id','Tren_superior','Tren_inferior','Tiempo']
  constructor(private rService:RutinasService) { }

  ngOnInit(): void {

    this.rService.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.rService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });


  }

}
