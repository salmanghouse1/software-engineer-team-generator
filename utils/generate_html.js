function generateHTML(data) {

    return `<style>* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    
    /* heading and title */
    
    header {
        width: 100%;
        background-color: orangered;
        color: white;
    }
    
    header h1 {
        font-size: 36px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    
    /* container of all the cards */
    
    section {
        padding: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
    }
    
    
    /* card individual styles */
    
    .card {
        width: 200px;
        float: left;
        border: 2px solid black;
    }
    
    .card h2 {
        width: 100%;
        background-color: lightseagreen;
        text-align: center;
    }</style>
    <!-- section containing cards of employees -->
    <section class="cards">

        <!-- A employee card -->
        <div class="card">
            <!-- Job Title -->
            <h2>${data.type}</h2>
            <!-- details -->
            <div class="details">
                <p>ID#:${data.id}</p>
                
                <p>${data.name}</p>
                <p>Description:${data.description}</p>
                <p>Phone Number:${data.phoneNumber}</p>
            </div>
        </div></section>`


};

module.exports = generateHTML;