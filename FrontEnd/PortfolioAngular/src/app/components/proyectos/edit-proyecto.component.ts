import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

proyecto : Proyecto = null;

constructor(private pService: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router){}

  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pService.detail(id).subscribe(data =>{
      this.proyecto = data;
    }, err =>{
      alert('Algo no salió como esperabamos...');
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];

    this.pService.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert('Algo no salió como esperabamos...');
      this.router.navigate(['']);
    })
  }

}
