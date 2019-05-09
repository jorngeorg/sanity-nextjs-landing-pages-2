export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cd42a8077cb233335d557a9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio',
                  apiId: '79c8c78a-b90a-4f95-8846-9dda793d69d1'
                },
                {
                  buildHookId: '5cd42a80d31f169a6d045175',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2',
                  apiId: '02c036da-3feb-4058-9120-1d18c32593f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorngeorg/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
