function renderHTML(data) {
    `
    <!-- section containing cards of employees -->
    <section class="cards">

        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>${data.type}</h2>
            <!-- details -->
            <div class="details">
                <p>${data.id}</p>
                <p>${data.description}</p>
                <p>${data.phoneNumber}</p>
            </div>
        </div></section>`


};

module.exports = renderHTML;