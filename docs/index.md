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
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24 " fill="rgba(255,255,255,0.7)"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
    title: Introduction to Inflect
    details: Inflect at a high level
    link: /background#introduction
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
    title: Background
    details: Microservices, Event-Driven Architectures, and Stream Processing
    link: /background#background
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" class="size-6">
        <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
        <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
        <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    title: How We Built Inflect
    details: The challenges we faced, the decisions we made, and the tradeoffs we chose
    link: /building-inflect
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>
    title: Our Use Case
    details: What Inflect is and isn't designed for
    link: /what-is-inflect
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"  viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" class="size-6">
        <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
      </svg>
    title: How to Deploy and Use Inflect
    details: Steps for deploying and using Inflect
    link: /using-inflect
  - icon: >-
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" /></svg>
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

<div class='patterned-background top-pattern'></div>

<div class='patterned-background middle-pattern'></div>

<InfoSection v-bind="$frontmatter.info" />

<h2 class='centered centered-title' id="our-team">Our Team</h2>
<p class='centered'>Inflect was created by a fully remote pair of engineers based in the US</p>

<div class="team-container">
  <TeamMember 
    name="Ben Hancock" 
    tagline="Software Engineer"
    image="https://avatars.githubusercontent.com/u/95947317?v=4"
    link="https://www.linkedin.com/in/benhancock-dev/"
    email="me@benhancock.dev"
    github="https://github.com/benhancock"
    linkedin="https://www.linkedin.com/in/benhancock-dev/"
  />

  <TeamMember 
    name="Chris Douglass" 
    tagline="Software Engineer"
    image="https://gravatar.com/avatar/ba3ab3db98d33b0944b95cb35389b5e5?size=256&cache=1724781517483"
    link="https://www.linkedin.com/in/christopheredouglass/"
    email="cedouglass@gmail.com"
    github="https://github.com/apopheny"
    linkedin="https://www.linkedin.com/in/christopheredouglass/"
  />
</div>

<div class='patterned-background snap-to-bottom'></div>

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

.VPFeature svg {
  transition: opacity 0.3s ease, fill 0.3s ease;
}

.VPFeature svg {
  opacity: 0.8;
}

.VPFeature:hover svg {
  opacity: 1;
}

.VPFeature:hover svg {
  fill: var(--vp-c-brand-1);
}

/* #168D5C */

.VPFeature:hover {
  border: solid 1px rgba(255,255,255,0.2) !important;
}

.VPFeature {
  border: none;
}

</style>