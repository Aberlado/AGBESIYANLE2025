document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            
            img.onload = function() {
                const photoContainer = document.getElementById("photoContainer");
                photoContainer.innerHTML = ''; // Clear any previous photo
                
                // Créer un élément img pour la photo de l'utilisateur
                const userPhoto = document.createElement("img");
                userPhoto.src = img.src;

                // Ajuster la photo pour qu'elle s'adapte au cadre
                userPhoto.style.width = "100%";  // Ajuste la taille de l'image
                userPhoto.style.height = "100%"; // Ajuste la taille de l'image
                userPhoto.style.objectFit = "cover";  // Cela permet de couvrir entièrement le cadre sans déformer l'image
                userPhoto.style.objectPosition = "center"; // Centrer l'image dans le cadre
                
                photoContainer.appendChild(userPhoto);
            };
        };
        
        reader.readAsDataURL(file);  // Lecture du fichier image
    }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const visual = document.getElementById("visual");
    const photoContainer = document.getElementById("photoContainer");

    // Vérifier que l'image de base est bien chargée
    if (!visual.complete || !photoContainer.querySelector("img")) {
        alert("L'image ou le visuel n'a pas été chargé correctement.");
        return;
    }

    // Définir la taille du canevas en fonction de l'image de base
    canvas.width = visual.width;
    canvas.height = visual.height;

    // Dessiner le visuel de base sur le canevas
    context.drawImage(visual, 0, 0, canvas.width, canvas.height);

    // Dessiner la photo de l'utilisateur dans le cadre
    const userPhoto = photoContainer.querySelector("img");
    if (userPhoto) {
        const photoX = photoContainer.offsetLeft;
        const photoY = photoContainer.offsetTop;
        const photoWidth = photoContainer.offsetWidth;
        const photoHeight = photoContainer.offsetHeight;

        // Dessiner la photo ajustée dans le cadre
        context.drawImage(userPhoto, photoX, photoY, photoWidth, photoHeight);
    }

    // Télécharger l'image générée
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "visuel_agbesiyanle_2025.png";
    link.click();

    // Afficher le pop-up
    document.getElementById("popup").style.display = "flex";
});

// Fermer le pop-up
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
