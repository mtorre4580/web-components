const templateButton = document.createElement('template');

templateButton.innerHTML = `
    <style>
      .landing_button {
        border-color: transparent;
        background-color: #3483fa;
        color: #fff;
        text-decoration: none;
        font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 16px;
        line-height: 48px;
        padding: 0 24px;
        height: 48px;
        text-align: center;
        border-radius: 6px;
        transition: .18s ease-out;
        transition-property: background,color;
        display: inline-block;
        width: auto;
        margin: auto;
      }
    </style>
    <a class='landing_button'>
     <slot></slot>
    </a>
  `;

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateButton.content.cloneNode(true));
  }

  attributeChangedCallback(name, prevValue, newValue) {
    if (name === 'url' && newValue !== null) {
      this.shadowRoot.querySelector('.landing_button').href = newValue;
    }
  }

  static get observedAttributes() {
    return ['url'];
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('wc-button', Button);
