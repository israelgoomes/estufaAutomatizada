import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from "ionic-angular";
import { ItemModel } from "../../models/itemModel";
import * as moment from "moment";
import { SimpleProgressBarProvider } from "ionic-progress-bar";
@IonicPage()
@Component({
  selector: "page-itens-selecionados",
  templateUrl: "itens-selecionados.html"
})
export class ItensSelecionadosPage {
  inicia: boolean = false;;
  finaliza: boolean;
  timer: any;
  maxTime: any = 30;
  hidevalue: any;
  item2: any;
  item1: any;
  item = [];
  message: string;

  listaItensSelecionados: Array<ItemModel> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private _progressBar: SimpleProgressBarProvider,
    private viewCtrl: ViewController
  ) {
    this.listaItensSelecionados = this.navParams.get("_itensSelecionados");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ItensSelecionadosPage");
  }

  finalizaPlantacao() {
    this.inicia = false;
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    let hoje = moment(new Date()).format("DD/MM/YYY hh:mm:ss");
    let toast = this.toastCtrl.create({
      message: `Plantaçāo finalizada as ${hora}:${min}:${sec}`,
      duration: 3000,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });
    toast.present();
  }

  iniciaPlantacao() {
    this.inicia = true;
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
   console.log('tamanho da lista selecionados', this.listaItensSelecionados.length);
    
      if(this.listaItensSelecionados.length >=2){
        console.log('Teste 1 ')
       this.item1 = this.listaItensSelecionados[0].item;
        this.item2 = this.listaItensSelecionados[1].item;
       console.log
        this.message = `Plantaçāo de ${this.item1} e ${this.item2} iniciada as ${hora}:${min}:${sec} com sucesso!`;
        console.log(this.message)
        }else {
          this.item1 = this.listaItensSelecionados[0].item;
          this.item2 = '';
          this.message = `Plantaçāo de ${this.item1} iniciada as ${hora}:${min}:${sec} com sucesso!`;
        }
    

    console.log('Teste',this.item1)
    console.log(this.item2)
    let toast = this.toastCtrl.create({
      message: this.message,
      duration: 4000,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });
    toast.present();

    let countDownDate = new Date("Oct 29, 2018 14:50:25").getTime();
    let x = setInterval(function() {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(
        now,
        "now",
        "countDownDate",
        countDownDate,
        "distance",
        distance,
        "days",
        days
      );
      // Output the result in an element with id="demo"
      //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      +minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }

  fecharModal() {
    this.viewCtrl.dismiss();
  }
}
