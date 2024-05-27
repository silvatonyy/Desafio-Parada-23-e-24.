function obterTimeAleatorio() {
    const listaDosTimes = [
        "São Paulo",
        "Santos",
        "Corinthians",
        "Palmeiras",
        "Flamengo",
        "Bahia",
        "Vitoria",
        "Gremio",
        "Internacional",
        "Paraná"
    ];
    
    const indiceAleatorio = Math.floor(Math.random() * listaDosTimes.length);
    return listaDosTimes[indiceAleatorio];
}

const nomeAleatorio = obterTimeAleatorio();
console.log(nomeAleatorio);
