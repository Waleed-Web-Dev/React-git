const customRender = function(el, mdiv) {
   /* const domEl = document.createElement(el.type);
    domEl.innerHTML = el.children;
    domEl.setAttribute('href', el.props.href);
    domEl.setAttribute('target', el.props.target)

    mdiv.appendChild(domEl)
    */

    const domEl = document.createElement(el.type)
    domEl.innerHTML = el.children;
    for (const prop in el.props) {
       if(prop === 'children') continue;
       domEl.setAttribute(prop, el.props[prop])
    }
       mdiv.appendChild(domEl)
}





const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me"
}
const mainDiv = document.getElementById("root")


customRender(reactElement, mainDiv)