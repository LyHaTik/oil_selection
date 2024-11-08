// Данные автомобилей
const carData = {
	"Acura": {
            "MDX": {
                "1 поколение, вкл.рестайлинг (YD1) 2000-2006": ["3.5 4WD (J35A3/J35A5)"],
		"2 поколение, вкл.рестайлинг (YD2) 2006-2013": ["3.7 AWD (J37A1)"],
		"3 поколение, вкл.рестайлинг (YD3) 2013-2021": ["3.5 SH-awd (J35Y4/J35Y5)"]
            },
	    "RDX": {},
	    "TLX": {},
	    "ZDX": {}
        },
        "Audi": {
            "A1 (8X)": {},
	    "A2 (8Z)": {},
	    "A3": {},
	    "A4": {},
	    "A5": {},
	    "A6": {},
	    "A7": {},
	    "A8": {},
	    "Q3": {},
	    "Q5": {},
	    "Q7": {},
	    "TT": {}
        },
        "BMW": {
	    "1 Series": {},
	    "2 Series": {},
	    "3 Series": {},
	    "4 Series": {},
	    "5 Series": {},
	    "6 Series": {},
	    "7 Series": {},
	    "X1": {},
	    "X3": {},
	    "X4": {},
	    "X5": {},
	    "X6": {}
	},
	byd: {
	    "F3": {},
	    "Flyer": {}
	},
	cadillac: {
	    "ATS": {},
	    "BLS": {},
	    "CTS": {},
	    "Escalade": {},
	    "SRX": {}
	},
	chery: {
	    "Amulet": {},
	    "Arrizo": {},
	    "Bonus": {},
	    "CrossEastar B14": {},
	    "Fora": {},
	    "indiS S18D": {},
	    "Kimo A1": {},
	    "M11 (A3)": {},
	    "QQ6 (S21)": {},
	    "Sweet QQ": {},
	    "Tiggo 2 ": {},
	    "Tiggo 3": {},
	    "Tiggo 4": {},
	    "Tiggo 4 Pro": {},
	    "Tiggo 5": {},
	    "Tiggo 7": {},
	    "Tiggo 7 Pro": {},
	    "Tiggo 7 Pro Max": {},
	    "Tiggo 8": {},
	    "Tiggo 8 Pro": {},
	    "Tiggo 8 Pro Max": {},
	    "Tiggo FL": {},
	    "Tiggo T11": {},
	    "Very A13": {}
	},
	chevrolet: {
	    "Aveo": {},
	    "Captiva": {},
	    "Cobalt": {},
	    "Cruze": {},
	    "Epica": {},
	    "Evanda": {},
	    "Lacetti": {},
	    "Lanos": {},
	    "Malibu": {},
	    "Orlando": {}
	},
	chrysler: {
	    "PT Cruiser": {},
	    "Sebring": {},
	    "Voyager": {}
	},
	citroen: {
	    "C-Crosser": {},
	    "C-Elysee": {},
	    "C1": {},
	    "C2": {},
	    "C3": {},
	    "C3 Picasso": {},
	    "C4": {},
	    "C4 Aircross": {},
	    "C4 Picasso": {},
	    "C5": {},
	    "C6": {},
	    "C8": {},
	    "DS3": {},
	    "DS4": {},
	    "DS5": {},
	    "Xsara Picasso": {}
	},
	daewoo: {
	    "Gentra": {},
	    "Lanos": {},
	    "Leganza": {},
	    "Matiz": {},
	    "Nexia": {},
	    "Winstorm": {}
	},
	daf: {
	    "CF65": {},
	    "CF75": {},
	    "CF85": {},
	    "СF86": {},
	    "LF45": {},
	    "LF55": {},
	    "LF56": {},
	    "XF95": {},
	    "XF105": {},
	    "XF106": {}
	},
	datsun: {
	    "mi-DO": {},
	    "on-DO": {}
	},
	exeed: {
	    "LX": {},
	    "TXL": {},
	    "VX": {}
	},
	faw: {
	    "Besturn B50": {},
	    "Oley": {},
	    "V2": {},
	    "V5": {},
	    "Vita": {},
	    "X40": {},
	    "X80": {}
	},
	fiat: {
	    "Albea": {},
	    "Doblo/Doblo Cargo": {},
	    "Grande Punto": {}
	},
	ford: {
	    "B-Max": {},
	    "C-Max": {},
	    "EcoSport": {},
	    "Edge": {},
	    "Escape": {},
	    "Fiesta": {},
	    "Focus": {},
	    "Fusion": {},
	    "Galaxy": {},
	    "Kuga": {}
	},
};

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const generationSelect = document.getElementById('generation');
const modificationSelect = document.getElementById('modification');
const submitButton = document.getElementById('submit');

