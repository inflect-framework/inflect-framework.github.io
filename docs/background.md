---
prev:
  text: 'Introduction'
  link: '/introduction'
next:
  text: 'What is Inflect?'
  link: '/what-is-inflect'
---

# Background

## From Monolith to Microservices

Maintaining, scaling, and evolving an application becomes increasingly difficult as it grows in size and complexity. The challenges of managing a large, monolithic architecture often lead to slower development cycles, increased risk of errors, and difficulty in implementing new features or technologies. This is because in a monolithic architecture, components of the system are often tightly coupled to one another, and so changes to any one part of the system can have far-reaching and sometimes unpredictable consequences.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/monolith_failure.svg' alt='Monolithic architecture with failing component leading to system failure'/>
</div>
Microservices architectures attempt to solve these issues by dividing a single large, monolithic architecture into several smaller, specialized components that operate independently of one another. Each service can be developed and deployed separately, allowing teams to work in parallel and accelerate their development. Additionally, individual services can be scaled as needed, optimizing resource usage and improving overall system performance. Isolation between services also means that failures in one component are less likely to affect others, making the system more robust as a whole.
![Event Table](/diagrams/background/monolith_to_microservice.svg)
While adopting microservices can increase a system’s flexibility, these components still need to communicate with one another. This inter-service communication introduces its own set of challenges and considerations. If this communication happens synchronously (where one service sends a request to another and waits for a response), services become tightly coupled, leading to potential performance bottlenecks and failures that can cascade throughout the system, undermining the benefits of using a microservices architecture in the first place. For example, if one component sends a message and waits for a response from another component, which has to wait for another component, on and on, then a failure in any one of these components can bring the system to a halt.

## Event-Driven Architectures and the pub-sub model

### Event-Driven Architectures

To address these challenges with communication between microservices, many systems adopt an Event-Driven Architecture (EDA).

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/monolith_to_microservice.svg' alt='Monolithic architecture converting to microservices architecture, with individual components communicating using messages'/>
</div>
In this model, services communicate through events rather than direct synchronous calls to one another. When an action occurs or a state changes, the affected microservice publishes an event message, which other services can then receive and process.
![Event Table](/diagrams/background/microservice_failure.svg)
This approach significantly reduces coupling between microservices, since services no longer depend directly on each other’s availability or immediate response. And, because services can continue functioning even if other parts of the system are temporarily unavailable, the system can be much more fault tolerant.

### Event Brokers

Event distribution within an EDA can become problematic if each microservice in the EDA has to independently manage intricate logic for things like retrying sending a message or keeping a list of who to send a message to when an event occurs. Event brokers and the publish-subscribe (pub-sub) messaging pattern help solve those problems. Event brokers centralize event distribution logic, abstracting away the complexity of message routing and delivery.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/broker_routing.svg' alt='Microservice architecture utilizing a message broker to route messages of different shape to multiple consumers'/>
</div>
There are many different event brokers, including both self-hosted and fully-managed solutions. In large, complex production systems, organizations often use Apache Kafka because it is battle tested for high-velocity data flows and has a mature open-source ecosystem.

Under the pub-sub model, if an event occurs, a service _publishes_ the event to a “topic”, which is a named category within the event broker in which logs of events are stored in order, and microservices interested in that event _subscribe_ to the topic. The event broker maintains the messages, allowing subscribers to actively fetch them as needed. This pull-based model is a key characteristic of Kafka, where consumers control when and how they retrieve messages from the broker. Kafka can also be configured to guarantee that messages will be delivered at least once, or exactly once.

Using the pub-sub model with an event broker offers several benefits:
Individual services don’t need to manage complex message delivery logic, and can instead take advantage of the abstractions provided by the event broker
Message routing can be managed from a single point, simplifying system administration
And, many event brokers offer features like message persistence, ensuring events aren’t lost if a subscriber is temporarily unavailable.

## Challenges in Complex EDAs

