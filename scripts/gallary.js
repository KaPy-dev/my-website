// Пример простого JavaScript для галереи
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы галереи
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Добавляем обработчик клика для каждого изображения
    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            alert('Вы кликнули на изображение: ' + image.alt);
        });
    });
    
    console.log('Галерея загружена и готова к работе!');
});
