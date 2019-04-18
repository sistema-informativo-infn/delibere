import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AuthGuardService } from '@core/guards/auth-guard.service';
import { DeliberaService } from '@core/services/delibera.service';
import { keyCloakInitializer } from '@core/utils';

// import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    AuthGuardService,
    DeliberaService,
    {
      provide: APP_INITIALIZER,
      useFactory: keyCloakInitializer,
      multi: true,
      // TODO: Pass also environment inside factory
      deps: [KeycloakService],
    },
  ],
})
export class CoreModule {
}
