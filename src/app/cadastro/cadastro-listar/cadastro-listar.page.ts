import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cadastro } from '../entidade/cadastro';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { CadastroSalvarPage } from '../cadastro-salvar/cadastro-salvar.page';
import * as _ from 'lodash';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.page.html',
  styleUrls: ['./cadastro-listar.page.scss'],
})
export class CadastroListarPage implements OnInit {

  listaCadastro: Observable<Cadastro[]>;
  listaFiltro: Cadastro[];
  filtro = {};
  cadastro: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaCadastro = this.fire.list<Cadastro>('cadastro').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {
    this.listaCadastro.subscribe(cadastro => {
      this.cadastro = cadastro;
      this.listaFiltro = _.filter(this.cadastro, _.conforms(this.filtro));
    })
  }
  excluir(key) {
    this.fire.list('cadastro').remove(key);
    alert("excluido");
  }

}
