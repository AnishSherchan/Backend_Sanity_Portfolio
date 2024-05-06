export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    //? Title
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    // ? Slug
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
    // ? Content
    {
      name: 'content',
      type: 'array',
      title: 'Content',
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
    // ? Description
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    // ? Preview url
    {
      name: 'preview_url',
      title: 'Preview URL',
      type: 'string',
    },
    // ? Github Url
    {
      name: 'github_url',
      title: 'Github URL',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    //? Image
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
          validation: (rule: any) => rule.required(),
        },
      ],
      validation: (rule: any) => rule.required(),
    },
    // ? Pinned
    {
      name: 'pinned',
      title: 'Pin',
      type: 'boolean',
      validation: (rule: any) => rule.required(),
    },
    {
      title: 'Tags',
      name: 'Tag',
      description: 'Eg: Responsive design, Frontend',
      type: 'array',
      of: [{type: 'string'}],
    },
    // ? tech used
    {
      name: 'techstackref',
      title: 'Tech used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'tech_Stack'},
        },
      ],
      validation: (rule: any) => rule.required(),
    },
  ],
}
