const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
      required: true,
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      required: true,
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      required: true,
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      required: true,
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'skill' }],
      required: true,
    },
  ],
};

export default about;
