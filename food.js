document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logo-link').addEventListener('click', function (event) {
        event.preventDefault(); // 기본 링크 동작을 막음
        window.location.href = 'TeamProject.html'; // 페이지 이동
    });
});