// Данные автомобилей
    const carData = {
	acura: {
            "MDX": {
                "1 поколение, вкл.рестайлинг (YD1) 2000-2006": {
                    "3.5 4WD (J35A3/J35A5)": {}
                },
		"2 поколение, вкл.рестайлинг (YD2) 2006-2013": {
                    "3.7 AWD (J37A1)": {}
                },
		"3 поколение, вкл.рестайлинг (YD3) 2013-2021": {
                    "3.5 SH-awd (J35Y4/J35Y5)": {}
                },
            },
	    "RDX": {},
	    "TLX": {},
	    "ZDX": {}
        },
        audi: {
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
        bmw: {
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

    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const generationSelect = document.getElementById("generation");
    const modificationSelect = document.getElementById("modification");
    const engineSelect = document.getElementById("engine");
    const powerSelect = document.getElementById("power");
    const fuelSelect = document.getElementById("fuel");

    // Функция для заполнения выпадающего списка
    function populateSelect(select, options) {
        select.innerHTML = '<option value="">Выберите...</option>';
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option;
            opt.text = option;
            select.appendChild(opt);
        });
        select.disabled = false;
    }

    // Обработчик выбора марки
    brandSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        modelSelect.disabled = true;
        generationSelect.disabled = true;
        modificationSelect.disabled = true;
        engineSelect.disabled = true;
        powerSelect.disabled = true;
        fuelSelect.disabled = true;

        if (selectedBrand && carData[selectedBrand]) {
            populateSelect(modelSelect, Object.keys(carData[selectedBrand]));
        }
    });

    // Обработчик выбора модели
    modelSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;

        generationSelect.disabled = true;
        modificationSelect.disabled = true;
        engineSelect.disabled = true;
        powerSelect.disabled = true;
        fuelSelect.disabled = true;

        if (selectedModel && carData[selectedBrand][selectedModel]) {
            populateSelect(generationSelect, Object.keys(carData[selectedBrand][selectedModel]));
        }
    });

    // Обработчик выбора поколения
    generationSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        const selectedGeneration = generationSelect.value;

        modificationSelect.disabled = true;
        engineSelect.disabled = true;
        powerSelect.disabled = true;
        fuelSelect.disabled = true;

        if (selectedGeneration && carData[selectedBrand][selectedModel][selectedGeneration]) {
            populateSelect(modificationSelect, Object.keys(carData[selectedBrand][selectedModel][selectedGeneration]));
        }
    });

    // Обработчик выбора модификации
    modificationSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        const selectedGeneration = generationSelect.value;
        const selectedModification = modificationSelect.value;

        engineSelect.disabled = true;
        powerSelect.disabled = true;
        fuelSelect.disabled = true;

        if (selectedModification && carData[selectedBrand][selectedModel][selectedGeneration][selectedModification]) {
            const data = carData[selectedBrand][selectedModel][selectedGeneration][selectedModification];
            populateSelect(engineSelect, data.engine);
        }
    });

    // Обработчик выбора объема двигателя
    engineSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        const selectedGeneration = generationSelect.value;
        const selectedModification = modificationSelect.value;
        const engineData = carData[selectedBrand][selectedModel][selectedGeneration][selectedModification];

        if (engineData) {
            populateSelect(powerSelect, engineData.power);
        }
    });

    // Обработчик выбора мощности
    powerSelect.addEventListener("change", () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        const selectedGeneration = generationSelect.value;
        const selectedModification = modificationSelect.value;
        const powerData = carData[selectedBrand][selectedModel][selectedGeneration][selectedModification];

        if (powerData) {
            populateSelect(fuelSelect, powerData.fuel);
        }
    });