Using the pub-sub model doesn’t completely solve the challenge of inter-service communication. Even in pub-sub systems, services still have to send messages to one another in a form that recipients can interpret and process. This can really become an issue when the services evolve. If one microservice changes its message format – either for publishing or consuming – then that can trigger a cascade of necessary adjustments across the system. In a simple scenario with one producer and one consumer, adapting to such changes is straightforward: a change in one component can be easily matched by a corresponding update in the other.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/producer_contract_change_single.svg' alt="Producer sending messages to a consumer. The producer violates the contract by changing message shape, which the consumer cannot accomodate"/>
</div>
But in more complex systems, different components often consume messages from the same producer. This is where the real challenges lie. If a change in one consumer’s event contract requires us to make modifications to the producer and in turn to all of the other consumers, then we are right back to being tightly coupled, and we lose the benefits of being able to independently manage these microservices.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/producer_contract_change_multiple.svg' alt="The issue caused by contract mismatch between a single producer and consumer is multiplied by the number of consumers for a given topic"/>
</div>

## Message transformations in an Event-Driven Architecture

### Schema Evolution

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/schema_check.svg' alt="Producers sending messages of multiple shape to an event broker. The event broker routes each shape to a supported consumer by current and updated topics and schemas"/>
</div>
Teams employ various strategies to maintain loose coupling as microservices evolve. Schema evolution is one approach, wherein teams coordinate to ensure that event producers employ gradual, non-breaking changes, and consumers adapt to these backwards-compatible updated event contracts incrementally over time, rather than having producers introduce breaking changes all at once. Schema evolution is effective for promoting loose coupling when microservices are changing gradually. It allows for smoother transitions when schemas do change, and reduces the risk of system-wide disruptions. However, schema evolution alone often doesn’t suffice in scenarios where the various consumers of a producer’s events differ significantly in their needs, or when microservices are changing rapidly, making incremental adoption of schema changes more difficult.

### Transformations

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/consumer_change_shape.svg' alt="A message broker receiving messages in a shape not supported by a consumer. The message broker performs the work of transforming the message before making it available for receipt"/>
</div>
The other major solution to this problem is to transform the messages after they are published but before they are consumed. By adding an additional layer between event producers and consumers where the message is transformed to have the format and contents that the consumer needs, developers can keep their microservices decoupled without having to coordinate schema changes across all services. This is ideal for scenarios where we want producers to develop independently of different consumer needs or when rapid changes make schema evolution impractical.

Transformations offer other advantages over plain schema evolution. In addition to changing the format of a message to conform to a particular schema, transformations can be used to do things like enrich events with additional data, cleanse or normalize data, or perform pre-computation so as to optimize event processing when events do arrive at their destination. Transformations can also act as filters, selectively removing events that do not fit certain criteria so as to reduce downstream processing load and only let through relevant data.

In practice, organizations very often utilize a combination of schema evolution and message transformation, applying schema evolution wherever incremental adoption of schema changes is possible, and using message transformations in rapidly changing areas, or when integrating legacy systems which cannot adapt to schema changes.

Next, we discuss stream processing, the paradigm under which these transformations are carried out in EDAs.

### Stream Processing

Performing operations on a constant flow of messages such as the events traveling between microservices is called stream processing. Use cases for stream processing in microservices include real-time analytics, data enrichment, and real-time anomaly detection. And so, there are many general-purpose frameworks for stream processing uses that expand well beyond the transformations we’ve described. These frameworks, including Apache Flink, Apache Spark Streaming, and Kafka Streams, offer robust capabilities for handling complex tasks, including those that involve _stateful processing_. In stateful processing, the accumulated state of previous events influences the way current events are handled. In other words, stateful processing involves processing the stream as a whole, and not just single events at a time. This approach allows for operations that consider the entire stream's context, rather than processing each event in isolation, enabling more sophisticated analyses.

In the next section, we explore existing stream processing frameworks and their suitability for the task of transforming events between microservices for the purpose of decoupling.

## Stream Processing Frameworks

There are many stream processing frameworks, and the most widely used among them are open-source. While many cloud providers offer proprietary, managed stream processing solutions, we focused on the self-managed options because of the greater flexibility and control they offer over infrastructure and processing pipelines. It’s also common for production EDAs to choose open-source, self-managed solutions because they can be more cost-effective at scale, and help avoid vendor lock-in.

