import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: 'tracking',
		loadChildren: './proxy/fc-track.proxy.module#FcTrackProxyModule'
	},
	{
		path: 'vision-dashboard',
		loadChildren: './proxy/fc-vision.proxy.module#FcVisionProxyModule'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}