import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './componets/first/first.component';
import { SecondComponent } from './componets/second/second.component';
import { AllInOneComponent } from './componets/day3/all-in-one/all-in-one.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    /**
     * 4- External Module [ HttpClientModule - RouterModule - FormsModule - ReactiveFormsModule ]
     */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
