import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_5ДолжностьModel from './models/i-i-s-prilozhenie-5-должность';
import IISPrilozhenie_5КонтроллерModel from './models/i-i-s-prilozhenie-5-контроллер';
import IISPrilozhenie_5ОтчетОСервереModel from './models/i-i-s-prilozhenie-5-отчет-о-сервере';
import IISPrilozhenie_5РасположениеModel from './models/i-i-s-prilozhenie-5-расположение';
import IISPrilozhenie_5СенсорыModel from './models/i-i-s-prilozhenie-5-сенсоры';
import IISPrilozhenie_5СервернаяModel from './models/i-i-s-prilozhenie-5-серверная';
import IISPrilozhenie_5СотрудникModel from './models/i-i-s-prilozhenie-5-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-5-должность': IISPrilozhenie_5ДолжностьModel,
    'i-i-s-prilozhenie-5-контроллер': IISPrilozhenie_5КонтроллерModel,
    'i-i-s-prilozhenie-5-отчет-о-сервере': IISPrilozhenie_5ОтчетОСервереModel,
    'i-i-s-prilozhenie-5-расположение': IISPrilozhenie_5РасположениеModel,
    'i-i-s-prilozhenie-5-сенсоры': IISPrilozhenie_5СенсорыModel,
    'i-i-s-prilozhenie-5-серверная': IISPrilozhenie_5СервернаяModel,
    'i-i-s-prilozhenie-5-сотрудник': IISPrilozhenie_5СотрудникModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
