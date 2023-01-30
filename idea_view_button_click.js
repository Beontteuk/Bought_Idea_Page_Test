const call_api_to_idea_detail = async () => {
    let fetch_return_value = await fetch(get_api_address())
                    .then((response) => response.json());

    const json_result = await fetch_return_value['result']
    const json_description = await json_result['description'];
    console.log(json_description)
    const idea_detail_texts = JSON.parse(json_description);
    console.log(idea_detail_texts)
    return idea_detail_texts.content;
}

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

const open_idea_detail_view = async () => {
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

    const idea_detail_text_arr = await call_api_to_idea_detail();

    const idea_detail_div = document.getElementById("idea_detail_text");

    const idea_detail_text = '';

    idea_detail_text_arr.forEach((value, index, array) => {
        if (value.type == 'text') {
            idea_detail_div.innerHTML += `<div class="idea_detail idea_detail_margin_text">${value.content}</div>`;
        }
        else {
            idea_detail_div.innerHTML += `<img src="${value.content}" class="idea_detail_img idea_detail_margin_img">`;
        }
    });

    //idea_detail_div.innerText = idea_detail_text;
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