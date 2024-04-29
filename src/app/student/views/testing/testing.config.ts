import { InjectionToken } from '@angular/core';

interface GrammarConfig {}
interface ReadingConfig {}
interface ListeningConfig {}
interface DictionaryConfig {}

interface WritingConfig {}

export interface TestingConfig {
  grammar: GrammarConfig;
  reading: ReadingConfig;
  listening: ListeningConfig;
  dictionary: DictionaryConfig;
  writing: WritingConfig;
}

export const TESTING_CONFIG: TestingConfig = {
  grammar: {},
  reading: {},
  listening: {},
  dictionary: {},
  writing: {},
};

export const TESTING_CONFIG_TOKEN = new InjectionToken<TestingConfig>(
  'testing.config',
  {
    factory: () => TESTING_CONFIG,
  }
);
