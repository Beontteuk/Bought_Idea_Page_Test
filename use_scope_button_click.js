const get_commercial_available_value = async () => {
    let fetch_return_value = await fetch("http://54.83.101.17:8080/trade/2")
                    .then((response) => response.json());

    const json_result = await fetch_return_value['result']
    const commercial_available_value = await json_result['commercial_available'];

    return commercial_available_value;
}

const get_patent_available_value = async () => {
    let fetch_return_value = await fetch("http://54.83.101.17:8080/trade/1")
                    .then((response) => response.json());

    const json_result = await fetch_return_value['result']
    const patent_available_value = await json_result['patent_available'];

    return patent_available_value;
}

const detail_view_closed = () => {
    const detail_view_inner = document.getElementById("use_scope_detail_wrapper");

    return detail_view_inner === null
}


const add_use_scope_detail = () => {
    const use_scope_detail = document.getElementById("to_add_use_scope");
    use_scope_detail.innerHTML = `
    <div id="use_scope_detail_wrapper">
    <div id="use_scope_detail" class="use_scope_detail_font">
                    <div id="commercial_use">
                        <span id="commercial_use_title">
                            상업적 용도
                        </span>
                        <span id="commercial_use_value">
                            
                        </span>
                    </div>
                    <div id="patent">
                        <span id="patent_title">
                            특허 출원
                        </span>
                        <span id="patent_value">
                            
                        </span>
                    </div>
                </div>
                </div>
    `;

    const can_commercial_use = get_commercial_available_value();
    const can_patent_use = get_patent_available_value();

    const commercial_use_value_span = document.getElementById("commercial_use_value");
    const patent_use_value_span = document.getElementById("patent_value");

    if (can_commercial_use) {
        commercial_use_value_span.innerText = "이용 가능";
    } 
    else {
        commercial_use_value_span.innerText = "불가능";
        commercial_use_value_span.style.color = "#FF3120";
    }

    if (can_patent_use) {
        patent_use_value_span.innerText = "이용 가능";
    }
    else {
        patent_use_value_span.innerText = "불가능";
        patent_use_value_span.style.color = "#FF3120";
    }
}

const delete_use_scope_detail = () => {
    const use_scope_detail = document.getElementById("to_add_use_scope");
    use_scope_detail.innerHTML = "";
}


const use_scope_button_click = () => {    

    if (detail_view_closed()) {
        add_use_scope_detail();
    }
    else {
        delete_use_scope_detail();
    }

}