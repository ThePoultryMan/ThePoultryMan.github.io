const template = document.createElement('template');
template.innerHTML = `
    <header id="header">
    <div class="centeredText headerTestSizeForMobile">
        <h1>ThePoultryMan</h1>
        <ul id="navLinks">
            <li><a href="renders.html">Renders</a></li>
            <li>Tea</li>
        </ul>
    </div>
    </header>
`

document.body.appendChild(template.content);