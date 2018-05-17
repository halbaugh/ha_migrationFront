import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component';
import { MigrationLogListComponent } from './migrationLogs/migration-log.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent, 
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    MigrationLogListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
