const get_api_address = () => {
    const url = location.href;
    
    const query_string = url.split("?")[1];

    var value_dic = {}

    query_string.split("&").forEach(function(value) {
        const temp = value.split("=");
        value_dic[temp[0]] = temp[1];
    });

    return `http://54.83.101.17:8080/trade/bought_idea/${value_dic["idea_id"]}`
}

const change_title_text = (title_text) => {
    document.getElementById("title_text").innerText = title_text;
}

const change_category_text = (category_text) => {
    document.getElementById("category_text").innerText = category_text;
}

const change_overview_text = (overview_text) => {
    document.getElementById("idea_summary_text").innerText = overview_text;
}

const change_date_text = (date_text) => {
    const date_split = date_text.split("-");
    const year = date_split[0];
    const month = date_split[1];
    const day = date_split[2].split("T")[0];
    document.getElementById("date_text").innerText = `${year}. ${month}. ${day}`;
}

const change_profile_text = (nickname, idea_cnt) => {
    document.getElementById("nickname").innerText = nickname;
    document.getElementById("idea_number").innerText = `판매 아이디어 ${idea_cnt}개`
}

const change_profile_img = (profile_img) => {
    document.getElementsByClassName("profile_original_img")[0].src = profile_img;
}

const change_profile = async (user_id) => {
    let fetch_return_value = await fetch(`http://54.83.101.17:8080/userinfo/profile/${user_id}`)
                    .then((response) => response.json());

    const api_result = fetch_return_value['result'][0];

    const nickname = api_result['nickname'];
    const idea_cnt = api_result['idea_cnt'];
    const profile_img = api_result['profile'];

    change_profile_text(nickname, idea_cnt);
    change_profile_img(profile_img);
}

const change_hashtag = (description) => {
    const json = JSON.parse(description);
    const hashtag = json['hashTags'];
    const categories = document.getElementsByClassName("categories")[0];
    let add_html = ``;

    hashtag.forEach(function(value, index) {
        add_html += `
        <span id="category_${index + 1}" class="category_button">
            <div id="category_text_${index + 1}" class="category_text_align font_default_set font_weight_regular font_color_black font_size_16">
                ${value}
            </div>
        </span>
        `
    });

    console.log(add_html);

    categories.innerHTML = add_html;
}

const call_api = async () => {
    let fetch_return_value = await fetch(get_api_address())
                    .then((response) => response.json());

    const api_result = fetch_return_value['result'];
    
    change_title_text(api_result["title"]);
    change_category_text(api_result['category']);
    change_overview_text(api_result['overview']);
    change_date_text(api_result["created"]);
    change_profile(api_result["user_id"]);
    change_hashtag(api_result["description"])
}