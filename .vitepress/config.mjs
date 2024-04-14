import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Algorithms in Amharic",
  description: "The project aims to define algorithms concepts in clear and simple language, making them accessible to anyone who can speak Amharic irrespective of their technical skill.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Basics',
        items: [
          { text: 'Introduction to Algorithms', link: '/docs/0-Basics-of-Algorithms/' },
          { text: 'Types of Algorithms', link: '/docs/0-Basics-of-Algorithms/types-of-algorithms' }
        ]
      }, 
      {
        text: 'Data Structures',
        link: '/docs/1-Data-Structures/',
      },
      {
        text: 'Searching',
        link: '/docs/2-Searching/'
      },
      {
        text: 'Sorting',
        link: '/docs/3-Sorting/',
      },
      {
        text: 'Book Recommendations',
        link: '/docs/Book-Recommendation/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HenokB/Algorithms-in-Amharic' }
    ]
  }
})
