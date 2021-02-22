import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import { error } from '@pnotify/core';

defaultModules.set(PNotifyMobile, {});
defaults.width = '250px';
defaults.sticker = false;
defaults.closerHover = true;

export default error;
