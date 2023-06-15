import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string ;
  link: string;

  constructor( private pService: ProyectoService, private router: Router ) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.link);
    this.pService.save(proyecto).subscribe(data =>{
      alert('Proyecto añadido');
      this.router.navigate (['']);
    }, err =>{
      alert('Algo no salió como esperábamos...');
      this.router.navigate (['']);
    })
  }


}