### Existing Solutions

The Kafka ecosystem is rich with open-source stream processing frameworks.

While these frameworks differ in their specific implementations and features, they are all designed to support complex, stateful processing. And because of the diverse set of requirements for stream processing in production EDAs, large organizations often employ several different stream processing solutions alongside each other, each for different purposes. Stateful and complex stream processing needs are well-covered by existing options. However, we found that for the specific task of performing event transformations in order to keep microservices decoupled as event contracts change, these robust, general-purpose solutions may be overly complex, hard to learn, and resource-intensive. We discuss the reasons for this in the section below.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px; margin-top: 20px;">
  <img src='/diagrams/background/stream_processors.svg' alt="A list of stream processor providers"/>
</div>

### Shortcomings for stateless event transformations

There are several challenges to applying existing stream processing solutions to stateless transformations:

#### Steep Learning Curve

Most stream processing frameworks are designed to handle a wide range of complex stream processing use cases. The comprehensive nature of these frameworks often results in a steep learning curve. Developers need to invest significant time and effort to understand the intricacies of the framework, its programming model, and operational aspects. This learning overhead can slow down development cycles and impede the agility that adopting microservices are meant to achieve.

Such a learning curve is not itself a problem when you have a team dedicated to stream processing, for whom the time needed to learn these frameworks is justified by the complexity and scale of the data processing tasks they handle. But for the kind of relatively simpler transformation we are concerned with, developers working on individual microservices want to be able to quickly and easily update and manage transformations as their service contracts evolve. However, the steep learning curve of existing frameworks makes doing so costly and time-consuming. Ideally, these developers should not be required to get up to speed on a complex stream processing framework for what should be a fairly routine task.

Major stream processing frameworks like Streams, Flink, Spark, and Samza require that stream processing applications be written in JVM-based languages like Java, Kotlin, or Scala. But the fact that many microservices are built using non-JVM languages creates a disconnect between service code and stream processing logic. For transformations that need to be able to be owned and managed by teams from many different microservices, the requirement that message transformation pipelines be authored in a JVM language creates a barrier to entry that further undermines the agility and independence that microservices are meant to achieve, since it essentially requires every team that needs to perform transformations on events coming into their service to learn a JVM language.

#### Excessive Code Complexity

##### Challenges with Centralization and Scalability

Because of the broad capabilities they offer, teams with limited resources often choose to consolidate diverse stream processing logic into large stream processing applications. Centralizing the logic in this way means that teams working on stream processing only have to learn one framework to work on any aspect of the system’s stream processing needs, but this comes at the cost of increased code complexity, reduced flexibility, and a return to the monolithic architecture patterns that microservices aim to avoid. By trying to have a single stream processing app or framework be responsible for all of the different stream processing needs of a system, these teams can end up with unwieldy, hard to manage stream processing codebases.

In addition to the problems of trying to address many stream processing concerns in a single framework, it can also become difficult to organize, manage, and understand data flows as the number of transformations grows. This scalability issue compounds the problems of centralized processing logic, as the more pipelines there are transforming and routing events across different parts of the system, the harder it becomes to reason about the system as a whole.

##### Verbose Pipeline Logic

Even for relatively simple transformations, the APIs made available by many stream processing frameworks can lead to verbose and complex code. For a single pipeline, which we define as a connection between a source Kafka topic and a target Kafka topic through which one or more transformations are performed on events, developers need to specify things like what topic to pull events from, what transformations to apply and in what order, when to filter events rather than allow them to continue in the pipeline, what to do with events that get filtered or fail, what topic to send transformed events to, as well as the Kafka configurations specific to their pipeline. The true challenge often lies not in specifying this core logic, but in the substantial amount of boilerplate code required to set up and configure the pipeline. This boilerplate typically includes setting up the execution environment, configuring serialization and deserialization, implementing error handling, and managing state and metrics. The resulting code can be several times larger than the core business logic, making pipelines harder to read, understand, and maintain.

#### Overhead

