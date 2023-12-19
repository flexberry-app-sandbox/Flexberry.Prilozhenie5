import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтроллерMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-5-контроллер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтроллерMixin, Validations, {
});

defineProjections(Model);

export default Model;
