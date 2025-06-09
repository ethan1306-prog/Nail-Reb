// Module admin simple avec vérification de mot de passe
document.addEventListener('DOMContentLoaded', () => {
    const adminForm = document.getElementById('adminForm');
    const adminPassword = document.getElementById('adminPassword');
    const adminMessage = document.getElementById('adminMessage');

    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = adminPassword.value;
        if (password === 'admin123') {
            adminMessage.classList.remove('hidden');
            alert("Bienvenue dans l'espace admin !");
        } else {
            alert("Mot de passe incorrect.");
        }
    });
});
