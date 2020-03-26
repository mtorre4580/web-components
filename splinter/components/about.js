const templateAbout = document.createElement('template');

templateAbout.innerHTML = `
    <style>
     .about {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 1px 1px rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.15);
        color: #333;
        display: flex;
        margin: 10px auto;
        max-width: 1184px;
        font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
     }
     .with-image {
        display: flex;
        align-items: center;
     }
     .with-text {
        margin: 25px 60px;
        width: 504px;
     }
     .title {
        font-size: 32px;
        font-weight: 400;
     }
     .text {
        font-size: 16px;
        line-height: 23px;
     }
     .about_image {
        position: relative;
        width: 535px;
        padding: 25px;
     }
    </style>
     <div class='about'>
        <div class='with-image'>
            <img class='about_image' />
        </div>
        <div class='with-text'>
            <h2 class='title'></h2>
            <p class='text'></p>
        </div>
     </div>
`;

class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateAbout.content.cloneNode(true));
    this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('.text').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('.about_image').src = this.getAttribute('img');
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('wc-about', About);
