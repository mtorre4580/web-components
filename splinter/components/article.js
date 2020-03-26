const templateItem = document.createElement('template');

templateItem.innerHTML = `
    <style>
        .item-carousel {
            background-color: #fff;
            padding: 10px;
            margin: 10px;
            border-radius: 4px;
            text-decoration: none;
            display: block;
        }
        .item-carousel:hover {
            box-shadow: 0 7px 16px 0 rgba(0,0,0,.2), 0 1px 3px 0 rgba(0,0,0,.1);
        }
        .item-carousel h2 {
            color: #333;
            font-weight: 400;
            font-size: 15px;
        }
        .item-carousel p {
            color: #424242;
        }
        .item-carousel img {
            height: 140px;
            text-align: center;
        }
    </style>
    <a class='item-carousel'>
        <h2></h2>
        <p></p>
        <img />
    </a>
`;

class Item extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateItem.content.cloneNode(true));
    this.shadowRoot.querySelector('.item-carousel').href = this.getAttribute('url');
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = `$ ${this.getAttribute('currency')} ${this.getAttribute('price')}`;
    this.shadowRoot.querySelector('img').src = this.getAttribute('img');
    this.shadowRoot.querySelector('img').alt = this.getAttribute('title');
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('wc-item', Item);
