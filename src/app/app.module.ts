import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LimitToPipe } from './pipes/limit.pipe';
import { ArrayFilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LimitToPipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports:[LimitToPipe, ArrayFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
