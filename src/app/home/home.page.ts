import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private rota: Router) { }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.rota.navigate(['pagina']); }
    ).catch((erro) => alert("O Email ou a Senha estão incorretos!"));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.rota.navigate(['/']);
  }
  redefinir() {
    alert('Verifique seu email!');
    this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(
      () => alert('Verifique seu email')); { this.rota.navigate([]); }

  }
  cadastrar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.rota.navigate(['pagina']); }
    ).catch((erro) => console.log(erro));
  }
}
