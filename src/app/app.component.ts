import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'Tamiris';
  idade = 31;

  linkImagem = 'https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  alturaImagem = 100;
  larguraImagem = 100;

  calculaAnoNascimento():number {
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentar() {
    this.larguraImagem += 20;
    this.alturaImagem += 20;
  }

  diminuir() {
    this.larguraImagem -= 10;
    this.alturaImagem -= 10;
  }
}
