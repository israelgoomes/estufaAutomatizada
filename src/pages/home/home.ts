import { ItemModel } from "./../../models/itemModel";
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  ModalController,
  App,
  Item
} from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  itemOne: Array<ItemModel> = [];
  listaAux: Array<ItemModel> = [];

  itenTwo: string = null;
  isChecked: boolean;
  teste2: string = "true";

  ngOnInit(): void {}

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private appCtrl: App
  ) {
    console.log(this.listaItens);
  }
  teste: string = "../../assets//imgs/icons8-cor-50.png";
  listaItens: Array<any> = [
    { item: "Hortelā", icon: "../../assets/imgs/hortela.png" },
    { item: "Salsinha", icon: "../../assets/imgs/salsinha.png" },
    { item: "Cebolinha", icon: "../../assets/imgs/cebolinha.png" },
    { item: "Alecrim", icon: "../../assets/imgs/alecrim.svg" },
    { item: "Manjericāo", icon: "../../assets/imgs/manjericao.png" },
    { item: "Alface", icon: "../../assets/imgs/alface.svg" },
    { item: "Couve", icon: "../../assets/imgs/couve.jpeg" },
    { item: "Brócolis", icon: "../../assets/imgs/brocolis.png" },
    { item: "Espinafre", icon: "../../assets/imgs/espinafre.svg" },
    { item: "Agriāo", icon: "../../assets/imgs/agriao.svg" },
    { item: "Repolho", icon: "../../assets/imgs/repolho.svg" },
    { item: "Tomatinho cereja", icon: "../../assets/imgs/tomatinhocereja.jpg" },
    { item: "Cenoura", icon: "../../assets/imgs/cenoura.png" },
    { item: "Beterraba", icon: "../../assets/imgs/beterraba.png" },
    { item: "Rabanete", icon: "../../assets/imgs/rabanete.jpg" },
    { item: "Morango", icon: "../../assets/imgs/morango.png" },
    { item: "Abóbora", icon: "../../assets/imgs/abobora.svg" },
    { item: "Abobrinha", icon: "../../assets/imgs/abobrinha.svg" },
    { item: "Pepino", icon: "../../assets/imgs/pepino.png" },
    { item: "Batata", icon: "../../assets/imgs/batata.jpeg" }
  ];

  getItemSelected(item: ItemModel) {
    item.isChecked = true;
    let c: number = 0;
    if (this.itemOne.length < 2 && item.isChecked == true) {
      console.log("entrou aqui");
      this.itemOne.push(item);
     // this.listaAux.push(item);
      // c=2;
    } else if (item.isChecked == true || item.isChecked == false) {
      item.isChecked = false;

      this.itemOne.forEach(i => {
        if (i.item == item.item) {
          i.isChecked = false;
        }
      });

      let toast = this.toastCtrl.create({
        message:
          "Só é possível selecionar até 2 itens para plantaçāo. Por favor desselecione os demais.",
        duration: 5000,
        position: "bottom"
      });

      toast.onDidDismiss(() => {
        console.log("Dismissed toast");
      });
      toast.present();
    }

    this.itemOne.forEach(i => {
      if (i.item == item.item && item.isChecked == false) {
        const index = this.itemOne.indexOf(item);
        this.itemOne.splice(index, 1);
      }
    });
    console.log(item.isChecked);

    console.log(this.itemOne);
  }

  selectedItens() {
    let modal = this.modalCtrl.create("ItensSelecionadosPage", {
      _itensSelecionados: this.itemOne
    });

    modal.present();

    modal.onDidDismiss(data => {
      this.itemOne.forEach(i => {
        //this.appCtrl.getRootNav().setRoot('MyApp');
        i.isChecked = false;
        this.itemOne = [];

      });
    });
  }
}
