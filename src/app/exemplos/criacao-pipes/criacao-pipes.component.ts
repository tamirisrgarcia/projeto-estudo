import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pipes',
  templateUrl: './criacao-pipes.component.html',
  styleUrls: ['./criacao-pipes.component.scss']
})
export class CriacaoPipesComponent implements OnInit {
  numeros = [1, 2, 3];

  add(){
    this.numeros.push(Math.floor(Math.random()*10));
  }

  query = '';

  linguagens = [
    "Python",
    "Ruby",
    "TypeScript",
    "Perl",
    "Haskell",
    "C++",
    "C",
    "Java",
    "Go",
    "PHP",
    "Cobol",
    "JavaScript",
    "Clojure",
    "Julia",
    "Fortran",
    "Lua",
    "Elixir",
    "Kotlin",
    "VisualG",
    "Portugol",
    "Swift"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
