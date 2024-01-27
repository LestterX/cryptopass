import * as createProvider from './Create';
import * as getAllProvider from './GetAll';
import * as deleteByIdProvider from './DeleteById';

export const passProviders = {
  ...createProvider,
  ...getAllProvider,
  ...deleteByIdProvider,
};