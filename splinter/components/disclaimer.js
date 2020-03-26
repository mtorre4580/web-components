const templateDisclaimer = document.createElement('template');

templateDisclaimer.innerHTML = `
    <style>
      .content {
       max-width: 1184px;
       margin: auto;
      }
      .disclaimer {
        font-size: 11px;
        color: #333;
      }
      p {
        line-height: 1.4;
        text-align: left;
        font-weight: 400;
      }
    </style>
    <div class='content'>
     <article class='disclaimer'>
      <p><slot></slot></p>
     </article>
    </div>
  `;

class Disclaimer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateDisclaimer.content.cloneNode(true));
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('wc-disclaimer', Disclaimer);