Large, robust stream processing frameworks are designed to manage state and perform processing across many events. This can introduce significant computational and operational overhead, which is unnecessary for stateless message transformations. In scenarios where efficiency is crucial and the processing requirements are relatively straightforward, using such heavyweight solutions may represent an inefficient use of resources. The mismatch between the complexity of the tool and the simplicity of the task can result in decreased overall system performance and increased operational complexity.

### The need for a lightweight stream processing framework

The challenges outlined in the previous section point to a gap in the current ecosystem of stream processing frameworks when it comes to the task of transforming messages for decoupling microservices. While existing solutions excel in complex stream processing scenarios, they introduce unnecessary complexities for our specific requirements. This observation led our team to explore the possibility of a more targeted approach.

#### Use Case

As described above, as organizations transition from monolithic architectures to microservices and adopt event-driven architectures with Apache Kafka, they often encounter a new set of challenges related to service evolution and message compatibility. While EDAs and the pub-sub model offer significant benefits in terms of scalability and loose coupling, they introduce complexities when it comes to changing message formats and structures over time.

In particular, we see a need for an open-source solution specifically tailored for teams that:
Want to perform stateless transformations for the purpose of maintaining microservice decoupling,
Aim to distribute ownership of these transformations across service teams,
Prefer to use Javascript for authoring transformations due to its accessibility,
Would benefit from a visual UI for designing and managing transformation pipelines,
And desire full control over their stream processing infrastructure.

This solution would address the needs of organizations looking to leverage familiar technologies while maintaining flexibility and ownership in their data transformation processes. Based on this use case and the gap we found in existing solutions, we identified several key requirements for a specialized framework:

#### Greater Accessibility and Agility

A framework designed to have a low barrier to entry would enable distributed ownership of transformations across microservice teams. The transformations and pipelines that route messages to a particular service would be managed by that service’s team. This approach aligns with the philosophy of microservices architecture, promoting autonomy and allowing teams to make quick, independent decisions about their data flows.

##### Javascript Support

Supporting Javascript for transformation authoring could address the language constraints imposed by existing JVM-centric frameworks and introduce greater flexibility for teams already familiar with Javascript. This flexibility would reduce cognitive load for teams working on message transformations and enable a wider range of developers to contribute effectively.

<div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
  <img src='/diagrams/background/stream_processor_languages.svg' alt="A list of stream processors and their supported programming languages"/>
</div>

#### Reduced Complexity

A focused feature set, tailored to stateless message transformation and designed to allow developers from any part of the system to drop in and make changes would lower the barrier to entry posed by existing solutions. A specialized tool would make reasoning about data flows and message routing more straightforward, and allow for easier routine changes to transformation pipelines by team members with varying levels of expertise.

#### Separation of Concerns

For teams that already have a stream processor in place, introducing a dedicated framework for message transformations, distinct from general stream processing, offers advantages that can outweigh initial integration costs. This approach enhances system flexibility, allowing teams to modify or update transformation logic without touching the core stream processing infrastructure. Additionally, it reduces overall system complexity by separating concerns - keeping transformation logic isolated from other processing tasks. This separation makes the system easier to understand, maintain, and debug, as developers can focus on one aspect at a time without worrying about unintended effects on other parts of the system.

#### Simplified pipeline authoring

Implementing non-programmatic, UI-based pipeline authoring could mitigate issues associated with learning extensive APIs and authoring verbose pipeline logic. For organizations that want to ensure that service teams can drop in and manage the transformations they own, a concrete process and visual approach to constructing transformation pipelines would make the process more intuitive and accessible to a broader range of teams.

#### Streamlined Resource Utilization

A lightweight solution tailored specifically to stateless message transformations could offer necessary functionality with potentially lower overall resource requirements compared to more comprehensive frameworks. By focusing on essential features for simple transformations, such a framework could provide efficient resource utilization for specific use cases. This approach may be particularly beneficial in scenarios where processing needs are straightforward and the full feature set of larger frameworks isn't required.

These requirements guided us to develop a specialized stream processing framework that addresses the unique challenges of message transformation for the purpose of microservice decoupling. In the following sections, we'll present our solution before delving into the technical details of its implementation, discussing the trade-offs we encountered and the solutions we devised to meet these requirements.
