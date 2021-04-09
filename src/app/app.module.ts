import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingsModule } from '@src/app/app-routings.module';
import { AppComponent } from '@src/app/app.component';
import { AboutComponent } from '@src/app/pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
