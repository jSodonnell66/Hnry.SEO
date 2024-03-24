document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected option from the dropdown menu
    var selectedOption = document.getElementById("post-select").value;

    // Redirect to the selected page
    if (selectedOption) {
        window.location.href = selectedOption;
    }
});
