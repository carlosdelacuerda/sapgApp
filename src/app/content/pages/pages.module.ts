import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';
import { NavbarModule } from "../components/_shared/navbar/navbar.module";



@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        NavbarModule
    ],
    exports: [
        HomePage
    ]
})
export class PagesModule { }
