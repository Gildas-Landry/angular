import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// import { TableModule } from 'primeng/table';
// import { DropdownModule } from 'primeng/dropdown';
// import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PosComponent } from './pages/pos/pos.component';
import { ProductsComponent } from './pages/products/products.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { PopupComponent } from './components/popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { CatPopupComponent } from './pages/categories/cat-popup/cat-popup.component';
import { ProdPopupComponent } from './pages/products/prod-popup/prod-popup.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SalePopupComponent } from './pages/sales/sale-popup/sale-popup.component';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ProductsSuppliedComponent } from './products-supplied/products-supplied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PosComponent,
    ProductsComponent,
    SuppliersComponent,
    CategoriesComponent,
    SalesComponent,
    PopupComponent,
    PurchaseComponent,
    CatPopupComponent,
    ProdPopupComponent,
    RegistrationComponent,
    SalePopupComponent,
    BarchartComponent,
    LinechartComponent,
    ProductsSuppliedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // TableModule,
    // DropdownModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
