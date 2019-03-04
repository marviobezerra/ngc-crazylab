import { NgModule } from "@angular/core";
import { FcTrackComponent, FcTrackListComponent } from "./fc-track.component";
import { FcTrakRoutingModule } from "./fc-track-routing.module";

@NgModule({
  declarations: [FcTrackComponent, FcTrackListComponent],
  imports: [FcTrakRoutingModule],
  exports: [FcTrackComponent, FcTrackListComponent]
})
export class FcTrackModule {}
