document.getElementById("contactButton").addEventListener("click", function () {
    window.location.href = "mailto:contact@sherylsandberg.com?subject=Contact Request&body=Hello,%0A%0AI would like to get in touch with you regarding...%0A%0AKind regards,%0A[Your name]";
});

document.getElementById("languageSelect").addEventListener("change", function() {
const language = this.value;
if (language === "fr") {
    // Titles
    document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;"><strong>Accueil</strong></a>';
    document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;"><strong>Éducation</strong></a>';
    document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;"><strong>Certificats</strong></a>' ;
    document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;"><strong>Compétances</strong></a>';
    document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;"><strong>Langues</strong></a>';
    document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;"><strong>Expérience</strong></a>';
    document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;"><strong>Projets</strong></a>';

    document.getElementById("educationTitle").textContent = "Éducation";
    document.getElementById("certificatesTitle").textContent = "Certificats";
    document.getElementById("skillsTitle").textContent = "Compétances";
    document.getElementById("languagesTitle").textContent = "Langues";
    document.getElementById("experienceTitle").textContent = "Expérience";
    document.getElementById("projectsTitle").textContent = "Projets";

    // Contact
    document.getElementById("contactForm").innerHTML =
    '<h2 data-translate="contact" id="contactFrm">Formulaire de Contact</h2>'+
    '<form>'+
        '<div class="mb-3">'+
            '<label for="name" class="form-label" data-translate="your_name" id="nameLabel">Votre Nom</label>'+
            '<input type="text" class="form-control" id="name" required></div>'+
        '<div class="mb-3">'+
            '<label for="email" class="form-label" data-translate="your_email" id="emailLabel">Votre Email</label>'+
            '<input type="email" class="form-control" id="email" required></div>'+
        '<div class="mb-3">'+
            '<label for="message" class="form-label" data-translate="your_message" id="messageLabel">Votre Message</label>'+
            '<textarea class="form-control" id="message" rows="4" required></textarea></div>'+
        '<button type="submit" class="btn btn-primary" data-translate="send_message" id="btnMessage">Envoyer le Message</button>'+
    '</form>';


    // select
    document.getElementById("languageSelect").innerHTML =
        '<option value="fr">Français</option>'+
        '<option value="en">Anglais</option>'+
        '<option value="es">Espagnol</option>';

    // Home
    document.getElementById("greeting").textContent = "SALUT!";
    document.getElementById("mainTitle").innerHTML = "<h1>JE SUIS <span>Sheryl Sandberg</span></h1>";
    document.getElementById("subtitle").textContent = "Défenseure du Leadership | Ancienne COO de Meta | Auteure à Succès";
    document.getElementById("description").textContent = "Une cadre d'entreprise, auteure et défenseure de l’autonomisation des femmes. En tant qu’ancienne COO de Meta (Facebook), j’ai travaillé à développer des entreprises à l’échelle mondiale tout en défendant le leadership et l’égalité des sexes. Ma passion est d'aider les femmes à s'affirmer et à atteindre leur plein potentiel.";

    // Btn
    document.getElementById("contactButton").textContent = "Contact";
    document.getElementById("savePdfBtn").textContent = "Enregistrer le CV";

    // footer
    document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Portfolio de Sheryl Sandberg</p>";
    document.getElementById("footer-website").innerHTML = "<p>Site web : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
    document.getElementById("footer-social-media").innerHTML = "<p>Réseaux sociaux : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>"+
            "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>"+
            "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>"+
            "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
    // Cards
    document.getElementById("meta-title").textContent = "Directeur des opérations (COO)";
    document.getElementById("meta-duration").textContent = "Mars 2008 - Sept 2022";
    document.getElementById("google-title").textContent = "VP, Ventes et opérations en ligne mondiales";
    document.getElementById("google-duration").textContent = "Nov 2001 - Mars 2008";
    document.getElementById("treasury-title").textContent = "Chef de cabinet";
    document.getElementById("treasury-duration").textContent = "1996 - 2000";

        
    // Lists
    document.getElementById("educationList").innerHTML = 
        "<li>1987-1991 : Harvard College, Licence en Économie.</li>" +
        "<li>1993-1995 : Harvard Business School, MBA.</li>";
    document.getElementById("certificatesList").innerHTML = 
        '<li>Certification Lean In Leadership - Développement du leadership</li>' +
        '<li>Forbes et Time Magazine - Plusieurs distinctions et prix honorifiques</li>';
    document.getElementById("skillsList").innerHTML = 
        "<li>Stratégie commerciale et leadership.</li>" +
        "<li>Création d'équipes et développement organisationnel.</li>" +
        "<li>Prise de parole en public et défense des intérêts.</li>" +
        "<li>Publicité et monétisation des revenus.</li>";
    document.getElementById("languagesList").innerHTML = 
        '<li>Anglais <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>'+
        '<li>Français <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>'+
        '<li>Espagnol <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
    document.getElementById("projectsList").innerHTML = 
        "<li>Mouvement Lean In : Renforcer l'autonomie des femmes dans le monde.</li>" +
        "<li>Fondation Option B : Prône la résilience et le dépassement de l'adversité.</li>";
    
}else if (language === "es") {
            // Titles
            document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;"><strong>Inicio</a>';
            document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;"><strong>Educación</strong></a>';
            document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;"><strong>Certificados</strong></a>' ;
            document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;"><strong>Habilidades</strong></a>';
            document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;"><strong>Idiomas</strong></a>';
            document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;"><strong>Experiencia</strong></a>';
            document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;"><strong>Proyectos</strong></a>';

    
            document.getElementById("educationTitle").textContent = "Educación";
            document.getElementById("certificatesTitle").textContent = "Certificados";
            document.getElementById("skillsTitle").textContent = "Habilidades";
            document.getElementById("languagesTitle").textContent = "Idiomas";
            document.getElementById("experienceTitle").textContent = "Experiencia";
            document.getElementById("projectsTitle").textContent = "Proyectos";

            // Contact
            document.getElementById("contactForm").innerHTML =
            '<h2 data-translate="contact" id="contactFrm">Formulario de Contacto</h2>'+
            '<form>'+
                '<div class="mb-3">'+
                    '<label for="name" class="form-label" data-translate="your_name" id="nameLabel">Tu Nombre</label>'+
                    '<input type="text" class="form-control" id="name" required></div>'+
                '<div class="mb-3">'+
                    '<label for="email" class="form-label" data-translate="your_email" id="emailLabel">Tu Correo Electrónico</label>'+
                    '<input type="email" class="form-control" id="email" required></div>'+
                '<div class="mb-3">'+
                    '<label for="message" class="form-label" data-translate="your_message" id="messageLabel">Tu Mensaje</label>'+
                    '<textarea class="form-control" id="message" rows="4" required></textarea></div>'+
                '<button type="submit" class="btn btn-primary" data-translate="send_message" id="btnMessage">Enviar Mensaje</button>'+
            '</form>';

            // select
            document.getElementById("languageSelect").innerHTML =
                '<option value="es">Español</option>'+
                '<option value="en">Inglés</option>'+
                '<option value="fr">Francés</option>';
    
            // Home
            document.getElementById("greeting").textContent = "¡HOLA!";
            document.getElementById("mainTitle").innerHTML = "<h1>SOMOS <span>Sheryl Sandberg</span></h1>";
            document.getElementById("subtitle").textContent = "Defensora del Liderazgo | Ex COO de Meta | Autora Bestselling";
            document.getElementById("description").textContent = "Ejecutiva de negocios, autora y defensora del empoderamiento de las mujeres. Como ex COO de Meta (Facebook), trabajé para escalar negocios globales mientras promovía el liderazgo y la igualdad de género. Mi pasión es ayudar a las mujeres a apoyarse y alcanzar su máximo potencial.";
    
            // Btn
            document.getElementById("contactButton").textContent = "Contacto";
            document.getElementById("savePdfBtn").textContent = "Guardar CV";
    
            // Footer
            document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Portafolio de Sheryl Sandberg</p>";
            document.getElementById("footer-website").innerHTML = "<p>Sitio web : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
            document.getElementById("footer-social-media").innerHTML = "<p>Redes sociales : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>" +
                "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>" +
                "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>" +
                "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
            // Cards
            document.getElementById("meta-title").textContent = "Directora de Operaciones (COO)";
            document.getElementById("meta-duration").textContent = "Mar 2008 - Sept 2022";
            document.getElementById("google-title").textContent = "VP, Ventas y operaciones en línea globales";
            document.getElementById("google-duration").textContent = "Nov 2001 - Mar 2008";
            document.getElementById("treasury-title").textContent = "Jefa de gabinete";
            document.getElementById("treasury-duration").textContent = "1996 - 2000";
    
            // Lists
            document.getElementById("educationList").innerHTML =
                "<li>1987-1991 : Harvard College, Licenciatura en Economía.</li>" +
                "<li>1993-1995 : Harvard Business School, MBA.</li>";
            document.getElementById("certificatesList").innerHTML =
                '<li>Certificación Lean In Leadership - Desarrollo de liderazgo</li>' +
                '<li>Forbes y Time Magazine - Varias distinciones y premios honoríficos</li>';
            document.getElementById("skillsList").innerHTML =
                "<li>Estrategia empresarial y liderazgo.</li>" +
                "<li>Creación de equipos y desarrollo organizacional.</li>" +
                "<li>Oratoria y defensa.</li>" +
                "<li>Publicidad y monetización de ingresos.</li>";
            document.getElementById("languagesList").innerHTML =
                '<li>Inglés <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>' +
                '<li>Francés <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>' +
                '<li>Español <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
            document.getElementById("projectsList").innerHTML =
                "<li>Movimiento Lean In: Empoderando a las mujeres en todo el mundo.</li>" +
                "<li>Fundación Option B: Promoviendo la resiliencia y el poder de superar la adversidad.</li>";
}
else{
    // Titles
    document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;"><strong>Home</strong></a>';
    document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;"><strong>Education</strong></a>';
    document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;"><strong>Certificates</strong></a>' ;
    document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;"><strong>Skills</strong></a>';
    document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;"><strong>Languages</strong></a>';
    document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;"><strong>Experience</strong></a>';
    document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;"><strong>Projects</strong></a>';

    document.getElementById("educationTitle").textContent = "Education";
    document.getElementById("certificatesTitle").textContent = "Certificates";
    document.getElementById("skillsTitle").textContent = "Skills";
    document.getElementById("languagesTitle").textContent = "Languages";
    document.getElementById("experienceTitle").textContent = "Experience";
    document.getElementById("projectsTitle").textContent = "Projects";

    // Contact
    document.getElementById("contactForm").innerHTML =
    '<h2 data-translate="contact" id="contactFrm">Contact Form</h2>'+
    '<form>'+
        '<div class="mb-3">'+
            '<label for="name" class="form-label" data-translate="your_name" id="nameLabel">Your Name</label>'+
            '<input type="text" class="form-control" id="name" required></div>'+
        '<div class="mb-3">'+
            '<label for="email" class="form-label" data-translate="your_email" id="emailLabel">Your Email</label>'+
            '<input type="email" class="form-control" id="email" required></div>'+
        '<div class="mb-3">'+
            '<label for="message" class="form-label" data-translate="your_message" id="messageLabel">Your Message</label>'+
            '<textarea class="form-control" id="message" rows="4" required></textarea></div>'+
        '<button type="submit" class="btn btn-primary" data-translate="send_message" id="btnMessage">Send Message</button>'+
    '</form>';

    // select
    document.getElementById("languageSelect").innerHTML =
        '<option value="en">English</option>'+
        '<option value="fr">French</option>'+
        '<option value="es">Spanish</option>';

    // Home
    document.getElementById("greeting").textContent = "HI THERE!";
    document.getElementById("mainTitle").innerHTML = "<h1>I'M <span>Sheryl Sandberg</span></h1>";
    document.getElementById("subtitle").textContent = "Leadership Advocate | Former COO of Meta | Bestselling Author";
    document.getElementById("description").textContent = "A business executive, author, and advocate for women’s empowerment. As the former COO of Meta (Facebook), I’ve worked to scale global businesses while championing leadership and gender equality. My passion lies in helping women lean in and achieve their full potential.";

    // Btn
    document.getElementById("contactButton").textContent = "Contact";
    document.getElementById("savePdfBtn").textContent = "Save Resume";

    // footer
    document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Sheryl Sandberg Portfolio</p>";
    document.getElementById("footer-website").innerHTML = "<p>Website : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
    document.getElementById("footer-social-media").innerHTML = "<p>Social Media : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>"+
            "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>"+
            "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>"+
            "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
    // Cards
    document.getElementById("meta-title").textContent = "Chief Operating Officer";
    document.getElementById("meta-duration").textContent = "Mar 2008 - Sep 2022";
    document.getElementById("google-title").textContent = "VP, Global Online Sales & Ops";
    document.getElementById("google-duration").textContent = "Nov 2001 - Mar 2008";
    document.getElementById("treasury-title").textContent = "Chief of Staff";
    document.getElementById("treasury-duration").textContent = "1996 - 2000";

        
    // Lists
    document.getElementById("educationList").innerHTML = 
        "<li>1987-1991 : Harvard College, Bachelor's degree in Economics.</li>" +
        "<li>1993-1995 : Harvard Business School, MBA.</li>";
    document.getElementById("certificatesList").innerHTML = 
        '<li>Lean In Leadership Certification - Leadership Development</li>' +
        '<li>Forbes and Time Magazine - Numerous accolades and honorary awards</li>';
    document.getElementById("skillsList").innerHTML = 
        "<li>Business Strategy and Leadership.</li>" +
        "<li>Team Building and Organizational Development.</li>" +
        "<li>Public Speaking and Advocacy.</li>" +
        "<li>Advertising and Revenue Monetization.</li>";
    document.getElementById("languagesList").innerHTML = 
        '<li>English <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>'+
        '<li>French <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>'+
        '<li>Spanish <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
    document.getElementById("projectsList").innerHTML = 
        "<li>Lean In Movement: Empowering women globally.</li>" +
        "<li>Option B Foundation: Advocating resilience and overcoming adversity.</li>";
}
});


