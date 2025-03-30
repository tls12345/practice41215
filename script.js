document.getElementById('getRecommendationBtn').addEventListener('click', function() {
    const movementType = document.getElementById('movementType').value;
    const speed = document.getElementById('speed').value;

    // 사용자 입력을 바탕으로 부품 추천 생성
    const recommendedParts = generatePartsRecommendation(movementType, speed);

    // SweetAlert2로 추천된 부품 표시
    Swal.fire({
        title: '부품 추천 결과',
        text: `추천 부품: ${recommendedParts.join(', ')}`,
        icon: 'info',
        confirmButtonText: '확인',
    });
});

// 부품 추천 생성 함수
function generatePartsRecommendation(movementType, speed) {
    let parts = [];

    // 이동 방식에 따른 부품 추천
    if (movementType === '직선 이동') {
        parts.push('DC 모터', '바퀴', '모터 드라이버');
    } else if (movementType === '회전') {
        parts.push('서보모터', '회전축', '모터 드라이버');
    } else if (movementType === '복잡한 경로') {
        parts.push('스텝 모터', '로봇 팔', '고급 센서');
    }

    // 속도에 따른 부품 추천
    if (speed === '빠른') {
        parts.push('고속 모터', '고출력 배터리');
    } else if (speed === '중간') {
        parts.push('중속 모터', '표준 배터리');
    } else if (speed === '느림') {
        parts.push('저속 모터', '저전력 배터리');
    }

    return parts;
}
