// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.

// Din kod här

async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
            throw new Error("Något gick fel");
        }
        const data = await response.json();
        //Skapar div
        const div = document.createElement("div");
        div.id = "posts";
        //Displaya data med user id 1
        data
        .filter((obj) => obj.userId == 1)
        .map((obj) => {
            console.log(obj)
            const p = document.createElement("p");
            p.innerText = `Title: ${obj.title}\n\nBody: ${obj.body}`;
            div.appendChild(p);
        });
        document.body.appendChild(div);

    } catch (error) {
        console.error(error);
    }
}

getData();
