// Check if Snipcart failed to load
if(typeof Snipcart === 'undefined') {
  // Configure fallback settings
  window.SnipcartSettings = {
    publicApiKey: 'YOUR_API_KEY_HERE', // Replace with your actual key
    autopop: true,
    loadStrategy: 'on-user-interaction'
  };

  // Create script element dynamically
  const script = document.createElement('script');
  script.src = '/js/snipcart-fallback.js'; // Path to local Snipcart copy
  script.async = true;
  script.defer = true;
  
  // Error handling for fallback
  script.onerror = function() {
    console.error('Failed to load Snipcart fallback');
    document.body.innerHTML = `
      <div class="snipcart-error">
        <h2>Checkout System Unavailable</h2>
        <p>Please refresh the page or contact support</p>
      </div>
    `;
  };

  // Add to document head
  document.head.appendChild(script);
}
