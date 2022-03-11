document.getElementById("input_full_name").addEventListener("keyup", analyze);

function analyze() {

    // Get input
    let input = "";
    let original_input = "";
    let number_of_chars = 0;
    let number_of_individual_chars = 0;
    input = this.value;
    original_input = input;
    console.log("input: " + input);

    // Get input trimmed
    input = input.trim();
    console.log("input trimmed: " + input);

    // Get whitespace removed
    input = input.replace(/\s/g, '');
    console.log("input without whitespace: " + input);

    // Get input lowercase
    input = input.toLowerCase();
    console.log("input lowercase: " + input);

    // Get input number of characters
    number_of_chars = input.length;

    // Remove duplicates from input by using Set constructor
    input = Array.from(new Set(input));
    console.log("input array without duplicates:" + input)

    number_of_individual_chars = input.length;

    // Order items in array
    function SortArray(x, y) {
        return x.localeCompare(y);
    }
    input = input.sort(SortArray);
    console.log("input sorted: " + input)

    // Output results
    document.getElementById("input").innerHTML = original_input;
    document.getElementById("number_of_chars").innerHTML = number_of_chars;
    document.getElementById("number_of_individual_chars").innerHTML = number_of_individual_chars
    document.getElementById("characters").innerHTML = input;

}


fetch('assets/test-data.json')
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
    let table = document.getElementById("test_cases");
    let row, cell;

    for (let i = 1; i < data.length; i++) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.textContent = i;
        cell = row.insertCell();
        cell.textContent = data[i].language;
        cell = row.insertCell();
        cell.textContent = data[i].example_first_name;
        cell = row.insertCell();
        cell.textContent = data[i].example_last_name;
        cell = row.insertCell();
        let elLink = document.createElement('a');
        let href = data[i].info;
        elLink.href = href;
        elLink.innerHTML = 'Info';
        cell.appendChild(elLink);
        cell = row.insertCell();
        cell.textContent = data[i].use_case;
    }
}

$(document).ready(function () {
    setTimeout(function () {
        $('#test_cases').DataTable({
            "paging": false,
            "aaSorting": []
        });
    }, 300);
});