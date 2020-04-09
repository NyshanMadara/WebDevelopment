import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { CategoryComponent } from './components/shopping-cart/category/category.component';
import { ProductDetailComponent } from './components/shopping-cart/product-list/product-detail/product-detail.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';
import { NewsComponent } from './components/news/news.component';
import { PrivateClientsComponent } from './components/private-clients/private-clients.component';
import { SmallBusinessComponent } from './components/small-business/small-business.component';
import { LargeCompaniesComponent } from './components/large-companies/large-companies.component';
import { BusinessCentersComponent } from './components/business-centers/business-centers.component';
import { FormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemComponent,
    CategoryComponent,
    ProductDetailComponent,
    HoverDirective,
    SearchPipe,
    NewsComponent,
    PrivateClientsComponent,
    SmallBusinessComponent,
    LargeCompaniesComponent,
    BusinessCentersComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
