import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {
  acao: string;

  constructor(private rota: Router) { }
  ngOnInit() {
  }
  direcionar() {
    this.rota.navigate(['aluno-salvar'])
  }

  direcionar2() {
    this.rota.navigate(['disciplina-salvar'])
  }

  acessar(): void {
    this.rota.navigate([this.acao]);
  }

}
