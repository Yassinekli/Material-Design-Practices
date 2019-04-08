import { NgModule } from "@angular/core";
import {
	MatToolbarModule, 
	MatSidenavModule, 
	MatFormFieldModule,
	MatInputModule, 
	MatIconModule, 
	MatListModule,
	MatProgressBarModule,
	MatCardModule,
	MatButtonModule,
	MatGridListModule
} from '@angular/material';

const modules = [
	MatToolbarModule, 
	MatSidenavModule, 
	MatFormFieldModule,
	MatInputModule, 
	MatIconModule, 
	MatListModule,
	MatProgressBarModule,
	MatCardModule,
	MatButtonModule,
	MatGridListModule
]

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule { }