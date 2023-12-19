import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idСотрудника: DS.attr('number'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-prilozhenie-5-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  idСотрудника: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-сотрудник.validations.idСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-prilozhenie-5-сотрудник', {
    idСотрудника: attr('Id сотрудника', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    должность: belongsTo('i-i-s-prilozhenie-5-должность', 'Должность', {

    }, { index: 4 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-prilozhenie-5-сотрудник', {
    idСотрудника: attr('Id сотрудника', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 })
  });
};
