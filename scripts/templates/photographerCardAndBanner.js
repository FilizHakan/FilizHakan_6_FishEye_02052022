export default class photographerInfo {
    // Add a constructor for the data
    constructor(name, id, city, country, tagline, price, portrait) {
        this.name = name;
        this.id = id;
        this.location = `${city}, ${country}`;
        this.tagline = tagline;
        this.price = price;
        this.picture = `assets/photographers/photographers-id-photos/${portrait}`;
    }   

    // Add article section in index.html body
    renderCard() {
    const profilCard = `
        <article class="profil-card">

            <a class="profil-link" href="photographer.html?id=${this.id}" aria-label="${this.name} - Fisheye">
                <img 
                alt="${this.name}" 
                class="user-picture" 
                src="${this.picture}" />
                <h2 class="profil-card__name">
                    ${this.name}
                </h2>
            </a>
            <div class="thumbnail">
                <p class="thumbnail__location" lang="en">
                    ${this.location}
                </p>
                <p class="thumbnail__tagline">
                    ${this.tagline}
                </p>
                <p class="thumbnail__price">
                    ${this.price}€/jour
                </p>
            </div>
        </article>`;

        // Launch
        return profilCard
    }

    // Add section banner HTML content in photographer.html   
    renderBanner() {
        const bannerHTML = `
        <section class="photographer-banner">
    
            <div class="photographer-banner__headline">
                <h1 class="photographer-banner__name">${this.name}</h1>
                <p class="photographer-banner__location">${this.location}</p>
                <p class="photographer-banner__tagline">${this.tagline}</p>
            </div>
                
                <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
                
                <img 
                class="user-picture photographer-banner__picture" 
                src="./public/photographers/photographers-id-photos/${this.picture}" 
                alt="${this.name}" 
                />
                
        </section>`;
    
        //LAUNCH
        return bannerHTML;
    }
}