const toggleDarkMode = () => {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Sauvegarder l'état dans localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
};

// Restaurer l'état du thème au chargement
window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').classList.remove('fa-moon');
        document.getElementById('theme-icon').classList.add('fa-sun');
    }
};


$('#savePdfBtn').on('click', async function() {
    const translations = {
      en: {
        title: "Sheryl Sandberg",
        subtitle: "Leadership Advocate | Former COO of Meta | "+
                  "Bestselling Author",
        education: "Education:",
        educationDetails: [
          "- Harvard College: Bachelor's in Economics (1987-1991)",
          "- Harvard Business School: MBA (1993-1995)"
        ],
        certificates: "Certificates:",
        certificatesDetails: [
          "- Lean In Leadership Certification - Leadership Development",
          "- Forbes and Time Magazine - Numerous accolades and honorary awards"
        ],
        skills: "Skills:",
        skillsDetails: [
          "- Business Strategy and Leadership",
          "- Team Building and Organizational Development",
          "- Public Speaking and Advocacy",
          "- Advertising and Revenue Monetization"
        ],
        languages: "Languages:",
        languagesDetails: [
          "- English (Native)",
          "- French (Intermediate)",
          "- Spanish (Basic)"
        ],
        experience: "Experience:",
        experienceDetails: [
          "- Chief Operating Officer (Mar 2008 - Sep 2022)",
          "- VP, Global Online Sales & Ops (Nov 2001 - Mar 2008)",
          "- Chief of Staff (1996 - 2000)"
        ],
        projects: "Projects:",
        projectsDetails: [
          "- Lean In Movement: Empowering women globally",
          "- Option B Foundation: Advocating resilience and overcoming adversity"
        ]
      },
      fr: {
        title: "Sheryl Sandberg",
        subtitle: "Avocate du Leadership | Ancienne COO de Meta | Auteure à succès",
        education: "Éducation :",
        educationDetails: [
          "- Harvard College : Licence en Économie (1991-1995)",
          "- Harvard Business School : MBA (1995-1997)"
        ],
        certificates: "Certificats :",
        certificatesDetails: [
          "- Certification en Leadership Lean In - Développement du Leadership",
          "- Forbes et Time Magazine - Nombreuses distinctions et prix honorifiques"
        ],
        skills: "Compétences :",
        skillsDetails: [
          "- Stratégie d'entreprise et Leadership",
          "- Développement organisationnel et d'équipe",
          "- Prise de parole en public et Plaidoyer",
          "- Publicité et Monétisation des Revenus"
        ],
        languages: "Langues :",
        languagesDetails: [
          "- Anglais (Natif)",
          "- Français (Intermédiaire)",
          "- Espagnol (De base)"
        ],
        experience: "Expérience :",
        experienceDetails: [
          "- Directrice des opérations (mars 2008 - septembre 2022)",
          "- VP, Ventes et opérations en ligne mondiales (novembre 2001 - mars 2008)",
          "- Chef de cabinet (1996 - 2000)"
        ],
        projects: "Projets :",
        projectsDetails: [
          "- Mouvement Lean In : Autonomiser les femmes à l'échelle mondiale",
          "- Fondation Option B : Plaidoyer pour la résilience et la surmonter l'adversité"
        ]
      },
      es: {
        title: "Sheryl Sandberg",
        subtitle: "Defensora del Liderazgo | Ex COO de Meta | Autora de Bestsellers",
        education: "Educación :",
        educationDetails: [
          "- Harvard College : Licenciatura en Economía (1991-1995)",
          "- Harvard Business School : MBA (1995-1997)"
        ],
        certificates: "Certificados :",
        certificatesDetails: [
          "- Certificación en Liderazgo Lean In - Desarrollo de Liderazgo",
          "- Forbes y Time Magazine - Numerosos reconocimientos y premios honoríficos"
        ],
        skills: "Habilidades :",
        skillsDetails: [
          "- Estrategia empresarial y Liderazgo",
          "- Desarrollo organizacional y de equipos",
          "- Hablar en público y Defensa",
          "- Publicidad y Monetización de Ingresos"
        ],
        languages: "Idiomas :",
        languagesDetails: [
          "- Inglés (Nativo)",
          "- Francés (Intermedio)",
          "- Español (Básico)"
        ],
        experience: "Experiencia :",
        experienceDetails: [
          "- Directora de Operaciones (marzo 2008 - septiembre 2022)",
          "- VP, Ventas y operaciones en línea globales (noviembre 2001 - marzo 2008)",
          "- Jefa de gabinete (1996 - 2000)"
        ],
        projects: "Proyectos :",
        projectsDetails: [
          "- Movimiento Lean In : Empoderando a las mujeres a nivel mundial",
          "- Fundación Option B : Abogando por la resiliencia y superando la adversidad"
        ]
      }
    };

    const selectedLanguage = $('#languageSelect').val();
    const content = translations[selectedLanguage];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    try {
      // Charger l'image en Base64
      const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSXLi62Lf05GubC9nLLbTo9ETzcHPjFsHeg&s'; // URL de l'image
      const imgData = await fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        });
      const maxWidth = 180; 
      const subtitleLines = doc.splitTextToSize(content.subtitle, maxWidth);
      let yPosition = 30;

      // Ajout de l'image dans le PDF
      doc.addImage(imgData, 'JPEG', 10, 10, 40, 40); // Position x=10, y=10, largeur=40, hauteur=40

      // Ajout de texte dans le PDF
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(content.title, 55, 25);

      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text(content.subtitle, 55, 35);

      doc.setFontSize(14);
      doc.text(content.education, 20, 60);
      content.educationDetails.forEach((line, index) => {
        doc.text(line, 20, 70 + index * 10);
      });
      
      doc.text(content.certificates, 20, 90);
      content.certificatesDetails.forEach((line, index) => {
        doc.text(line, 20, 100 + index * 10);
      });
      
      doc.text(content.skills, 20, 120);
      content.skillsDetails.forEach((line, index) => {
        doc.text(line, 20, 130 + index * 10);
      });

      doc.text(content.languages, 20, 170);
      content.languagesDetails.forEach((line, index) => {
        doc.text(line, 20, 180 + index * 10);
      });

      doc.text(content.experience, 20, 210);
      content.experienceDetails.forEach((line, index) => {
        doc.text(line, 20, 220 + index * 10);
      });

      doc.text(content.projects, 20, 250);
      content.projectsDetails.forEach((line, index) => {
        doc.text(line, 20, 260 + index * 10);
      });

      // Sauvegarde du PDF
      doc.save(`${content.title}_Resume_${selectedLanguage}.pdf`);
    } catch (error) {
      console.error("Erreur lors du chargement de l'image ou de la génération du PDF :", error);
      alert("Une erreur s'est produite lors de la génération du PDF. Vérifiez l'URL de l'image.");
    }
  });

