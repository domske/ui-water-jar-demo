import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WaterJarOneComponent } from './water-jar-one/water-jar-one.component';
import { WaterJarTwoComponent } from './water-jar-two/water-jar-two.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterJarOneComponent,
    WaterJarTwoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
