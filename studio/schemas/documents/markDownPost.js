export default {
  name: 'markDownPost',
  title: 'Markdown Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      options: {
        minRows: 20
      }
    }
  ]
}
