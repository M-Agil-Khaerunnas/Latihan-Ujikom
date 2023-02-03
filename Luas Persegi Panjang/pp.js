const persegipanjangForm = document.getElementById("persegipanjangForm")
const panjang = document.getElementById("panjang")
const lebar = document.getElementById("lebar")
const tampil = document.getElementById("tampilContainer")

const hasilPersegiPanjang = JSON.parse(localStorage.getItem("persegiPanjang")) || []

const addPersegiPanjang = (panjang, lebar, hasil) => {
    hasilPersegiPanjang.push({
        panjang,
        lebar,
        hasil
    })

    localStorage.setItem("persegiPanjang", JSON.stringify(hasilPersegiPanjang))

    return {panjang, lebar, hasil}
}

const buatPersegiPanjang = ({panjang, lebar, hasil}) => {
    const divPersegiPanjang = document.createElement("div")
    const panjang1 = document.createElement("p")
    const lebar1 = document.createElement("p")
    const hasil1 =document.createElement("h2")

    panjang1.innerHTML = "panjang : " + panjang
    lebar1.innerHTML = "lebar : " + lebar
    hasil1.innerHTML = "luas Persegi Panjang : " + hasil

    divPersegiPanjang.append(panjang1, lebar1, hasil1)
    tampil.appendChild(divPersegiPanjang)
}

hasilPersegiPanjang.forEach(buatPersegiPanjang)

persegipanjangForm.onsubmit = e => {
    e.preventDefault()
    
    const vPanjang = panjang.value
    const vLebar = lebar.value
    const Luas = (vPanjang*vLebar)

    const persegiPanjangBaru = addPersegiPanjang(
        vPanjang,
        vLebar,
        Luas
    )

    buatPersegiPanjang(persegiPanjangBaru)

    panjang.value = ""
    lebar.value = ""
}