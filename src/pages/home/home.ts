import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
console.log(this.listaItens);
  }
teste: string = "../../assets//imgs/icons8-cor-50.png"
 listaItens: Array<any> = [
   {item: "Hortelā", icon: "../../assets/imgs/hortela.png"},
    {item: "Salsinha", icon: "../../assets/imgs/salsinha.png"},
    {item: "Cebolinha", icon: "../../assets/imgs/cebolinha.png"},
    {item: "Alecrim", icon: "../../assets/imgs/alecrim.svg"},
    {item: "Manjericāo", icon: "../../assets/imgs/manjericao.png"},
    {item: "Alface", icon: "../../assets/imgs/alface.svg"},
    {item: "Couve", icon: "../../assets/imgs/couve.jpeg"},
    {item: "Brócolis", icon: "../../assets/imgs/brocolis.png"},
    {item: "Espinafre", icon: "../../assets/imgs/espinafre.svg"},
    {item: "Agriāo", icon: "../../assets/imgs/agriao.svg"},
    {item: "Repolho", icon: "../../assets/imgs/repolho.svg"},
    {item: "Tomatinho cereja", icon: "../../assets/imgs/tomatinhocereja.jpg"},
    {item: "Cenoura", icon: "../../assets/imgs/cenoura.png"},
    {item: "Beterraba", icon: "../../assets/imgs/beterraba.png"},
    {item: "Rabanete", icon: "../../assets/imgs/rabanete.jpg"},
    {item: "Morango", icon: "../../assets/imgs/morango.png"},
    {item: "Abóbora", icon: "../../assets/imgs/abobora.svg"},
    {item: "Abobrinha", icon: "../../assets/imgs/abobrinha.svg"},
    {item: "Pepino", icon: "../../assets/imgs/pepino.png"},
    {item: "Batata", icon: "../../assets/imgs/batata.jpeg"},

    
  
  ];
 
}
