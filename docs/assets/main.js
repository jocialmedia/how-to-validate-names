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