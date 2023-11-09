import * as createProvider from './Create';
import * as getAllProvider from './GetAll';

export const passProviders = {
  ...createProvider,
  ...getAllProvider,
};