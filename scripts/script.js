document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("post-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var selectedOption = document.getElementById("post-select").value;

        if (selectedOption) {
            window.location.href = selectedOption;
        }
    });
});
