import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { AddpatientComponent } from './addpatient/addpatient.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { PatientComponent } from './patient/patient.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'addpatient', component: AddpatientComponent},
  {path: 'editpatient', component: EditpatientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddpatientComponent,
    EditpatientComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
