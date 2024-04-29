import { InjectionToken } from '@angular/core';
import { Ranger } from '@/app.interface';

export interface UsersFormConfig {
  fullName: Ranger;
  email: Ranger;
  password: Ranger;
  description: Ranger;
}

export const USERS_FORM_CONFIG: UsersFormConfig = {
  fullName: {
    min: 1,
    max: 30,
  },
  email: {
    min: 1,
    max: 35,
  },
  password: {
    min: 4,
    max: 16,
  },
  description: {
    min: 0,
    max: 1000,
  },
};

export const USERS_FORM_CONFIG_TOKEN = new InjectionToken<UsersFormConfig>(
  'users.form.config',
  {
    factory: () => USERS_FORM_CONFIG,
  }
);