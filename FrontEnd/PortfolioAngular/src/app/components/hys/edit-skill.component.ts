import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageService } from 'src/app/service/image.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  
  skill: Skill = null;
  
  constructor(private skillS: SkillService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.detail(id).subscribe(data =>{
      this.skill = data;
    }, err =>{
      alert('Algo no salió como esperábamos...');
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.skillS.update(id, this.skill).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert('Algo no salió como esperábamos...');
      this.router.navigate(['']);
    })
  }


}

