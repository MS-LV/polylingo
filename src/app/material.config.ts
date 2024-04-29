import { InjectionToken } from '@angular/core';

export interface MaterialConfig {
  tooltip: {
    hideDelay: number;
    showDelay: number;
    position: 'above' | 'below' | 'left' | 'right';
  };
}

export const MATERIAL_CONFIG: MaterialConfig = {
  tooltip: {
    hideDelay: 500,
    showDelay: 1000,
    position: 'above',
  },
};

export const MATERIAL_CONFIG_TOKEN = new InjectionToken<MaterialConfig>(
  'material.config',
  {
    factory: () => MATERIAL_CONFIG,
  }
);
