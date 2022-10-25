//http://localhost:8080/GisProject/MainService?s=C&o=1
const params = new URLSearchParams(document.location.search);
const nombre = params.get("text");
document.getElementById('nombre').innerHTML = "¿Qué tipo de pelo tienes " + nombre + "?"