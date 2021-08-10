class Header extends HTMLElement {
    constructor() {
      super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header id="header">
        <div class="centeredText headerTestSizeForMobile">
            <h1>ThePoultryMan</h1>
            <ul id="navLinks">
                <li><a href="renders.html">Renders</a></li>
                <li>Tea</li>
            </ul>
        </div>
        </header>
        `;
    }
}


customElements.define('universal-header', Header);