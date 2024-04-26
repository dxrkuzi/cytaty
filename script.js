const cytaty = [
	{
		cytat: "„Mam wyjazd wtedy”",
		autor: "Oliver"
	},
	{
		cytat: "„Pchaj syzyfku”",
		autor: "NEEXcsgo"
	},
	{
		cytat: "„W to, to ci nie uwierze”",
		autor: "Dariusz B"
	},

	{
		cytat: "„Zuuupaa”",
		autor: "Adrian Nowak Zalno"
	},
	{
		cytat: "„Byc albo nie byc; oto jest pytanie”",
		autor: "Szekspir"
	},
	{
		cytat: "„Co dwa dni maszynka gole glowe”",
		autor: "ReTo"
	},
	{
		cytat: "„Takich dwoch jak nas trzech, to nie ma ani jednego”",
		autor: "ReTo"
	},
	{
		cytat: "„Zona nie niedzwiedz, do lasu nie ucieknie”",
		autor: "Michail Szolochow"
	},
	{
		cytat: "„Moj pies to suka a ma wieksze jaja”",
		autor: "ReTo"
	},
	{
		cytat: "„Lepiej zaliczac sie do niektorych, niz do wszystkich”",
		autor: "Andrzej Sapkowski"
	},
	{
		cytat: "„Smierc jest latwa, prosta, zycie jest trudniejsze”",
		autor: "Meyer"
	},
	{
		cytat: "„Jestes ch#j nie kolega”",
		autor: "Bonus RPK"
	},
	{
		cytat: "„Sranie w banie”",
		autor: "Ktos na pewno"
	},
	{
		cytat: "„Zrob to co moj licznik gdy sie zamknie”",
		autor: "ReTo"
	},
	{
		cytat: "„Lubie jezdzic na rowerze samochodem”",
		autor: "Pawlak"
	},
	{
		cytat: "„Tez kiedys dostalem w morde i mialem zlamana reke”",
		autor: "Bedoes"
	}
];

const cytat = document.getElementById("cytat");
const autor = document.getElementById("autor");
const nowyCytat = document.getElementById("nowy-cytat");
const cytatBox = document.getElementById("cytat-box");
const info = document.getElementById("info");

function generujCytat() {
	const losowyCytat = cytaty[Math.floor(Math.random() * cytaty.length)];
	cytat.textContent = losowyCytat.cytat;
	autor.textContent = losowyCytat.autor;
	info.style.display = 'none';
    cytatBox.classList.remove("show");
	setTimeout(() => {
        cytatBox.classList.add("show");
	}, 500);
}

nowyCytat.addEventListener("click", generujCytat);