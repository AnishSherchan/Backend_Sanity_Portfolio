export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required()},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
      validation: (rule: any) => rule.required(),
    },
  ],
}
