function cambiarEstilo(estilo) {
    const frase = document.getElementById("frase");

    frase.classList.remove(
        "glass",
        "fire",
        "gradient"
    );

    frase.classList.add(estilo);
}