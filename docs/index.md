---
layout: home

# Hero section
hero:
  name: Inflect
  text: Stateless event transformations for Kafka EDAs
  image:
    src: /logo-big.svg
    alt: Inflect logo
  tagline: Inflect is an open-source stream processing framework for Kafka that simplifies stateless event transformations between microservices in an event-driven architecture
  actions:
    - theme: brand
      text: Read the Case Study
      link: '/background#introduction'
    - theme: alt
      text: View on GitHub
      link: https://github.com/inflect-framework

# Info Section
info:
  items:
    - title: Intuitive Event Pipeline Management
      description: Inflect's dashboard simplifies authoring, testing, updating, and managing event transformation pipelines, reducing barriers to entry and streamlining microservice workflows
      image: /diagrams/home/dashboard.png
    - title: Automatic Scaling for High-Volume Processing
      description: Inflect's automated Kubernetes deployment scales with event traffic. Each app instance is capable of processing over 40,000 events per second, making it well-suited for high volume data flows
      image: /diagrams/home/deployment.png
    - title: JavaScript-Based Transformations
      description: Define transformations as Javascript functions, reducing boilerplate and accelerating development
      image: /diagrams/home/js-code.png
    - title: Streamlined Event Testing
      description: Automatically generate test events based on your schema, edit them, and pass them through transformations before deploying them into production
      image: /diagrams/home/test-page.png

# Features section
features:
  - icon: 🌟
    title: Introduction to Inflect
    details: Inflect at a high level
    link: /background#introduction
  - icon: 📚
    title: Background
    details: Microservices, Event-Driven Architectures, and Stream Processing
    link: /background#background
  - icon: 🛠️
    title: How We Built Inflect
    details: The challenges we faced, the decisions we made, and the tradeoffs we chose
    link: /building-inflect
  - icon: 🎯
    title: Our Use Case
    details: What Inflect is and isn't designed for
    link: /what-is-inflect
  - icon: 🚀
    title: How to Deploy and Use Inflect
    details: Steps for deploying and using Inflect
    link: /using-inflect
  - icon: 🔮
    title: What's Next
    details: Planned features & future work
    link: /future-work

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Inflect
  - - meta
    - name: title
      content: Inflect
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---

<InfoSection v-bind="$frontmatter.info" />

<h2 class='centered centered-title' id="our-team">Our Team</h2>
<p class='centered'>Inflect was created by a fully remote pair of engineers based in the US</p>

<div class="team-container">
  <TeamMember 
    name="Ben Hancock" 
    tagline="Software Engineer"
    image="https://avatars.githubusercontent.com/u/95947317?v=4"
    link="https://www.linkedin.com/in/benhancock-dev/"
  />

  <TeamMember 
    name="Chris Douglass" 
    tagline="Software Engineer"
    image="https://gravatar.com/avatar/ba3ab3db98d33b0944b95cb35389b5e5?size=256&cache=1724781517483"
    link="https://www.linkedin.com/in/christopheredouglass/"
  />
</div>

<style>
.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.centered {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.centered-title {
  padding-top: 4rem;
  font-size: 2rem;
}

p.centered {
  padding-bottom: 3rem;
  text-align: center;
}

#our-team {
  padding-top: 5rem;
}

</style>