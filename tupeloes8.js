//http://localhost:8080/GisProject/MainService?s=C&o=1
const params = new URLSearchParams(document.location.search);
const eleccion = params.get("myForm");
if (eleccion == "suave"){
    document.getElementById('titulo1').innerHTML = "Tu pelo es de BAJA POROSIDAD"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que no absorbe fácilmente los productos, sobre"
    document.getElementById('subtitulo2').innerHTML = "todo los que contienen proteínas."
}
else if(eleccion == "pocoAspero"){
    document.getElementById('titulo1').innerHTML = "Tu pelo es de POROSIDAD MEDIA"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que absorbe bien los productos, pero pierde sus"
    document.getElementById('subtitulo2').innerHTML = "nutrientes con facilidad."

}
else if(eleccion == "Aspero"){
    document.getElementById('titulo1').innerHTML = "Tu pelo es de ALTA POROSIDAD"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que tu pelo absorbe muy bien todos los productos,"
    document.getElementById('subtitulo2').innerHTML = "pero se deshidrata con mucha facilidad."

}