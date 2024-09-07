export default {
  title: "Inflect",
  description: "A stream processing framework for stateless event transformations",
  lang: 'en-US',
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'force-dark',
  
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Inflect",
    nav: [
      { text: "Home", link: "/index" },
      { text: "Case Study", link: "/introduction" },
      { text: "Team", link: "/team" },
    ],
    sidebar: [
      {
        text: "Case Study",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Introduction", link: "/background#introduction", docFooter: {
            prev: true,
            next: true,
          },},
          { 
            text: "Background", 
            link: "/background#background",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "From Monolith to Microservices", link: "/background#from-monolith-to-microservices" },
              { text: "Event-Driven Architectures and the pub-sub model", link: "/background#event-driven-architectures-and-the-pub-sub-model" },
              { text: "Challenges in Complex EDAs", link: "/background#challenges-in-complex-edas" },
              { text: "Message transformations in an Event-Driven Architecture", link: "/background#message-transformations-in-an-event-driven-architecture" },
              { text: "Stream Processing Frameworks", link: "/background#stream-processing-frameworks" },
              { text: "The need for a lightweight stream processing framework", link: "/background#the-need-for-a-lightweight-stream-processing-framework" },
            ]
          },
          { 
            text: "What is Inflect?", 
            link: "/what-is-inflect",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "Overview", link: "/what-is-inflect#what-is-inflect" },
              { text: "What Inflect is Not", link: "/what-is-inflect#what-inflect-is-not" },
            ]
          },
          { 
            text: "Building Inflect", 
            link: "/building-inflect",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "Prototyping Inflect", link: "/building-inflect#prototyping-inflect" },
              { text: "Handling Transformations", link: "/building-inflect#handling-transformations" },
              { 
                text: "Managing Pipelines", 
                link: "/building-inflect#managing-pipelines",
              },
              { text: "Scaling our app", link: "/building-inflect#scaling-our-app" },
              { text: "Assessing performance", link: "/building-inflect#assessing-performance" },
              { text: "Final Architecture", link: "/building-inflect#final-architecture" },
            ]
        },
        { 
          text: "Using Inflect", 
          link: "/using-inflect",
          collapsible: true,
          collapsed: true,
          items: [
          {
            text: "How to Deploy Inflect",
            link: "/using-inflect#how-to-deploy-inflect"
          },
          {
            text: "How to Use Inflect",
            link: "/using-inflect#how-to-use-inflect"
          },
          {
            text: "Accessing the UI",
            link: "/using-inflect#accessing-the-ui"
          },
          {
            text: "Creating a Pipeline",
            link: "/using-inflect#creating-a-pipeline"
          },
          {
            text: "Testing a Pipeline",
            link: "/using-inflect#testing-a-pipeline"
          },
          {
            text: "Pausing a Pipeline",
            link: "/using-inflect#pausing-a-pipeline"
          }
          ]
         },
        { 
          text: "Future Work", 
          link: "/future-work",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "Audit Logging",
              link: "/future-work#audit-logging"
            },
            {
              text: "Schema Evolution and Versioning",
              link: "/future-work#schema-evolution-and-versioning"
            },
            {
              text: "Support for More Languages",
              link: "/future-work#support-for-more-languages"
            },
          ]
        },
        ],
      },
    ],
    
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
