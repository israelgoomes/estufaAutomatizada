import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ItemModel } from '../../models/itemModel';
import * as moment from 'moment';
import { SimpleProgressBarProvider } from 'ionic-progress-bar';
@IonicPage()
@Component({
  selector: 'page-itens-selecionados',
  templateUrl: 'itens-selecionados.html',
})
export class ItensSelecionadosPage {
  inicia: boolean;
  finaliza: boolean;
  timer: any;
  maxTime: any = 30
  hidevalue: any;

listaItensSelecionados: Array<ItemModel> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toastCtrl: ToastController, private _progressBar: SimpleProgressBarProvider
    ) {
    this.listaItensSelecionados = this.navParams.get('_itensSelecionados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItensSelecionadosPage');
  }

finalizaPlantacao(){
  this.inicia = false;
  let data = new Date();
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
  let hoje = moment(new Date()).format("DD/MM/YYY hh:mm:ss")
  let toast = this.toastCtrl.create({
    message: `Plantaçāo finalizada as ${hora}:${min}:${sec}`,
    duration: 3000,
    position: 'top'
  });
  
  toast.onDidDismiss(() => {
  
    console.log('Dismissed toast');
  });
  toast.present();

  }



  iniciaPlantacao(){
    this.inicia = true;
    let data = new Date();
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    let toast = this.toastCtrl.create({
      message: `Plantaçāo iniciada as ${hora}:${min}:${sec}`,
      duration: 3000,
      position: 'top'
    });
    
    toast.onDidDismiss(() => {
    
      console.log('Dismissed toast');
    });
    toast.present();

    let countDownDate = new Date("Oct 29, 2018 14:50:25").getTime();
  let x = setInterval(function () {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);

    // Output the result in an element with id="demo"
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      //document.getElementById("demo").innerHTML = "Plantaçao em andamemento";
    }
  }, 1000);
  }
}
