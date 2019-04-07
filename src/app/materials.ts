import { NgModule } from "@angular/core";
import {
	MatToolbarModule, 
	MatSidenavModule, 
	MatFormFieldModule,
	MatInputModule, 
	MatIconModule, 
	MatListModule,
	MatProgressBarModule
} from '@angular/material';

const modules = [
	MatToolbarModule, 
	MatSidenavModule, 
	MatFormFieldModule,
	MatInputModule, 
	MatIconModule, 
	MatListModule,
	MatProgressBarModule
]

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule { }