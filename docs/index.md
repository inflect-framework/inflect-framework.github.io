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
    - title: Manage Event Pipelines Easily
      description: Inflect provides an intuitive dashboard for authoring, testing, updating, and managing event transformation pipelines, greatly reducing the learning curve for microservice teams
      image: /diagrams/home/dashboard.png
    - title: Automatically Scale with Event Traffic
      description: Inflect's automated Kubernetes deployment scales with event traffic, and each instance of the app is capable of processing 40,000+ events per second, making it well-suited for handling high volume data flows
      image: /diagrams/home/deployment.png
    - title: Author Transformations in Javascript
      description: Define transformations intuitively as familiar Javascript functions
      image: /diagrams/home/js-code.png
    - title: Test Events Easily
      description: Inflect's user interface allows you to automatically generate test events based on your schema, edit them, and pass them through transformations before deploying them into production
      image: /diagrams/home/test-page.png

# Features section
features:
  - icon: 👋🏻
    title: Introduction to Inflect
    details: Get acquainted with Inflect
    link: /introduction
  - icon: 🗂️
    title: Background
    details: Microservices, Event-Driven Architectures, and Stream Processing
    link: /background
  - icon: 👷🏻‍♂️
    title: How We Built Inflect
    details: The challenges we faced, the decisions we made, and the tradeoffs we chose
    link: /building-inflect
  - icon: ❔
    title: What is Inflect?
    details: Our use case
    link: /what-is-inflect
  - icon: 🔧
    title: How to Deploy and Use Inflect
    details: Steps for deploying and using Inflect
    link: /using-inflect
  - icon: 🗓
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