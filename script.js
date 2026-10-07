// ===============================
// MIT CAMPUS NAVIGATOR
// ===============================

// Search Function
function searchLocation() {

    const searchBox = document.getElementById("search");
    const searchText = searchBox.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter a location.");
        return;
    }

    if (
        searchText.includes("library") ||
        searchText.includes("book")
    ) {
        alert("📚 Library\n\nLibrary is available on campus.\nClick 'Find Library' for more details.");
    }

    else if (
        searchText.includes("lab") ||
        searchText.includes("laboratory")
    ) {
        alert("🧪 Labs\n\nYou can find the laboratories and classrooms here.\nClick 'Explore Labs' for more details.");
    }

    else if (
        searchText.includes("canteen") ||
        searchText.includes("food")
    ) {
        alert("🍴 Canteen\n\nCanteen and food facilities are available on campus.");
    }

    else if (
        searchText.includes("map") ||
        searchText.includes("campus")
    ) {
        alert("🗺️ Campus Map\n\nCampus map will be available here.");
    }

    else {
        alert("❌ Location not found.\n\nTry searching: Library, Lab, Canteen or Campus Map.");
    }
}


// ===============================
// CARD BUTTONS
// ===============================

const buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".card");
        const title = card.querySelector("h3").innerText;

        if (title.includes("Campus Map")) {

            alert(
                "🗺️ CAMPUS MAP\n\n" +
                "Campus map will be displayed here.\n\n" +
                "Next step: We will add your actual MIT campus map."
            );

        }

        else if (title.includes("Library")) {

            alert(
                "📚 LIBRARY\n\n" +
                "Library\n" +
                "• Location: MIT Campus\n" +
                "• Available for students\n" +
                "• Seat availability will be added soon."
            );

        }

        else if (title.includes("Labs")) {

            alert(
                "🧪 LABS & CLASSROOMS\n\n" +
                "You will be able to find:\n" +
                "• Computer Labs\n" +
                "• Physics Lab\n" +
                "• Chemistry Lab\n" +
                "• Classrooms"
            );

        }

        else if (title.includes("Canteen")) {

            alert(
                "🍴 CANTEEN\n\n" +
                "Campus food and refreshment area.\n\n" +
                "Menu and timings can be added later."
            );
        }

    });

});