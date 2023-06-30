const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web', value: 'Web' },
          { title: 'Mobile', value: 'Mobile' },
          { title: 'Other', value: 'Other' },
        ],
      },
      required: true,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      required: true,
    },
    {
      name: 'repoLink',
      title: 'Repository Link',
      type: 'url',
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
    },
  ],
};

export default project;
