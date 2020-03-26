class Pablito extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = '<p style="text-align:center">hola soy pablito, ojo con la API</p>';
    }

    connectedCallback() {}

    disconnectedCallback() {}
}

customElements.define('wc-pablito', Pablito);