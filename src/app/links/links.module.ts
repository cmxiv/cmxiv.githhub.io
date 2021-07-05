import { Link } from './model/link.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';



@NgModule({
  imports: [CommonModule],
  exports: [LinksComponent],
  declarations: [LinksComponent],
})
export class LinksModule { }
