import {defineType, FieldDefinition, FieldDefinitionBase, FieldName} from 'sanity'

const supportedLanguages: {
  id: string;
  title: string;
  isDefault?: boolean;
}[] = [
  {
    id: 'de',
    title: 'Deutsch',
    isDefault: true
  },
  {
    id: 'fr',
    title: 'Französisch'
  },
  {
    id: 'it',
    title: 'Italienisch'
  },
  {
    id: 'en',
    title: 'Englisch'
  },
];

export const baseLang = supportedLanguages
  .filter(l => l.isDefault)
  .map(l => l.id)[0];

const fields = supportedLanguages.map(lang => {
  const field: FieldDefinition = {
    title: lang.title,
    name: lang.id,
    type: 'string',
  };

  if (!lang.isDefault) {
    field.fieldset = 'translations';
  }

  return field;
});

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Übersetzungen',
      name: 'translations',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields,
});