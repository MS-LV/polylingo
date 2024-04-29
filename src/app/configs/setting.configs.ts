import { InjectionToken } from '@angular/core';
import { Ranger } from '@/app.interface';

export interface SettingFormConfig {
  dictionaryTime: Ranger;
  testingTime: Ranger;
  writingSymbolLength: Ranger;
  dictionaryPassingScore: Ranger;
  testingPassingScore: Ranger;
  blockQuizeTime: Ranger;
  listeningAutioReplay: Ranger;
  specialPassword: Ranger;
}

export const SETTING_FORM_CONFIG: SettingFormConfig = {
  dictionaryTime: {
    min: 10,
    max: 30,
  },
  testingTime: {
    min: 20,
    max: 70,
  },
  writingSymbolLength: {
    min: 150,
    max: 800,
  },
  dictionaryPassingScore: {
    min: 0,
    max: 100,
  },
  testingPassingScore: {
    min: 0,
    max: 100,
  },
  blockQuizeTime: {
    min: 6,
    max: 24,
  },
  listeningAutioReplay: {
    min: 1,
    max: 10,
  },
  specialPassword: {
    min: 6,
    max: 12,
  },
};

export const SETTING_FORM_CONFIG_TOKEN = new InjectionToken<SettingFormConfig>(
  'setting.config',
  {
    factory: () => SETTING_FORM_CONFIG,
  }
);
