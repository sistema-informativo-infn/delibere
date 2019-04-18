import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

// Components
import { environment } from '@env/environment';
import { AppComponent } from './app.component';

const ENVIRONMENT: Record<string, any> = environment;
const ENVIRONMENTS_PROVIDERS = Object.keys(ENVIRONMENT).map((key) => {
  return { provide: key, useValue: ENVIRONMENT[key] };
});

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
  providers: [
    ...ENVIRONMENTS_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
