const templateCarousel = document.createElement('template');

templateCarousel.innerHTML = `
    <style>
        .carousel {
            font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            justify-content: center;
        }
    </style>
    <section class='carousel'>
      <wc-loader></wc-loader>
    </section>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(templateCarousel.content.cloneNode(true));
  }

  async getResults(query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=20`);
    const { results } = await response.json();
    return results;
  }

  async connectedCallback() {
    const query = this.getAttribute('query');
    if (query) {
      const data = await this.getResults(query);
      const items = data.map(item => `<wc-item url='${item.permalink}' title='${item.title}' currency='${item.currency_id}' price='${item.price}' img='${item.thumbnail}'></wc-item>`).join('');
      this.shadowRoot.querySelector('.carousel').innerHTML = items;
    }
  }

  disconnectedCallback() {}

}

customElements.define('wc-carousel', Carousel);
