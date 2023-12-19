import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СенсорыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-5-сенсоры';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СенсорыMixin, Validations, {
});

defineProjections(Model);

export default Model;
