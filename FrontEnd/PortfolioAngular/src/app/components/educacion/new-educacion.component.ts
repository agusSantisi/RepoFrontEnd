import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreE: string = '';
  descripcionE: string = '';
  
  constructor(private eService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.eService.save(educacion).subscribe(data =>{
      alert('Educacion añadida');
      this.router.navigate (['']);
    }, err =>{
      alert('Algo no salió como esperábamos...');
      this.router.navigate (['']);
    })
  }

}
