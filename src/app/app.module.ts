import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./DemoComponent/demo.component";
import { Bt1HeaderComponent } from "./baitap1/bt1-header/bt1-header.component";
import { Bt1ContentsComponent } from "./baitap1/bt1-contents/bt1-contents.component";
import { Bt1SidebarComponent } from "./baitap1/bt1-sidebar/bt1-sidebar.component";
import { Bt1FooterComponent } from "./baitap1/bt1-footer/bt1-footer.component";
import { Bt1IndexComponent } from "./baitap1/bt1-index/bt1-index.component";
import { Bt2IndexComponent } from "./baitap2/bt2-index/bt2-index.component";
import { Bt2HeaderComponent } from "./baitap2/bt2-header/bt2-header.component";
import { Bt2CarouselComponent } from "./baitap2/bt2-carousel/bt2-carousel.component";
import { Bt2whatwedoComponent } from "./baitap2/bt2whatwedo/bt2whatwedo.component";
import { Bt2contactusComponent } from "./baitap2/bt2contactus/bt2contactus.component";
import { Bt2itemComponent } from "./baitap2/bt2item/bt2item.component";
import { Bt2footerComponent } from "./baitap2/bt2footer/bt2footer.component";
import { Detail } from "./detail/detail.module";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { DirectiveModule } from "./directive/directive.module";
import { ComponentInteractionModule } from "./component-interaction/component-interaction.module";
import { DatGheXeBusModule } from "./dat-ghe-xe-bus/dat-ghe-xe-bus.module";
import { DemoLifeCycleModule } from "./demo-life-cycle/demo-life-cycle.module";
import { MovieManagementModule } from "./movie-management/movie-management.module";
import { HomeModule } from "./Movie-project/home/home.module";
import { MovieDetailModule } from "./Movie-project/detail/detail.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SignupModule } from "./Movie-project/signup/signup.module";
import { SigninModule } from "./Movie-project/signin/signin.module";
import { TokenInterceptor } from "./_core/interceptors/token";
import { LayoutModule } from "./Movie-project/layout/layout.module";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Bt1HeaderComponent,
    Bt1ContentsComponent,
    Bt1SidebarComponent,
    Bt1FooterComponent,
    Bt1IndexComponent,
    Bt2IndexComponent,
    Bt2HeaderComponent,
    Bt2CarouselComponent,
    Bt2whatwedoComponent,
    Bt2contactusComponent,
    Bt2itemComponent,
    Bt2footerComponent
  ],
  imports: [
    BrowserModule,
    Detail,
    DataBindingModule,
    DirectiveModule,
    ComponentInteractionModule,
    DatGheXeBusModule,
    DemoLifeCycleModule,
    MovieManagementModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    // khai báo interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
