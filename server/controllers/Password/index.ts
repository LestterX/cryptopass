import * as create from './Create';
import * as getAll from './GetAll';
import * as deleteById from './DeleteById';
import * as updateById from './UpdateById';

export const passwordController = {
  ...create,
  ...getAll,
  ...deleteById,
  ...updateById,
};