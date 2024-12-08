document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logo-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'TeamProject.html'; // 페이지 이동
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    // 각 카드에 클릭 이벤트 리스너 추가
    restaurantCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // 클릭된 카드에서 data-url 속성값을 가져와서 링크로 이동
            const mapUrl = card.getAttribute('data-url');
            window.open(mapUrl, '_blank'); 
        });
    });
});