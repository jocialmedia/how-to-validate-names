    document.getElementById("input_full_name").addEventListener("keyup", analyze);

    function analyze() {

        // Get input
        let input = "";
        let original_input = "";
        let number_of_chars = 0;
        let number_of_individual_chars = 0;
        input = this.value;
        original_input = input;

        // Get input trimmed
        input = input.trim();

        // Get whitespace removed
        input = input.replace(/\s/g, '');

        // Get input lowercase
        input = input.toLowerCase();

        // Get input number of characters
        number_of_chars = input.length;

        // Remove duplicates from input by using Set constructor
        input = Array.from(new Set(input));

        number_of_individual_chars = input.length;

        // Order items in array
        function SortArray(x, y) {
            return x.localeCompare(y);
        }
        input = input.sort(SortArray);

        // Output results
        document.getElementById("input").innerHTML = original_input;
        document.getElementById("number_of_chars").innerHTML = number_of_chars;
        document.getElementById("number_of_individual_chars").innerHTML = number_of_individual_chars
        document.getElementById("characters").innerHTML = input;
    }


    fetch('assets/languages.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getTestCases(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function getTestCases(data) {
    let table = document.getElementById("languages");
    let row, cell;

    j = 1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].category === "eu") {
            row = table.insertRow();
            cell = row.insertCell();
            cell.textContent = j++;
            cell = row.insertCell();
            cell.textContent = data[i].language;
            cell = row.insertCell();
            cell.textContent = data[i].alphabet_unicode.length;
            let alphabet = data[i].alphabet_unicode
            cell = row.insertCell();
            for (var y = 0; y < alphabet.length; y++) {
                var obj = alphabet[y];
                let letterElement = document.createElement('span');
                letterElement.className = "letter";
                if (typeof (obj) === "object") {
                    html = "<h2>";
                    code = "";
                    for (key in obj) {
                        html += String.fromCharCode(parseInt(obj[key].replace("U+", ""), 16))
                        code += "( " + obj[key] + ")<br>";
                    }
                    html += "</h2>";

                    letterElement.innerHTML = html + code
                } else {
                    letterElement.innerHTML = "<h2>" + String.fromCharCode(parseInt(obj.replace("U+", ""), 16)) +
                        "</h2> (" + obj + ")";
                }
                cell.appendChild(letterElement);
        }
    }
    }
}
