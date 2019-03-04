import { NgModule } from "@angular/core";
import { ViewListComponent } from "./view-list/view-list.component";
import { ViewDetailComponent } from "./view-detail/view-detail.component";
import { FcVisionRoutingModule } from "./fc-vision-routing.module";

@NgModule({
  declarations: [ViewListComponent, ViewDetailComponent],
  imports: [FcVisionRoutingModule],
  exports: [ViewListComponent, ViewDetailComponent]
})
export class FcVisionModule {}
