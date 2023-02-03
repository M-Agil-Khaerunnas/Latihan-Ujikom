const persegi = document.getElementById("persegi")
const hasilContainer = document.getElementById("hasil")
const sisiInput = document.getElementById("sisi")

const hasilPersegi = JSON.parse(localStorage.getItem("hasil")) || []

const addSisi = (sisi, total) => {
    hasilPersegi.push({
        sisi,
        total
    })

    localStorage.setItem("hasil", JSON.stringify(hasilPersegi))

    return { sisi, total }
}

const createSisiElement = ({ sisi, total }) => {
    const persegiDiv = document.createElement("div")
    const isiSisi = document.createElement("h4")
    const total1 = document.createElement("p")

    isiSisi.innerHTML = "nilai sisi : " + sisi;
    total1.innerHTML = "hasil luas persegi adalah " + total;


    persegiDiv.append(isiSisi, total1);
    hasilContainer.appendChild(persegiDiv);

    hasilContainer.style.display = hasil.length === 0 ? "none" : "flex";
}

hasilContainer.style.display = hasil.length === 0 ? "none" : "flex";

hasilPersegi.forEach(createSisiElement)

persegi.onsubmit = e => {
    e.preventDefault()

    const vsisi = sisiInput.value;
    const total1 = vsisi*2;

    const newPersegi = addSisi(
        vsisi,
        total1
    )

    createSisiElement(newPersegi)

    sisiInput.value = "";
}