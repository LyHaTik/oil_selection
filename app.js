// Данные автомобилей
    const carData = {
	acura: {
            "MDX": {
                "E90": {
                    "320i": {
                        "engine": ["2.0 л"],
                        "power": ["150 л.с.", "170 л.с."],
                        "fuel": ["Бензин"]
                    },
                    "320d": {
                        "engine": ["2.0 л"],
                        "power": ["163 л.с.", "177 л.с."],
                        "fuel": ["Дизель"]
                    }
                }
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
	}
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
