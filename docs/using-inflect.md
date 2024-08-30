---
prev:
  text: 'Building Inflect'
  link: '/building-inflect'
next:
  text: 'Future Work'
  link: '/future-work'
---

# Using Inflect
## How to Install and Deploy Inflect

### Prerequisites

- [Docker](https://www.docker.com/) version 24 or higher
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) version 1.28 or higher
- Have your Kafka broker URLs, Kafka API keys, and (optional) Schema Registry API keys ready

### 1. Clone the stream processor repository

```sh [npm]
$ git clone https://github.com/inflect-framework/stream-processor.git
```

### 2. Install npm packages
```sh [npm]
$ cd stream-processor
$ npm i
```

### 3. Run make deploy
```sh [npm]
$ make deploy
```
This will begin the Inflect startup script

::: details Using a self-hosted Kafka cluster?
If your Kafka cluster is self-hosted, provide a comma-separated list of all broker addresses (e.g., kafka1:9092,kafka2:9092,kafka3:9092) during setup

If using SASL_PLAIN for authentication, provide username and password instead of API key/secret

If using a self-hosted Schema Registry, leave the Registry API fields blank and provide only the Registry URL.

:::

## How to Use Inflect
### Accessing the UI
To access the UI locally, `cd` into the `client` directory and run `npm run`, then visit `localhost:3010` in your browser.

::: tip NOTE

If you are having issues connecting to the PostgreSQL database from the UI, ensure that you have permissions to access the containerized database locally

:::

### Creating a pipeline

![Creating a pipeline](/diagrams/demos/create.gif){.center}
<center style="font-size:0.85em;font-style:italic;"></center>

### Testing a pipeline

![Creating a pipeline](/diagrams/demos/test.gif){.center}
<center style="font-size:0.85em;font-style:italic;"></center>

### Pausing a pipeline

![Creating a pipeline](/diagrams/demos/pause.gif){.center}
<center style="font-size:0.85em;font-style:italic;"></center>