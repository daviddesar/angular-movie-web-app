import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheItemComponent } from './ghe-item/ghe-item.component';



@NgModule({
  declarations: [DanhSachGheComponent, GheItemComponent],
  imports: [
    CommonModule
  ],
  exports: [DanhSachGheComponent, GheItemComponent]
})
export class DatGheXeBusModule { }