// Заполняем марки
function populateBrands() {
    brandSelect.innerHTML = '<option value="">Выберите марку</option>';
    Object.keys(carData).forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}

// Проверка выбора
function checkSelection(field, message) {
    if (!field.value) {
        alert(message);
        return false;
    }
    return true;
}

// Заполняем модели
function populateModels() {
    if (!checkSelection(brandSelect, "Сначала выберите марку автомобиля")) return;

    const brand = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Выберите модель</option>';
    generationSelect.innerHTML = '<option value="">Выберите поколение</option>';
    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';

    const models = Object.keys(carData[brand]);
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

// Заполняем поколения
function populateGenerations() {
    if (!checkSelection(brandSelect, "Сначала выберите марку автомобиля")) return;
    if (!checkSelection(modelSelect, "Сначала выберите модель автомобиля")) return;

    const brand = brandSelect.value;
    const model = modelSelect.value;
    generationSelect.innerHTML = '<option value="">Выберите поколение</option>';
    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';

    const generations = Object.keys(carData[brand][model]);
    generations.forEach(gen => {
        const option = document.createElement('option');
        option.value = gen;
        option.textContent = gen;
        generationSelect.appendChild(option);
    });
}

// Заполняем модификации
function populateModifications() {
    if (!checkSelection(brandSelect, "Сначала выберите марку автомобиля")) return;
    if (!checkSelection(modelSelect, "Сначала выберите модель автомобиля")) return;
    if (!checkSelection(generationSelect, "Сначала выберите поколение автомобиля")) return;

    const brand = brandSelect.value;
    const model = modelSelect.value;
    const generation = generationSelect.value;
    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';

    const modifications = carData[brand][model][generation];
    modifications.forEach(mod => {
        const option = document.createElement('option');
        option.value = mod;
        option.textContent = mod;
        modificationSelect.appendChild(option);
    });
}

// Отправляем данные в Telegram
function sendDataToBot() {
    if (!checkSelection(brandSelect, "Сначала выберите марку автомобиля")) return;
    if (!checkSelection(modelSelect, "Сначала выберите модель автомобиля")) return;
    if (!checkSelection(generationSelect, "Сначала выберите поколение автомобиля")) return;
    if (!checkSelection(modificationSelect, "Сначала выберите модификацию автомобиля")) return;

    const selectedData = {
        brand: brandSelect.value,
        model: modelSelect.value,
        generation: generationSelect.value,
        modification: modificationSelect.value,
    };

    // Отправляем данные боту
    Telegram.WebApp.sendData(JSON.stringify(selectedData));
}

// Обработчики событий
brandSelect.addEventListener('change', () => populateModels(brandSelect.value));
modelSelect.addEventListener('change', () => populateGenerations(brandSelect.value, modelSelect.value));
generationSelect.addEventListener('change', () => populateModifications(brandSelect.value, modelSelect.value, generationSelect.value));
submitButton.addEventListener('click', sendDataToBot);

// Инициализация
Telegram.WebApp.ready();
populateBrands();
    
