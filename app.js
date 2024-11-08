// Данные автомобилей
    const carData = {
        audi: {
            A4: {
                "B8": {
                    "1.8 TFSI": {
                        "engine": ["1.8 л"],
                        "power": ["160 л.с.", "170 л.с."],
                        "fuel": ["Бензин"]
                    },
                    "2.0 TDI": {
                        "engine": ["2.0 л"],
                        "power": ["140 л.с.", "170 л.с."],
                        "fuel": ["Дизель"]
                    }
                },
                "B9": {
                    "2.0 TFSI": {
                        "engine": ["2.0 л"],
                        "power": ["190 л.с.", "252 л.с."],
                        "fuel": ["Бензин"]
                    }
                }
            },
	    A6: {
                "B10": {
                    "1.8 TFSI": {
                        "engine": ["1.8 л"],
                        "power": ["160 л.с.", "170 л.с."],
                        "fuel": ["Бензин"]
                    },
                    "2.0 TDI": {
                        "engine": ["2.0 л"],
                        "power": ["140 л.с.", "170 л.с."],
                        "fuel": ["Дизель"]
                    }
                },
                "B9": {
                    "2.0 TFSI": {
                        "engine": ["2.0 л"],
                        "power": ["190 л.с.", "252 л.с."],
                        "fuel": ["Бензин"]
                    }
                }
            }
        },
        bmw: {
            "3 Series": {
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
            }
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
