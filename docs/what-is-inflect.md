---
prev:
  text: 'Background'
  link: '/background'
next:
  text: 'Building Inflect'
  link: '/building-inflect'
---

# What is Inflect?

Inflect is a specialized stream processing framework for event-driven architectures designed specifically for the task of transforming messages en route between microservices in an Event-Driven Architecture. It can be used as a standalone stream processing solution or complement existing stream processors in a system.

Inflect simplifies  the process of defining, implementing, and managing message transformations. It offers a more accessible approach to this crucial aspect of system integration, reducing the learning curve and operational overhead associated with general-purpose stream processing frameworks.

Inflect is a self-hosted solution deployed on Kubernetes and supports high throughput, scaling up and down in response to event load. It provides an intuitive user interface for authoring and managing transformation pipelines, including those with multi-step transformation, filtering, and failure handling logic, and those that require validation of incoming or outgoing messages against a particular schema. It also provides an interface for testing out and iterating on these pipelines prior to deployment.

## What Inflect is Not

Because Inflect is designed to address a specific use case, it can not play the role of a general-purpose stream processing framework. Real-time analytics, monitoring, real-time computation, and any other stream processing tasks that are secondary to the job of transforming messages in order to keep microservices decoupled should be carried out using another stream processing framework. 

Inflect is also designed to work with Apache Kafka, meaning that it is not suitable for systems that use a different event broker.

We faced many challenges designing and building a stream processing framework for this use case; below we discuss some of these challenges, the solutions we chose, and the tradeoffs involved with these decisions.
