import {
  defineNamespace,
  defineProjections,
  Model as КонтроллерMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-5-контроллер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтроллерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
