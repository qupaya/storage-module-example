import { Inject, Injectable } from '@angular/core';
import { STORAGE_KEY_PREFIX } from '../../tokens/storage-key-prefix.token';
import { WINDOW } from '../../tokens/window.token';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageService {
  public constructor(
    @Inject(WINDOW) window: Window,
    @Inject(STORAGE_KEY_PREFIX) prefix: string
  ) {
    super(window.sessionStorage, prefix);
  }
}
