const miPortafolio = {
    perfil: {
        nombre: "Emilio Bodet del Castillo Negrete",
        ubicacion: "Ciudad de México y Lerma de Villada",
        disciplina: "Artista multidisciplinario"
    },
    statement: "Artista multidisciplinario basado en la Ciudad de México y Lerma de Villada. Mi práctica explora la intersección entre la comunicación digital y la producción audiovisual, combinando la formación académica de la licenciatura en Arte y comunicación digitales en la UAM Lerma y una base técnica en producción de música electrónica por SAE Institute (CDMX). <p>Actualmente participando en el Porgrama de Investigación Artística y Cómputo de Enjambre <br>PARVADA</br></p> "
};


console.log("--- DATOS DEL PORTAFOLIO ---");
let llavesPerfil = Object.keys(miPortafolio.perfil);
for (let i = 0; i < llavesPerfil.length; i++) {
    let clave = llavesPerfil[i];
    console.log(clave.toUpperCase() + ": " + miPortafolio.perfil[clave]);
}
console.log("Statement completo:", miPortafolio.statement);
console.log("---------------------------------------");


const aboutBox = document.querySelector(".about-box");
const aboutButton = document.querySelector("#aboutButton");
const mainContent = document.querySelector(".main-content");

if (aboutBox && aboutButton) {
    
    aboutBox.innerHTML = `<p>${miPortafolio.statement}</p>`;

    
    aboutButton.addEventListener("click", (evento) => {
        evento.stopPropagation(); 
        aboutBox.style.display = "block";
    });

    
    document.addEventListener("click", () => {
        aboutBox.style.display = "none";
    });

    
    aboutBox.addEventListener("click", (evento) => {
        evento.stopPropagation();
    });
}