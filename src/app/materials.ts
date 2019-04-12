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
	MatGridListModule,
	MatTableModule,
	MatExpansionModule,
	MatRadioModule,
	MatSelectModule
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
	MatGridListModule,
	MatTableModule,
	MatExpansionModule,
	MatRadioModule,
	MatSelectModule
]

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule { }