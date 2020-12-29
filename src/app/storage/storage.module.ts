import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW } from './tokens/window.token';
import { STORAGE_KEY_PREFIX } from './tokens/storage-key-prefix.token';
import { StorageModuleConfig } from './interfaces/storage-module-config.interface';

@NgModule({
  imports: [CommonModule],
})
export class StorageModule {
  static forRoot(
    config: StorageModuleConfig
  ): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: WINDOW,
          useFactory: () => window,
        },
        {
          provide: STORAGE_KEY_PREFIX,
          useValue: config.prefix || '',
        },
      ],
    };
  }
}
