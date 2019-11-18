import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Autorizar } from '../entidade/autorizar';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { AutorizarSalvarPage } from '../autorizar-salvar/autorizar-salvar.page';
import * as _ from 'lodash';
import { Cadastro } from '../../cadastro/entidade/cadastro';

@Component({
  selector: 'app-autorizar-listar',
  templateUrl: './autorizar-listar.page.html',
  styleUrls: ['./autorizar-listar.page.scss'],
})
export class AutorizarListarPage implements OnInit {

  listaAutorizar: Observable<Autorizar[]>;
  listaFiltro: Autorizar[];
  filtro = {};
  autorizar: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaAutorizar = this.fire.list<Autorizar>('autorizar').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {
    this.listaAutorizar.subscribe(autorizar => {
      this.autorizar = autorizar;
      this.listaFiltro = _.filter(this.autorizar, _.conforms(this.filtro));
    })
  }
  excluir(key) {
    this.fire.list('autorizar').remove(key);
    alert("excluido");
  }

}
