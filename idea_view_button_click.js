const change_button_text = (button) => {
    if (button.innerText === "아이디어 열람") {
        button.innerText = "아이디어 접기";
    }
    else {
        button.innerText = "아이디어 열람";
    }

    return button.innerText;
}

const close_idea_detail_view = () => {
    const location_to_be_deleted = document.getElementById("idea_details_wrapper");
    location_to_be_deleted.innerHTML = "";
}

const open_idea_detail_view = () => {
    const location_to_be_added = document.getElementById("idea_details_wrapper");
    location_to_be_added.innerHTML = `
    <div id="idea_details" class="font_default_set">
    <div class="semi_title_wrapper">
        <div class="semi_title">
            아이디어
        </div>
    </div>

    <div id="idea_detail_text_wrapper">
        <div id="idea_detail_text" class="font_default_set font_weight_regular font_size_16 font_color_black">
            제가 생각한 아이디어는 바로 
            깨끗하게 잘 씻은 꼬막에 
            간장 양념 대신 와사비 양념을 끼얹는 것입니다. 
            와사비를 좋아하는 분이라면 누구든 맛있게 
            드실 수 있는 아삭 상큼 초록색 맛, 
            오늘 저녁은 꼬막 와사비 무침 어떠실까요? 
            구매해 주셔서 감사합니다.
        </div>
    </div>

    <div id="review_button_wrapper">
        <div id="review_button" class="button_radius_4 font_default_set font_size_16 font_weight_bold font_color_white">
            리뷰 작성
        </div>
    </div>

    <div class="dividing_line">
    </div>
    `;
}

const change_idea_detail_view_state = (changed_button_text) => {
    if (changed_button_text === "아이디어 열람") {
        close_idea_detail_view();
    }
    else {
        open_idea_detail_view();
    }
}

const idea_view_button_click = (button) => {
    const changed_button_text = change_button_text(button);
    change_idea_detail_view_state(changed_button_text);
}