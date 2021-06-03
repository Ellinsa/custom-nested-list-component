let items = [
  {
    name: 'Служебная записка',
    link: 'https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib',
    sublistItems: [],
    templates: [
      {
        name: 'Шаблоны',
        items: [
          {
            name: 'Бюджетные заявки',
            link: '/',
            templates: [
              { name: ' Увеличение бюджета', link: '' },
              {
                name: 'Корректировка бюджета в рамках суммы утвержденной на месяц (перенос денежных средств между статьями в рамках функциональных направлений (бюджет рекламы)',
                link: ''
              }
            ]
          },
          {
            name: 'Дебиторка поставщиков',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Изменение продаж',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Кадровые СЗ',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Заявки на изменение штатного расписания',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Маркетинг',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Работа с ОЗМ',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          },
          {
            name: 'Ценооборазование',
            link: '/',
            templates: [
              { name: 'Шаблон1', link: '' },
              { name: 'Шаблон2', link: '' }
            ]
          }
        ]
      }
    ]
  }
]

export default function getListItems() {
  return items
}
