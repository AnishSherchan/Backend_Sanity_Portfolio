export default {
  name: 'tech_Stack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: `Icon text from iconify. EG: "vscode-icons:file-type-reactjs"`,
      validation: (rule: any) => rule.required(),
    },
    {
      title: 'Development format',
      description: 'Choose Frontend or Backend',
      name: 'development_format',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
        ],
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'pinned',
      title: 'Pin',
      type: 'boolean',
      validation: (rule: any) => rule.required(),
    },
  ],
}
