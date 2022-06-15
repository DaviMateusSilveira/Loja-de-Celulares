const route = (event) => {
event = event || window.event;
event.preventDefault();
window.history.pushState({}, "", event.target.href);
handleLocation();
};

const routes = {
"/": "/pages/index.html",
"/index.html": "/pages/index.html",
"/produtos.html": "/pages/produtos.html",
"/sobre.html": "/pages/sobre.html",
"/contato.html": "/pages/contato.html",
"/login.html": "/pages/login.html",
"/registro.html": "/pages/registro.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    tryHandleElements();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();