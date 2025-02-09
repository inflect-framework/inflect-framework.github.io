<template>
  <div>
    <div class="comparison-title-section">
      <h2 class="text-2xl font-bold mb-6">
        <span class="inflect-span">Inflect</span> complements popular stream
        processing frameworks
      </h2>
      <p>
        Inflect can be used as a standalone stream processing solution, or be
        seamlessly integrated with frameworks like Kafka, Flink, and Spark,
        filling critical gaps in usability and deployment efficiency
      </p>
    </div>
    <div class="chart-div">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th
              v-for="framework in frameworks"
              :key="framework.name"
              :class="[
                'p-2 border text-center align-top',
                framework.name === 'Inflect' ? 'bg-blue-50' : '',
              ]"
            >
              <div class="flex flex-col items-center gap-2 mb-2">
                <div
                  class="w-12 h-12 bg-gray-100 rounded flex items-center justify-center"
                >
                  <img
                    :src="framework.logo"
                    :alt="framework.name + ' logo'"
                    class="streaming-logo"
                  />
                </div>
                <span class="font-bold">{{ framework.name }}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(feature, idx) in features"
            :key="feature.name"
            :class="idx % 2 === 0 ? 'bg-gray-50' : ''"
          >
            <td class="p-2 border">{{ feature.name }}</td>
            <td
              v-for="framework in frameworks"
              :key="framework.id"
              :class="[
                'p-2 border text-center',
                framework.name === 'Inflect' ? 'bg-blue-50' : '',
              ]"
            >
              <span v-if="feature[framework.id]" class="text-green-600">✓</span>
              <span v-else class="text-red-600">✗</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamFrameworkComparison",
  data() {
    return {
      frameworks: [
        {
          name: "Kafka Streams",
          id: "kafka",
          logo: "kafka-streams-logo.png",
        },
        {
          name: "Apache Flink",
          id: "flink",
          logo: "flink_logo.png",
        },
        {
          name: "Spark Streaming",
          id: "spark",
          logo: "spark_logo.png",
        },
        {
          name: "Inflect",
          id: "inflect",
          logo: "logo.svg",
        },
      ],
      features: [
        {
          name: "Supports complex, stateful processing",
          kafka: true,
          flink: true,
          spark: true,
          inflect: false,
        },
        {
          name: "Supports high (500,000+ events) throughput",
          kafka: true,
          flink: true,
          spark: true,
          inflect: true,
        },
        {
          name: "Provides automated deployment out-of-the-box",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
        {
          name: "Provides UI for managing transformation pipelines",
          kafka: false,
          flink: true,
          spark: true,
          inflect: true,
        },
        {
          name: "No boilerplate required",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
        {
          name: "Supports visual pipeline creation without coding",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
        {
          name: "Built-in schema validation",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
        {
          name: "Visual pipeline testing interface",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
        {
          name: "Low barrier to entry",
          kafka: false,
          flink: false,
          spark: false,
          inflect: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.comparison-wrapper {
  font-family: system-ui, -apple-system, sans-serif;
}

table {
  border-spacing: 0;
}

.text-green-600 {
  color: #168d5c;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0 0 5px rgba(22, 141, 91, 0.61);
}

.bg-blue-50 {
  background-color: rgba(22, 141, 121, 0.11);
}

.comparison-title-section {
  border-radius: 12px;
  padding: 30px;
  margin: auto;
}

h2 {
  border-top: none;
}

.chart-div {
  margin: auto;
  padding: 5px;
}

@media (min-width: 768px) {
  .chart-div {
    margin: auto;
    padding: 10px 100px 50px 110px;
  }
  .comparison-title-section {
    border-radius: 12px;
    padding: 10px 100px 0px 100px;
    margin: auto;
  }
}

@media (max-width: 768px) {
  h2 {
    border-top: none;
    padding-top: 0;
    margin-top: 15px;
  }
}

.streaming-logo {
  max-height: 55px;
  padding-bottom: 15px;
  margin: auto;
}

.inflect-span {
  color: #3bee9a;
}

th,
td {
  border: 1px solid rgba(226, 232, 240, 0);
}
</style>
