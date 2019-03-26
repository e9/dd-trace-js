const tracer = require('.').init({
  experimental: {
    runtimeMetrics: true
  }
})

let span

setInterval(() => {
  span && span.finish()
  span = tracer.startSpan('web.request')
}, 1)
