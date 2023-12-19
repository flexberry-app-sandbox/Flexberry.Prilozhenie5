import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
