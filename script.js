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

                // Ajuster l'image pour qu'elle s'adapte au cadre
                userPhoto.style.position = "absolute";  // Positionner l'image dans le cadre
                userPhoto.style.top = "0";
                userPhoto.style.left = "0";
                userPhoto.style.width = "100%";  // L'image doit occuper toute la largeur du cadre
                userPhoto.style.height = "100%"; // L'image doit occuper toute la hauteur du cadre
                userPhoto.style.objectFit = "cover";  // Permet à l'image de couvrir entièrement le cadre sans déformation
                userPhoto.style.objectPosition = "center"; // Centrer l'image dans le cadre

                // Ajouter la photo au conteneur
                photoContainer.appendChild(userPhoto);
            };
        };
        
        reader.readAsDataURL(file);  // Lecture du fichier image
    }
});
