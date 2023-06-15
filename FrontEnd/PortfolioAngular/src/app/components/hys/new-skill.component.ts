import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombre: string = '';
  porcentaje: number;
  img: string = '';

  constructor(private skillsS: SkillService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillsS.save(skill).subscribe(data =>{
      alert('El item fue creado correctamente'); 
      this.router.navigate(['']);
    }, err =>{
      alert('Algo no salió como esperábamos...');
      this.router.navigate(['']); 
    })
  }

}
