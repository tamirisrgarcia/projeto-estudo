import { Pacientes } from './modelos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  paciente: Pacientes [] = [
    {nomeCompleto: "Matilde", idade: "28", sexo: "F", altura: "1.6", peso: "58"},
    {nomeCompleto: "Marley", idade: "32", sexo: "M", altura: "1.82", peso: "97.4"},
    {nomeCompleto: "Bethoven", idade: "25", sexo: "M", altura: "1.74", peso: "88.7"},
    {nomeCompleto: "Lotus", idade: "41", sexo: "F", altura: "1.63", peso: "66"}
  ]

  nomeCompleto: string = '';
  idade: string = '';
  sexo: string = '';
  altura: string = '';
  peso: string = '';

  addPaciente(nomeCompleto:string, idade:string, sexo: string, altura: string, peso: string) {
    this.paciente.push(
      // nomeCompleto: this.nomeCompleto;
      // idade: this.idade;
      // sexo: this.sexo;
      // altura: this.altura;
      // peso: this.peso
    );
  }

  deletar(index: number) {
    this.paciente.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
