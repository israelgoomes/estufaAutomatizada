import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItensSelecionadosPage } from './itens-selecionados';

@NgModule({
  declarations: [
    ItensSelecionadosPage,
  ],
  imports: [
    
    IonicPageModule.forChild(ItensSelecionadosPage),
  ],
})
export class ItensSelecionadosPageModule {}
