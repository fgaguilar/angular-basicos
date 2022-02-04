import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan', 'Hulk','Thor','Capitan America'];
  heroeborrado: string='';
  cond: boolean = false;
  borrarheroe(){
    this.heroeborrado = this.heroes.shift()||'';
    this.cond=true;
  }
}
