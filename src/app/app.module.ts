import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// -----Components--------////
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CrudComponent } from './crud/crud.component';
import { GalleryitemComponent } from './galleryitem/galleryitem.component';
import { GalleryimgsComponent } from './galleryimgs/galleryimgs.component';

// ------Services-------///
import { DesignService } from './AppServices/design.service';
import { HttpclientService } from './AppServices/httpclient.service';

import { CrudService } from './AppServices/crud.service';
import { GalleryItems } from './dataModal/GalleryItems';
import { RoutestestComponent } from './routestest/routestest.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ComputerComponent } from './computer/computer.component';
import { ProductsComponent } from './products/products.component';


const appRoutes:Routes = [

  {path:'parent', component:ParentComponent},
  {path:'main', component:MainComponent},
  {path:'http', component:HttpclientComponent},
  {path:'subject', component:SubjectComponent},
  {path:'crud', component:CrudComponent},
  {path:'galleryitems', component:GalleryitemComponent},
  {path:'galleryitems/:id', component:GalleryimgsComponent},
  {path:'routes', children:[
    {path:'', component:RoutestestComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'computer', component:ComputerComponent}
  ]}
  ]





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    MainComponent,
    HttpclientComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    CrudComponent,
    GalleryitemComponent,
    GalleryimgsComponent,
    RoutestestComponent,
    LaptopComponent,
    ComputerComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DesignService,
              HttpclientService,
             CrudService,
            GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
