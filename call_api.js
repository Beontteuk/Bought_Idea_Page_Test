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

const call_api = async () => {
    let fetch_return_value = await fetch("http://54.83.101.17:8080/trade/1")
                    .then((response) => response.json());

    const api_result = fetch_return_value['result'];
    
    change_title_text(api_result["title"]);
    change_category_text(api_result['category']);
    change_overview_text(api_result['overview']);
    change_date_text(api_result["created"]);
}