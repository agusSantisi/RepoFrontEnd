import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  
  expLab : Experiencia = null;
  
  constructor(private sExperiencia: SexperienciaService, private activatedRoute: ActivatedRoute, private router: Router ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data =>{
      this.expLab = data;
    }, err =>{
      alert('Algo no salió como esperabamos..')
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert('Algo no salió como esperabamos..')
      this.router.navigate(['']);
    })
  }
}
