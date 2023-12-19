import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РежимСервераEnum from '../enums/i-i-s-prilozhenie-5-режим-сервера';

export default FlexberryEnum.extend({
  enum: РежимСервераEnum,
  sourceType: 'IIS.Prilozhenie_5.РежимСервера'
});
