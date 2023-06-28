const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  limit: 1,
  fields: [
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'skill' }],
    },
  ],
};

export default about;
