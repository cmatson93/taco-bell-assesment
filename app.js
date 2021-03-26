
function getUsers() {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';

    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => 
        response.json()
    ).then(data => {
        console.log('Success:', data);
        
        //Get section
        const section = document.getElementById('users-section');
        data.forEach(user => {
            let div = document.createElement('div');
            div.className = 'card'
            div.id = user.id;
            //Name
            let name = document.createElement('h3');
            name.textContent = user.name;
            div.appendChild(name);
            // Company
            let company = document.createElement('p');
            company.textContent = user.company.name;
            div.appendChild(company);
            // Company Catchphrase
            let companyCatchphrase = document.createElement('p');
            companyCatchphrase.class = 'catch-phrase';
            companyCatchphrase.textContent = user.company.catchPhrase;
            div.appendChild(companyCatchphrase);
            // Link
            let website = document.createElement('a');
            website.textContent = user.website;
            website.href = `https://www.${user.website}`;
            div.appendChild(website);

            section.appendChild(div);
        })

    }).catch((error) => {
        console.error('Error:', error);
        const section = document.getElementById('users-section');
        let errorMessage = document.createElement('h3');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Oops something went wrong 😢';
        section.appendChild(errorMessage);
    });
}

getUsers();

