import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-5-серверная', 'Unit | Serializer | i-i-s-prilozhenie-5-серверная', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-5-серверная',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-5-режим-сервера',

    'model:i-i-s-prilozhenie-5-должность',
    'model:i-i-s-prilozhenie-5-контроллер',
    'model:i-i-s-prilozhenie-5-отчет-о-сервере',
    'model:i-i-s-prilozhenie-5-расположение',
    'model:i-i-s-prilozhenie-5-сенсоры',
    'model:i-i-s-prilozhenie-5-серверная',
    'model:i-i-s-prilozhenie-5-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
