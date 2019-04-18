import { KeycloakConfig, KeycloakService } from 'keycloak-angular';

import { environment } from '@env/environment';

export function keyCloakInitializer(keycloakService: KeycloakService, _keycloak: KeycloakConfig): () => Promise<any> {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloakService.init({
          config: environment.keycloak,
          initOptions: {
            // onLoad: 'login-required',
            checkLoginIframe: false,
            // tslint:disable-next-line:max-line-length
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmbTZrMHB3alh3M1EtVTZwd1duRXM1ODVleGRsSC1Fa2V4NjUxdkZiTFhrIn0.eyJqdGkiOiJlYTkzMWJkNi0yMjFjLTQ2NjQtOTg5Yy02NDhlMzcyMzI3M2UiLCJleHAiOjE1NTU2MDQ1OTgsIm5iZiI6MCwiaWF0IjoxNTU1NjAzOTk4LCJpc3MiOiJodHRwczovL2lkcC5hcHAtZGV2LmluZm4uaXQvYXV0aC9yZWFsbXMvaW5mbiIsImF1ZCI6ImluZm4tcG9ydGFsIiwic3ViIjoiYjI3N2M5OTctMDBlMi00OGZjLWEzOWEtZjg5MzFkMDk3YzExIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaW5mbi1wb3J0YWwiLCJub25jZSI6ImYxOGQ5YjgzLWVmNjUtNDg4MS1hN2RkLWU5YjNiYjQ4ZWMxMiIsImF1dGhfdGltZSI6MTU1NTYwMzk5Nywic2Vzc2lvbl9zdGF0ZSI6ImU4YjJhYzA1LWYzZjgtNGRiOC04ODk4LWNjY2U5ZDM3NDQzMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCByb2xlcyBlbWFpbCBhYWkgcHJvZmlsZSIsInpvbmVpbmZvIjoibG5mIiwicmVzb3VyY2VfYWNjZXNzIjp7IiR7Y2xpZW50X2lkfSI6eyJyb2xlcyI6WyJ2aWV3LXByb2ZpbGUiXX19LCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaW5mblVVSUQiOiIwMTc1NzljMS02NTY3LTRkYmItYTJmYy02ZWYwOTJjNDhkMWUiLCJuYW1lIjoiTWljaGVsZSBBbnRvbmlvIFRvdGEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0b3RhIiwiZ2l2ZW5fbmFtZSI6Ik1pY2hlbGUgQW50b25pbyIsImZhbWlseV9uYW1lIjoiVG90YSIsImVtYWlsIjoibWljaGVsZS50b3RhQGxuZi5pbmZuLml0In0.UycMaoM6KTs3TPCuKuIHr6vP0Xg9FijHZ4-j93AIOQPkFdXAHpeqWseQTlJFO8HtxavZchjk07TZ-jQFZLtbHXmCIXRnFngrT_eqjoQCvZ-ABfwUWfYVpMEWDsIHV8L7I_t2SlK2zPk-CDZX8e1sYJu4h3Msx4b9pog9XHzJo6QXlYivyYvf3adzeXhMhHZsIUDZZs6SAU2yvtwdQr_aDMpngWwnTycgWEpLSt2ahBFo9VmBR8zTZ1-3MWaHywT677fALi14kdbSvHz3zLwYR3wJzhOWPIq8qwRh45x8tveqnzw_B7y9Hqjus1Hzstx5evx2AppsIE_xjw3uYxtMaA',
            // flow: "implicit",
          },
          enableBearerInterceptor: true,
          bearerExcludedUrls: [],
          loadUserProfileAtStartUp: false,
          bearerPrefix: 'Bearer',
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
