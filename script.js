document.getElementById("downloadBtn").addEventListener("click", function() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const visual = document.getElementById("visual");
    const photoContainer = document.getElementById("photoContainer");

    canvas.width = visual.width;
    canvas.height = visual.height;

    // Dessiner le visuel de base
    context.drawImage(visual, 0, 0, canvas.width, canvas.height);

    // Dessiner la photo de l'utilisateur
    const userPhoto = photoContainer.querySelector("img");
    if (userPhoto) {
        const photoX = photoContainer.offsetLeft;
        const photoY = photoContainer.offsetTop;
        const photoWidth = photoContainer.offsetWidth;
        const photoHeight = photoContainer.offsetHeight;

        context.drawImage(userPhoto, photoX, photoY, photoWidth, photoHeight);
    }

    // Créer un lien pour télécharger l'image générée
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "visuel_agbesiyanle_2025.png";
    link.click();
});
