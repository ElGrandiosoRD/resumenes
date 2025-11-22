function cargarPDF(nombre) {
    const url = nombre.replace(/ /g, "%20");
    document.getElementById("visorPDF").src = url;
}




