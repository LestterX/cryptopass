import * as createProvider from './Create';
import * as getAllProvider from './GetAll';
import * as deleteByIdProvider from './DeleteById';
import * as updateByIdProvider from './UpdateById';

export const passProviders = {
  ...createProvider,
  ...getAllProvider,
  ...deleteByIdProvider,
  ...updateByIdProvider,
};