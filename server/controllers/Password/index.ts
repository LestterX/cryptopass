import * as create from './Create';
import * as getAll from './GetAll';
import * as deleteById from './DeleteById';

export const passwordController = {
  ...create,
  ...getAll,
  ...deleteById,
};