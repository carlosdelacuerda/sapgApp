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
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, isDevMode } from '@angular/core';
import { ModalModule } from './content/components/_shared/modal/modal.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './content/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { SponsoredsEffects } from './content/state/effects/sponsoreds.effects';
import { UserEffects } from './content/state/effects/user.effects';
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
        ModalModule,
        StoreModule.forRoot( ROOT_REDUCERS ),
        StoreDevtoolsModule.instrument({ name: 'TEST', logOnly: !isDevMode() }),
        EffectsModule.forRoot([SponsoredsEffects, UserEffects])
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
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    bootstrap: [AppComponent],
})
export class AppModule { }
