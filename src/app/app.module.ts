import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './content/interceptors/loading.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from "./content/components/_shared/navbar/navbar.module";
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalModule } from './content/components/_shared/modal/modal.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavbarModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        ModalModule
    ],
    providers: [
        LoadingInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: LoadingInterceptor,
          multi: true
        },
        MatDialog,
        {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: {hasBackdrop: true}
        }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    bootstrap: [AppComponent],
})
export class AppModule { }
