import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StorageModule } from './storage/storage.module';
import { SessionStorageService } from './storage/services/session-storage/session-storage.service';
import { LocalStorageService } from './storage/services/local-storage/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StorageModule.forRoot({
      prefix: 'myApp',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public constructor(
    private readonly sessionStorage: SessionStorageService,
    private readonly localStorage: LocalStorageService
  ) {
    this.sessionStorage.setItem('sessionStorage', 'my session storage value');
    this.localStorage.setItem('localStorage', 'my local storage value');
  }
}
