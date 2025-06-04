document.getElementById('carForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const carType = document.getElementById('carType').value;
    const rentalPlace = document.getElementById('rentalPlace').value;
    const returnPlace = document.getElementById('returnPlace').value;
    const rentalDate = document.getElementById('rentalDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const message = document.getElementById('formMessage');

    if (!carType || !rentalPlace || !returnPlace || !rentalDate || !returnDate) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "orange";
    } else {
        message.textContent = "Booking successful!";
        message.style.color = "green";


        this.reset();
    }
});

function changeMainImage(thumbnail) {
    const mainImage = document.getElementById("mainCarImage");
    mainImage.src = thumbnail.src;
}

