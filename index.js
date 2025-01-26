let isKorean = true; // 현재 언어 상태

function toggleLanguage() {
    if (isKorean) {
        // 영어로 변환
        document.getElementById("tour-title").innerText = "Tourist Attractions";
        document.getElementById("food-title").innerText = "Special Food";
        document.getElementById("activities-title").innerText = "Special Activities";
        document.getElementById("login-btn").innerText = "LOGIN";
        document.getElementById("join-btn").innerText = "JOIN";
        document.getElementById("kor-btn").innerText = "KOR";

        document.getElementById("gyeongju-title").innerText = "GYEONGJU";
        document.getElementById("apec-title").innerText = "APEC GYEONGJU ITEM";
        document.getElementById("apec-description").innerHTML = "It will be a perfect Gyeongju that the world will remember.";

        document.getElementById("cheomseongdae-title").innerHTML = "The Oldest Observatory in the World<br><span>Cheomseongdae</span>";
        document.getElementById("cheomseongdae-txt1").innerText = "National Treasure No. 31";
        document.getElementById("cheomseongdae-txt2").innerText = "Cheomseongdae, built during Queen Seondeok's reign in the Silla era, is located in Gyeongju, Gyeongsangbuk-do. It is the oldest surviving astronomical observatory in Asia and is preserved in its original form without reconstruction.";
        
        document.getElementById("bulguksa-title").innerHTML = "Dream of Unified Silla<br><span>Bulguksa</span>";
        document.getElementById("bulguksa-txt1").innerText = "UNESCO World Heritage";
        document.getElementById("bulguksa-txt2").innerText = "Bulguksa is famous for its perfect composition and beauty. It was once eight times larger during the peak of Silla and Goryeo, and though reduced over time, the current structure was restored during the reign of King Yeongjo of Joseon.";

        document.getElementById("seondeok-title").innerHTML = "First Queen in Korean History<br><span>Queen Seondeok Tomb</span>";
        document.getElementById("seondeok-txt1").innerText = "The 27th King of Silla";
        document.getElementById("seondeok-txt2").innerText = "Queen Seondeok was the first recorded queen in Korean history, reigning as the 27th ruler of Silla. She was the aunt of King Taejong Muyeol and one of the three female rulers of Silla, along with Queen Jindeok and Queen Jinseong.";

        document.getElementById("seokguram-title").innerHTML = "Korea's Representative Grotto Temple<br><span>Seokguram</span>";
        document.getElementById("seokguram-txt1").innerText = "UNESCO World Heritage";
        document.getElementById("seokguram-txt2").innerText = "Seokguram, located on Tohamsan Mountain, is a representative temple of Unified Silla and a symbol of Korean Buddhist architecture. Along with Bulguksa, it is a designated UNESCO World Heritage Site.";

        document.querySelector("a[href='#menu1'] li").innerText = "Cheomseongdae";
        document.querySelector("a[href='#menu2'] li").innerText = "Bulguksa";
        document.querySelector("a[href='#menu3'] li").innerText = "Tomb of Queen Seondeok";
        document.querySelector("a[href='#menu4'] li").innerText = "Seokguram Grotto";
    } else {
        // 한글로 변환
        document.getElementById("tour-title").innerText = "관광 명소";
        document.getElementById("food-title").innerText = "특별한 음식";
        document.getElementById("activities-title").innerText = "특별한 활동";
        document.getElementById("login-btn").innerText = "로그인";
        document.getElementById("join-btn").innerText = "회원가입";
        document.getElementById("kor-btn").innerText = "ENG";

        document.getElementById("gyeongju-title").innerText = "GYEONGJU";
        document.getElementById("apec-title").innerText = "APEC GYEONGJU ITEM";
        document.getElementById("apec-description").innerHTML = "세계가 기억할, <br>완벽한 경주가 됩니다.";

        document.getElementById("cheomseongdae-title").innerHTML = "세계에서 가장 오래된 천문대<br><span>첨성대</span>";
        document.getElementById("cheomseongdae-txt1").innerText = "국보 제31호";
        document.getElementById("cheomseongdae-txt2").innerText = "신라 선덕여왕 때 지어진 첨성대는 아시아에서 가장 오래된 천문대로, 복원되지 않고 원형을 그대로 보존하고 있는 유적입니다.";

        document.getElementById("bulguksa-title").innerHTML = "통일신라의 꿈을 드러내는<br><span>불국사</span>";
        document.getElementById("bulguksa-txt1").innerText = "유네스코 세계유산";
        document.getElementById("bulguksa-txt2").innerText = "불국사는 치밀한 구성과 아름다움으로 유명합니다. 전성기 시절 불국사는 지금의 8배 규모였으며, 현재 모습은 조선 영조 때 복원된 것입니다.";

        document.getElementById("seondeok-title").innerHTML = "한국사 최초의 여왕<br><span>선덕여왕릉</span>";
        document.getElementById("seondeok-txt1").innerText = "신라 제27대 왕";
        document.getElementById("seondeok-txt2").innerText = "선덕여왕은 신라의 제27대 국왕이자 한국사 최초로 기록된 여왕입니다. 신라의 여왕 중 한 명으로 태종 무열왕의 이모이기도 합니다.";

        document.getElementById("seokguram-title").innerHTML = "한국을 대표하는 석굴사원<br><span>석굴암</span>";
        document.getElementById("seokguram-txt1").innerText = "유네스코 세계유산";
        document.getElementById("seokguram-txt2").innerText = "석굴암은 토함산 중턱에 위치한 대표적인 통일신라 석굴사원으로, 불국사와 함께 유네스코 세계유산에 등재된 문화유산입니다.";

        document.querySelector("a[href='#menu1'] li").innerText = "첨성대";
        document.querySelector("a[href='#menu2'] li").innerText = "불국사";
        document.querySelector("a[href='#menu3'] li").innerText = "선덕여왕릉";
        document.querySelector("a[href='#menu4'] li").innerText = "석굴암";

    }
    isKorean = !isKorean;
}