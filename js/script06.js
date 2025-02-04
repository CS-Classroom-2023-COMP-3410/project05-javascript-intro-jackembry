document.addEventListener("DOMContentLoaded", () => {
    const periodicTable = document.getElementById("periodic-table");
    const searchBar = document.getElementById("search-bar");
    const elementInfo = document.getElementById("element-info");
    const elementName = document.getElementById("element-name");
    const elementSymbol = document.getElementById("element-symbol");
    const elementNumber = document.getElementById("element-number");
    const elementGroup = document.getElementById("element-group");
    const closeInfoButton = document.getElementById("close-info");

    const elements = [
        { "number": 1, "symbol": "H", "name": "Hydrogen", "group": "Nonmetals", "col": 1, "row": 1 },
        { "number": 2, "symbol": "He", "name": "Helium", "group": "Noble Gases", "col": 18, "row": 1 },
        { "number": 3, "symbol": "Li", "name": "Lithium", "group": "Alkali Metals", "col": 1, "row": 2 },
        { "number": 4, "symbol": "Be", "name": "Beryllium", "group": "Alkaline Earth Metals", "col": 2, "row": 2 },
        { "number": 5, "symbol": "B", "name": "Boron", "group": "Metalloids", "col": 13, "row": 2 },
        { "number": 6, "symbol": "C", "name": "Carbon", "group": "Nonmetals", "col": 14, "row": 2 },
        { "number": 7, "symbol": "N", "name": "Nitrogen", "group": "Nonmetals", "col": 15, "row": 2 },
        { "number": 8, "symbol": "O", "name": "Oxygen", "group": "Nonmetals", "col": 16, "row": 2 },
        { "number": 9, "symbol": "F", "name": "Fluorine", "group": "Nonmetals", "col": 17, "row": 2 },
        { "number": 10, "symbol": "Ne", "name": "Neon", "group": "Noble Gases", "col": 18, "row": 2 },
        { "number": 11, "symbol": "Na", "name": "Sodium", "group": "Alkali Metals", "col": 1, "row": 3 },
        { "number": 12, "symbol": "Mg", "name": "Magnesium", "group": "Alkaline Earth Metals", "col": 2, "row": 3 },
        { "number": 13, "symbol": "Al", "name": "Aluminium", "group": "Post-transition Metals", "col": 13, "row": 3 },
        { "number": 14, "symbol": "Si", "name": "Silicon", "group": "Metalloids", "col": 14, "row": 3 },
        { "number": 15, "symbol": "P", "name": "Phosphorus", "group": "Nonmetals", "col": 15, "row": 3 },
        { "number": 16, "symbol": "S", "name": "Sulfur", "group": "Nonmetals", "col": 16, "row": 3 },
        { "number": 17, "symbol": "Cl", "name": "Chlorine", "group": "Nonmetals", "col": 17, "row": 3 },
        { "number": 18, "symbol": "Ar", "name": "Argon", "group": "Noble Gases", "col": 18, "row": 3 },
        { "number": 19, "symbol": "K", "name": "Potassium", "group": "Alkali Metals", "col": 1, "row": 4 },
        { "number": 20, "symbol": "Ca", "name": "Calcium", "group": "Alkaline Earth Metals", "col": 2, "row": 4 },
        { "number": 21, "symbol": "Sc", "name": "Scandium", "group": "Transition Metals", "col": 3, "row": 4 },
        { "number": 22, "symbol": "Ti", "name": "Titanium", "group": "Transition Metals", "col": 4, "row": 4 },
        { "number": 23, "symbol": "V", "name": "Vanadium", "group": "Transition Metals", "col": 5, "row": 4 },
        { "number": 24, "symbol": "Cr", "name": "Chromium", "group": "Transition Metals", "col": 6, "row": 4 },
        { "number": 25, "symbol": "Mn", "name": "Manganese", "group": "Transition Metals", "col": 7, "row": 4 },
        { "number": 26, "symbol": "Fe", "name": "Iron", "group": "Transition Metals", "col": 8, "row": 4 },
        { "number": 27, "symbol": "Co", "name": "Cobalt", "group": "Transition Metals", "col": 9, "row": 4 },
        { "number": 28, "symbol": "Ni", "name": "Nickel", "group": "Transition Metals", "col": 10, "row": 4 },
        { "number": 29, "symbol": "Cu", "name": "Copper", "group": "Transition Metals", "col": 11, "row": 4 },
        { "number": 30, "symbol": "Zn", "name": "Zinc", "group": "Transition Metals", "col": 12, "row": 4 },
        { "number": 31, "symbol": "Ga", "name": "Gallium", "group": "Post-transition Metals", "col": 13, "row": 4 },
        { "number": 32, "symbol": "Ge", "name": "Germanium", "group": "Metalloids", "col": 14, "row": 4 },
        { "number": 33, "symbol": "As", "name": "Arsenic", "group": "Metalloids", "col": 15, "row": 4 },
        { "number": 34, "symbol": "Se", "name": "Selenium", "group": "Nonmetals", "col": 16, "row": 4 },
        { "number": 35, "symbol": "Br", "name": "Bromine", "group": "Nonmetals", "col": 17, "row": 4 },
        { "number": 36, "symbol": "Kr", "name": "Krypton", "group": "Noble Gases", "col": 18, "row": 4 },
        { "number": 37, "symbol": "Rb", "name": "Rubidium", "group": "Alkali Metals", "col": 1, "row": 5 },
        { "number": 38, "symbol": "Sr", "name": "Strontium", "group": "Alkaline Earth Metals", "col": 2, "row": 5 },
        { "number": 39, "symbol": "Y", "name": "Yttrium", "group": "Transition Metals", "col": 3, "row": 5 },
        { "number": 40, "symbol": "Zr", "name": "Zirconium", "group": "Transition Metals", "col": 4, "row": 5 },
        { "number": 41, "symbol": "Nb", "name": "Niobium", "group": "Transition Metals", "col": 5, "row": 5 },
        { "number": 42, "symbol": "Mo", "name": "Molybdenum", "group": "Transition Metals", "col": 6, "row": 5 },
        { "number": 43, "symbol": "Tc", "name": "Technetium", "group": "Transition Metals", "col": 7, "row": 5 },
        { "number": 44, "symbol": "Ru", "name": "Ruthenium", "group": "Transition Metals", "col": 8, "row": 5 },
        { "number": 45, "symbol": "Rh", "name": "Rhodium", "group": "Transition Metals", "col": 9, "row": 5 },
        { "number": 46, "symbol": "Pd", "name": "Palladium", "group": "Transition Metals", "col": 10, "row": 5 },
        { "number": 47, "symbol": "Ag", "name": "Silver", "group": "Transition Metals", "col": 11, "row": 5 },
        { "number": 48, "symbol": "Cd", "name": "Cadmium", "group": "Transition Metals", "col": 12, "row": 5 },
        { "number": 49, "symbol": "In", "name": "Indium", "group": "Post-transition Metals", "col": 13, "row": 5 },
        { "number": 50, "symbol": "Sn", "name": "Tin", "group": "Post-transition Metals", "col": 14, "row": 5 },
        { "number": 51, "symbol": "Sb", "name": "Antimony", "group": "Metalloids", "col": 15, "row": 5 },
        { "number": 52, "symbol": "Te", "name": "Tellurium", "group": "Metalloids", "col": 16, "row": 5 },
        { "number": 53, "symbol": "I", "name": "Iodine", "group": "Nonmetals", "col": 17, "row": 5 },
        { "number": 54, "symbol": "Xe", "name": "Xenon", "group": "Noble Gases", "col": 18, "row": 5 },
        { "number": 55, "symbol": "Cs", "name": "Cesium", "group": "Alkali Metals", "col": 1, "row": 6 },
        { "number": 56, "symbol": "Ba", "name": "Barium", "group": "Alkaline Earth Metals", "col": 2, "row": 6 },
        { "number": 57, "symbol": "La", "name": "Lanthanum", "group": "Lanthanides", "col": 3, "row": 6 },
        { "number": 58, "symbol": "Ce", "name": "Cerium", "group": "Lanthanides", "col": 4, "row": 8 },
        { "number": 59, "symbol": "Pr", "name": "Praseodymium", "group": "Lanthanides", "col": 5, "row": 8 },
        { "number": 60, "symbol": "Nd", "name": "Neodymium", "group": "Lanthanides", "col": 6, "row": 8 },
        { "number": 61, "symbol": "Pm", "name": "Promethium", "group": "Lanthanides", "col": 7, "row": 8 },
        { "number": 62, "symbol": "Sm", "name": "Samarium", "group": "Lanthanides", "col": 8, "row": 8 },
        { "number": 63, "symbol": "Eu", "name": "Europium", "group": "Lanthanides", "col": 9, "row": 8 },
        { "number": 64, "symbol": "Gd", "name": "Gadolinium", "group": "Lanthanides", "col": 10, "row": 8 },
        { "number": 65, "symbol": "Tb", "name": "Terbium", "group": "Lanthanides", "col": 11, "row": 8 },
        { "number": 66, "symbol": "Dy", "name": "Dysprosium", "group": "Lanthanides", "col": 12, "row": 8 },
        { "number": 67, "symbol": "Ho", "name": "Holmium", "group": "Lanthanides", "col": 13, "row": 8 },
        { "number": 68, "symbol": "Er", "name": "Erbium", "group": "Lanthanides", "col": 14, "row": 8 },
        { "number": 69, "symbol": "Tm", "name": "Thulium", "group": "Lanthanides", "col": 15, "row": 8 },
        { "number": 70, "symbol": "Yb", "name": "Ytterbium", "group": "Lanthanides", "col": 16, "row": 8 },
        { "number": 71, "symbol": "Lu", "name": "Lutetium", "group": "Lanthanides", "col": 17, "row": 8 },
        { "number": 72, "symbol": "Hf", "name": "Hafnium", "group": "Transition Metals", "col": 4, "row": 6 },
        { "number": 73, "symbol": "Ta", "name": "Tantalum", "group": "Transition Metals", "col": 5, "row": 6 },
        { "number": 74, "symbol": "W", "name": "Tungsten", "group": "Transition Metals", "col": 6, "row": 6 },
        { "number": 75, "symbol": "Re", "name": "Rhenium", "group": "Transition Metals", "col": 7, "row": 6 },
        { "number": 76, "symbol": "Os", "name": "Osmium", "group": "Transition Metals", "col": 8, "row": 6 },
        { "number": 77, "symbol": "Ir", "name": "Iridium", "group": "Transition Metals", "col": 9, "row": 6 },
        { "number": 78, "symbol": "Pt", "name": "Platinum", "group": "Transition Metals", "col": 10, "row": 6 },
        { "number": 79, "symbol": "Au", "name": "Gold", "group": "Transition Metals", "col": 11, "row": 6 },
        { "number": 80, "symbol": "Hg", "name": "Mercury", "group": "Transition Metals", "col": 12, "row": 6 },
        { "number": 81, "symbol": "Tl", "name": "Thallium", "group": "Post-transition Metals", "col": 13, "row": 6 },
        { "number": 82, "symbol": "Pb", "name": "Lead", "group": "Post-transition Metals", "col": 14, "row": 6 },
        { "number": 83, "symbol": "Bi", "name": "Bismuth", "group": "Post-transition Metals", "col": 15, "row": 6 },
        { "number": 84, "symbol": "Po", "name": "Polonium", "group": "Post-transition Metals", "col": 16, "row": 6 },
        { "number": 85, "symbol": "At", "name": "Astatine", "group": "Post-transition Metals", "col": 17, "row": 6 },
        { "number": 86, "symbol": "Rn", "name": "Radon", "group": "Noble Gases", "col": 18, "row": 6 },
        { "number": 87, "symbol": "Fr", "name": "Francium", "group": "Alkali Metals", "col": 1, "row": 7 },
        { "number": 88, "symbol": "Ra", "name": "Radium", "group": "Alkaline Earth Metals", "col": 2, "row": 7 },
        { "number": 89, "symbol": "Ac", "name": "Actinium", "group": "Actinides", "col": 3, "row": 7 },
        { "number": 90, "symbol": "Th", "name": "Thorium", "group": "Actinides", "col": 4, "row": 9 },
        { "number": 91, "symbol": "Pa", "name": "Protactinium", "group": "Actinides", "col": 5, "row": 9 },
        { "number": 92, "symbol": "U", "name": "Uranium", "group": "Actinides", "col": 6, "row": 9 },
        { "number": 93, "symbol": "Np", "name": "Neptunium", "group": "Actinides", "col": 7, "row": 9 },
        { "number": 94, "symbol": "Pu", "name": "Plutonium", "group": "Actinides", "col": 8, "row": 9 },
        { "number": 95, "symbol": "Am", "name": "Americium", "group": "Actinides", "col": 9, "row": 9 },
        { "number": 96, "symbol": "Cm", "name": "Curium", "group": "Actinides", "col": 10, "row": 9 },
        { "number": 97, "symbol": "Bk", "name": "Berkelium", "group": "Actinides", "col": 11, "row": 9 },
        { "number": 98, "symbol": "Cf", "name": "Californium", "group": "Actinides", "col": 12, "row": 9 },
        { "number": 99, "symbol": "Es", "name": "Einsteinium", "group": "Actinides", "col": 13, "row": 9 },
        { "number": 100, "symbol": "Fm", "name": "Fermium", "group": "Actinides", "col": 14, "row": 9 },
        { "number": 101, "symbol": "Md", "name": "Mendelevium", "group": "Actinides", "col": 15, "row": 9 },
        { "number": 102, "symbol": "No", "name": "Nobelium", "group": "Actinides", "col": 16, "row": 9 },
        { "number": 103, "symbol": "Lr", "name": "Lawrencium", "group": "Actinides", "col": 17, "row": 9 },
        { "number": 104, "symbol": "Rf", "name": "Rutherfordium", "group": "Transition Metals", "col": 4, "row": 7 },
        { "number": 105, "symbol": "Db", "name": "Dubnium", "group": "Transition Metals", "col": 5, "row": 7 },
        { "number": 106, "symbol": "Sg", "name": "Seaborgium", "group": "Transition Metals", "col": 6, "row": 7 },
        { "number": 107, "symbol": "Bh", "name": "Bohrium", "group": "Transition Metals", "col": 7, "row": 7 },
        { "number": 108, "symbol": "Hs", "name": "Hassium", "group": "Transition Metals", "col": 8, "row": 7 },
        { "number": 109, "symbol": "Mt", "name": "Meitnerium", "group": "Unknown", "col": 9, "row": 7 },
        { "number": 110, "symbol": "Ds", "name": "Darmstadtium", "group": "Unknown", "col": 10, "row": 7 },
        { "number": 111, "symbol": "Rg", "name": "Roentgenium", "group": "Unknown", "col": 11, "row": 7 },
        { "number": 112, "symbol": "Cn", "name": "Copernicium", "group": "Unknown", "col": 12, "row": 7 },
        { "number": 113, "symbol": "Nh", "name": "Nihonium", "group": "Unknown", "col": 13, "row": 7 },
        { "number": 114, "symbol": "Fl", "name": "Flerovium", "group": "Unknown", "col": 14, "row": 7 },
        { "number": 115, "symbol": "Mc", "name": "Moscovium", "group": "Unknown", "col": 15, "row": 7 },
        { "number": 116, "symbol": "Lv", "name": "Livermorium", "group": "Unknown", "col": 16, "row": 7 },
        { "number": 117, "symbol": "Ts", "name": "Tennessine", "group": "Unknown", "col": 17, "row": 7 },
        { "number": 118, "symbol": "Og", "name": "Oganesson", "group": "Unknown", "col": 18, "row": 7 }
    ];

    function createPeriodicTable() {
        periodicTable.innerHTML = "";
        elements.forEach(element => {
            const elemDiv = document.createElement("div");
            elemDiv.classList.add("element");
            elemDiv.textContent = element.symbol;
            elemDiv.style.gridColumnStart = element.col;
            elemDiv.style.gridRowStart = element.row;
            elemDiv.dataset.number = element.number;
            elemDiv.dataset.symbol = element.symbol;
            elemDiv.dataset.name = element.name;
            elemDiv.dataset.group = element.group;
            elemDiv.addEventListener("click", () => showElementInfo(element, elemDiv));
            periodicTable.appendChild(elemDiv);
        });
    }

    function showElementInfo(element, elementDiv) {
        document.querySelectorAll(".element").forEach(el => el.classList.remove("selected"));
        document.querySelectorAll(".element").forEach(el => el.classList.remove("group-highlight"));

        elementDiv.classList.add("selected");

        document.querySelectorAll(`.element[data-group='${element.group}']`).forEach(el => {
            el.classList.add("group-highlight");
        });

        elementName.textContent = element.name;
        elementSymbol.textContent = element.symbol;
        elementNumber.textContent = element.number;
        elementGroup.textContent = element.group;
        elementInfo.classList.remove("hidden");
    }

    function searchElement() {
        const query = searchBar.value.toLowerCase();
        
        document.querySelectorAll(".element").forEach(el => {
            const name = el.dataset.name.toLowerCase();
            const symbol = el.dataset.symbol.toLowerCase();
            const number = el.dataset.number.toLowerCase();
    
            if (query === "") {
                el.style.backgroundColor = ""; // Reset to original style when input is empty
            } else if (name.includes(query) || symbol.includes(query) || number.includes(query)) {
                el.style.backgroundColor = "#27ae60"; // Highlight match
            } else {
                el.style.backgroundColor = "#3498db"; // Keep default color
            }
        });
    }

    closeInfoButton.addEventListener("click", () => {
        elementInfo.classList.add("hidden"); // Hide the info panel
    
        // Remove highlighting from all elements
        document.querySelectorAll(".element").forEach(el => {
            el.classList.remove("selected", "group-highlight");
        });
    });
    searchBar.addEventListener("input", searchElement);

    createPeriodicTable();
});