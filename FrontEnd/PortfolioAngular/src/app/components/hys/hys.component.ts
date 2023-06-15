import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  
  constructor(private skillS: SkillService, private tokenS: TokenService){}

  isLogged = false;
  
  ngOnInit(): void {
    this.loadSkills();
    if(this.tokenS.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  loadSkills(): void{
    this.skillS.list().subscribe(data =>{
      this.skill = data;
    })
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(data =>{
        this.loadSkills();
      }, err =>{
        alert('Algo no salió como esperábamos...')
      })
    }
  }
}
