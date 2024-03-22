export default {
  name: 'my_story',
  title: 'My Story Data',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: (rule: any) => rule.required()},
    {name: 'email', title: 'Email', type: 'string', validation: (rule: any) => rule.required()},
    // ?Image
    {
      name: 'profile_photo',
      title: 'Profile Photo',
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
    {
      name: 'story',
      title: 'Story',
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
