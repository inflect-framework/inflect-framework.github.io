---
prev: false
next: 
  text: 'Background'
  link: '/background'
---

# Introduction

Inflect is a stream processing framework that simplifies stateless event transformations between microservices in an event-driven architecture. It is designed to be lightweight and easy to use, providing high performance and throughput without the complexity of large, general-purpose stream processing frameworks. Inflect integrates seamlessly with Kafka and can either complement existing stream processors or serve as a standalone solution, simplifying the management of data flows as complex event-driven architectures evolve over time. 

In this case study, we discuss how we built Inflect, some of the technical challenges we solved, and the tradeoffs involved with our decisions. But first, let’s look at the problems that Inflect is designed to address.
