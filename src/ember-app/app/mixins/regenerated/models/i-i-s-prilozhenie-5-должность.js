import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idДолжности: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  idДолжности: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-должность.validations.idДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-prilozhenie-5-должность.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-prilozhenie-5-должность', {
    наименование: attr('Наименование', { index: 0 }),
    idДолжности: attr('Id должности', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-prilozhenie-5-должность', {
    наименование: attr('Наименование', { index: 0 }),
    idДолжности: attr('Id должности', { index: 1 })
  });
};
