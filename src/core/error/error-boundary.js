export class ErrorBoundary {
  constructor(element) {
    this.element = element;
  }
  
  capture(error) {
    this.element.innerHTML = `
      <div class="error-alert">
        <h3>Application Error</h3>
        <pre>${error.message}</pre>
        <button onclick="location.reload()">Reload App</button>
      </div>
    `;
  }
}
