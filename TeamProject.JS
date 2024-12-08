document.addEventListener("DOMContentLoaded", function() {
    // 모든 카드를 선택
    const cards = document.querySelectorAll(".card");

    // 각 카드에 이벤트 리스너 추가
    cards.forEach((card) => {
        // 마우스 오버 시 애니메이션 효과 추가
        card.addEventListener("mouseenter", () => {
            // 확대 및 그림자 효과
            card.style.transform = "scale(1.1)"; // 카드 확대
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)"; // 그림자 강조
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // 부드러운 전환
        });

        // 마우스가 벗어났을 때 애니메이션 효과 제거
        card.addEventListener("mouseleave", () => {
            // 원래 크기 및 그림자 복귀
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("click", () => {
            const cardText = card.querySelector("h3"); // 카드의 제목(h3) 선택
            if (cardText) {
                cardText.textContent = "로딩 중..."; // 카드 글씨 변경
            }
            const link = card.querySelector("a").getAttribute("href"); // a 태그의 href 값 가져오기
            setTimeout(() => {
                window.location.href = link; // 페이지 이동
            });
        });
    });
});
