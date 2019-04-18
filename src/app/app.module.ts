import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {UiModule} from "./ui/ui.module";

const MODULES = [CoreModule ,PagesModule,SharedModule,UiModule];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
