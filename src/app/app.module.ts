import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Step1Component } from './step1/step1.component';

import { MatTabsModule, MatSidenavModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatListModule, MatMenuModule,
  MatNativeDateModule,MatSnackBarModule, MatDialogModule, MatTableModule, MatPaginatorModule , MatSortModule,
  MatCheckboxModule, MatCard, MatRadioModule, MatCardModule, MatFormField, MatFormFieldModule, MatProgressBarModule,
  MatStepperModule} from '@angular/material';
  import { BarRatingModule } from "ngx-bar-rating";
  import { FormsModule } from '@angular/forms';


  import { ReactiveFormsModule } from '@angular/forms';
  import { LayoutModule } from '@angular/cdk/layout';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule, MatProgressBarModule,
    MatStepperModule,
    BarRatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
