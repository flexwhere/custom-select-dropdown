import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SelectDropDownComponent } from "./app/app.component";
import { ArrayFilterPipe } from "./app/pipes/filter.pipe";
import { LimitToPipe } from "./app/pipes/limit.pipe";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe],
  imports: [CommonModule, FormsModule],
  providers: [LimitToPipe, ArrayFilterPipe],
  exports: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe]
})
export class SelectDropDownModule {}
