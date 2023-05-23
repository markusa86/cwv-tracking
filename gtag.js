window.dataLayer = window.dataLayer || [];
function gtag(){
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-XX12345X1X');

function sendToGoogleAnalytics({name, delta, value, id}) {
  if (delta > 0) {
    delta = Math.round((delta + Number.EPSILON) * 1000) / 1000
  }
  console.log(name,delta);
  gtag('event', name, {
    value: delta, // Use `delta` so the value can be summed.
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.
  });
}

(function () {
  var script = document.createElement('script');
  // https://github.com/GoogleChrome/web-vitals
  script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
  script.onload = function () {
    webVitals.getCLS(sendToGoogleAnalytics);
    webVitals.getFID(sendToGoogleAnalytics);
    webVitals.getLCP(sendToGoogleAnalytics);
    webVitals.getFCP(sendToGoogleAnalytics);
    webVitals.getINP(sendToGoogleAnalytics);
    webVitals.getTTFB(sendToGoogleAnalytics);
  };
  document.head.appendChild(script);
})();
