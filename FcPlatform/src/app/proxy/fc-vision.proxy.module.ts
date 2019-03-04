import { NgModule } from "@angular/core";
import { FcVisionModule } from 'fc-vision';

@NgModule({
	imports: [FcVisionModule],
	exports: [FcVisionModule]
})
export class FcVisionProxyModule {}