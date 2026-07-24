// Base de datos completa según las placas de tu torno (CYPML-93201/D)
const datosTorno = {
    metrica: {
        "0.50 mm (M3 Estándar)":     {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - I", norton: "4 (Reducido)"},
        "0.70 mm (M4 Estándar)":     {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "A - I", norton: "2"},
        "0.80 mm (M5 Estándar)":     {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "A - I", norton: "6"},
        "1.00 mm (M6 a M30 Fino)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - I", norton: "9"},
        "1.25 mm (M8 Estándar)":     {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - I", norton: "4"},
        "1.50 mm (M10 / M24 Fino)":  {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - I", norton: "8"},
        "1.75 mm (M12 Estándar)":    {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - I", norton: "11"},
        "2.00 mm (M14-M16 Fino)":    {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - II", norton: "4"},
        "2.25 mm (Paso Especial)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - II", norton: "2"},
        "2.50 mm (M20 / M22 Est)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - II", norton: "5"},
        "3.00 mm (M24 / M27 Est)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - II", norton: "8"},
        "3.50 mm (M30 Estándar)":    {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - II", norton: "11"},
        "4.00 mm (Pasos Grandes)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - III", norton: "5"},
        "4.50 mm (Pasos Grandes)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - III", norton: "2"},
        "5.00 mm (Pasos Grandes)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - III", norton: "4"},
        "6.00 mm (Pasos Grandes)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - III", norton: "8"},
        "7.00 mm (Pasos Grandes)":   {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "B - III", norton: "11"}
    },
    pulgadas: {
        "8 TPI (1\" UNC / Espárragos)": {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "15"},
        "9 TPI (7/8\" UNC)":            {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "14"},
        "10 TPI (3/4\" UNC)":           {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "13"},
        "11 TPI (5/8\" UNC)":           {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "11"},
        "11 1/2 TPI (Tubería NPT)":     {lira: "Z=82 / Z=69", color: "Azul", hex: "#0000ff", letra: "II", norton: "6"},
        "12 TPI (9/16\" UNC / 1\" UNF)":{lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "8"},
        "13 TPI (1/2\" UNC Estándar)":  {lira: "Z=82 / Z=78", color: "Amarillo", hex: "#ffff00", letra: "II", norton: "6"},
        "14 TPI (7/16\" UNC / 7/8\" UNF)":{lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "II", norton: "6"},
        "16 TPI (3/8\" UNC / 3/4\" UNF)":{lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "15"},
        "18 TPI (5/16\" UNC / 5/8\" UNF)":{lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "14"},
        "19 TPI (Paso Especial Imperial)":{lira: "Z=82 / Z=114", color: "Rojo", hex: "#ff0000", letra: "II", norton: "6"},
        "20 TPI (1/4\" UNC / 1/2\" UNF)":{lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "13"},
        "22 TPI (Paso Especial)":       {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "11"},
        "24 TPI (3/8\" UNF Fino)":      {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "8"},
        "28 TPI (1/4\" UNF Fino)":      {lira: "Z=82 / Z=81", color: "Azul", hex: "#0000ff", letra: "I", norton: "6"}
    }
};

const velocidadesCorte = {
    mecha: { acero_suave: 25, acero_duro: 15, inoxidable: 10, fundicion: 20, aluminio: 60, plastico: 50 },
    fresa: { acero_suave: 30, acero_duro: 18, inoxidable: 12, fundicion: 22, aluminio: 90, plastico: 70 }
};

function cambiarPestaña(evt, tabId) {
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) { contents[i].classList.remove("active"); }
    const buttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < buttons.length; i++) { buttons[i].classList.remove("active"); }
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function actualizarOpcionesRoscas() {
    const tipo = document.getElementById("tipoRosca").value;
    const pasoSelect = document.getElementById("pasoRosca");
    pasoSelect.innerHTML = "";
    Object.keys(datosTorno[tipo]).forEach(opc => {
        let el = document.createElement("option");
        el.textContent = opc; el.value = opc;
        pasoSelect.appendChild(el);
    });
}

function calcularRoscas() {
    const tipo = document.getElementById("tipoRosca").value;
    const paso = document.getElementById("pasoRosca").value;
    const box = document.getElementById("resRoscasBox");
    const config = datosTorno[tipo][paso];
    if(config) {
        document.getElementById("resLira").textContent = config.lira;
        document.getElementById("resColor").textContent = " " + config.color;
        document.getElementById("resLetra").textContent = config.letra;
        document.getElementById("resNorton").textContent = config.norton;
        const dot = document.getElementById("dotColor");
        dot.className = "color-dot"; dot.style.backgroundColor = config.hex;
        box.style.display = "block";
    }
}

function seleccionarHerramienta(tipo) {
    document.getElementById('optMecha').classList.remove('selected');
    document.getElementById('optFresa').classList.remove('selected');
    if (tipo === 'mecha') {
        document.getElementById('optMecha').classList.add('selected');
        document.querySelector('input[value="mecha"]').checked = true;
    } else {
        document.getElementById('optFresa').classList.add('selected');
        document.querySelector('input[value="fresa"]').checked = true;
    }
}

function calcularRPM() {
    const tipoHerramienta = document.querySelector('input[name="herramienta"]:checked').value;
    const material = document.getElementById('materialPieza').value;
    const diametro = parseFloat(document.getElementById('diametroHerramienta').value);
    const box = document.getElementById('resVelocidadesBox');

    if (isNaN(diametro) || diametro <= 0) {
        alert("Introduce un diámetro válido.");
        return;
    }

    const Vc = velocidadesCorte[tipoHerramienta][material];
    let rpm = Math.round((Vc * 1000) / (Math.PI * diametro));

    document.getElementById('resVc').textContent = Vc;
    document.getElementById('resRpm').textContent = rpm + " RPM";

    let avanceAprox = (diametro * 0.02).toFixed(2);
    document.getElementById('consejoAvance').innerHTML = tipoHerramienta === 'mecha' ? 
        `<strong>➡️ Avance estimado:</strong> aprox. <strong>${avanceAprox} mm/rev</strong>.` : 
        `<strong>➡️ Consejo:</strong> Asegura rigidez en la sujeción para evitar flexión.`;
    box.style.display = "block";
}

actualizarOpcionesRoscas();
