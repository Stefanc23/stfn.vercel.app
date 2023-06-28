const skill = {
  name: 'skill',
  title: 'Skill',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Programming Languages', value: 'Programming Languages' },
          { title: 'Frameworks & Libraries', value: 'Frameworks & Libraries' },
          {
            title: 'Databases & Other Tools',
            value: 'Databases & Other Tools',
          },
        ],
      },
    },
  ],
};

export default skill;
