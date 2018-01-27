import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { ListPage } from './list';

@NgModule({
  declarations: [ListPage],
  exports: [ListPage],
  imports: [IonicPageModule.forChild(ListPage), SharedModule],
})
export class ListPageModule {}
