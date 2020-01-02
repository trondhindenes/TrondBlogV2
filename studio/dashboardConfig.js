export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0de020cc351e31a83fb399',
                  title: 'Sanity Studio',
                  name: 'TrondBlogV2-studio',
                  apiId: '33bd553f-fde9-49f6-b33c-edf7133e725b'
                },
                {
                  buildHookId: '5e0de020204062ca83b2a1bf',
                  title: 'Blog Website',
                  name: 'TrondBlogV2',
                  apiId: '2a46e714-ede5-45c8-9bb1-5b11a5770931'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trondhindenes/TrondBlogV2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://TrondBlogV2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
