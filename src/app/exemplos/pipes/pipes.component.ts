import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date();
  nome = "Matilde Costa";
  percentual = 0.88699;
  salario = 10000;
  user = {name: 'Maria', id: 1}

  constructor() { }

  ngOnInit(): void {
  }

}
