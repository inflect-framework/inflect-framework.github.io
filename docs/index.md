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
      link: '/introduction'
    - theme: alt
      text: View on GitHub
      link: https://github.com/inflect-framework

info:
  items:
    - title: Intuitive Event Pipeline Management
      description: Inflect's dashboard simplifies authoring, testing, updating, and managing event transformation pipelines, reducing barriers to entry and streamlining microservice workflows
      image: /diagrams/home/dashboard.png
    - title: Automatic Scaling for High-Volume Processing
      description: Inflect's automated Kubernetes deployment scales with event traffic. Each app instance is capable of processing over 40,000 events per second, making it well-suited for handling high volume data flows
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
    link: /introduction
  - icon: 📚
    title: Background
    details: Microservices, Event-Driven Architectures, and Stream Processing
    link: /background
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