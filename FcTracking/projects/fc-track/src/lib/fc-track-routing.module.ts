import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FcTrackComponent, FcTrackListComponent } from "./fc-track.component";

const routes: Routes = [
  { path: "", component: FcTrackListComponent },
  { path: "detail", component: FcTrackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FcTrakRoutingModule {}
