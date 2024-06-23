const dragonball = {
    render: () => {
        const urlAPI = 'https://dragonball-api.com/api/characters';
        const container = document.querySelector('#dragonball-row');

        fetch(urlAPI)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Verifica si 'items' está definido y es un array
                if (data && data.items && Array.isArray(data.items)) {
                    let contentHTML = '';

                    data.items.forEach(hero => {
                        // Verifica si el héroe tiene una imagen válida
                        if (hero.image && hero.image !== '') {
                            contentHTML += `
                            <div class="col-md-4">
                               <a href="${hero.image}" target="_blank">
                                <img src="${hero.image}" alt="${hero.name}" class="img-thumbnail">
                               </a>
                               <h3 class="title">${hero.name}</h3>
                            </div>`;
                        } else {
                            console.warn(`Imagen no encontrada para ${hero.name}`);
                        }
                    });

                    container.innerHTML = contentHTML;
                } else {
                    throw new Error('Invalid data format: Missing or invalid items array');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }
};

dragonball.render();
