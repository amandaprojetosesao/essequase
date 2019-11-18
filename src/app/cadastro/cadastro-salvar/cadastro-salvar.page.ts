import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-salvar',
  templateUrl: './cadastro-salvar.page.html',
  styleUrls: ['./cadastro-salvar.page.scss'],
})
export class CadastroSalvarPage implements OnInit {

  cadastro: Cadastro = new Cadastro();

  constructor(private fire: AngularFireDatabase, private modalController: ModalController,
    private rota: Router
  ) { }

  ngOnInit() {
  }
  salvar() {
     if (this.cadastro.key == null) {
       this.fire.list('cadastro').push(this.cadastro);
       this.cadastro = new Cadastro();
       this.rota.navigate(['cadastro-listar'])
       alert('Salvo com sucesso!')
     } else {
       this.fire.object('cadastro/' + this.cadastro.key).update(this.cadastro);
       this.modalController.dismiss();
     }

   }

 }
