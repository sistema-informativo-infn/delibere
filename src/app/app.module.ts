import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
