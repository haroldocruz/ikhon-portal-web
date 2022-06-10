import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TopComponent } from './top/top.component';
import { LayoutComponent } from './layout.component';
import { BrandComponent } from './nav/brand/brand.component';



@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    NavComponent,
    TopComponent,
    LayoutComponent,
    BrandComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
