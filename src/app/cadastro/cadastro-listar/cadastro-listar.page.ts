import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cadastro } from '../entidade/cadastro';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { CadastroSalvarPage } from '../cadastro-salvar/cadastro-salvar.page';
import * as _ from 'lodash';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.page.html',
  styleUrls: ['./cadastro-listar.page.scss'],
})

export class CadastroListarPage implements OnInit {

  listaCadastro: Observable<Cadastro[]>;
  cadastro: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private modal: ModalController, private rota: Router) {
    this.listaCadastro = this.fire.list<Cadastro>('cadastro').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {
  }

  excluir(entidade) {
    this.fire.list('cadastro').remove(entidade.key);
  }

  async alterar(cadastro) {
    const tela = await this.modal.create({
      component: CadastroSalvarPage, componentProps: { cadastro: cadastro }
    });
    tela.present();
  }

}
