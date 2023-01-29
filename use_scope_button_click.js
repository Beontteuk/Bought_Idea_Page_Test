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
                            이용가능
                        </span>
                    </div>
                    <div id="patent">
                        <span id="patent_title">
                            특허 출원
                        </span>
                        <span id="patent_value">
                            불가능
                        </span>
                    </div>
                </div>
                </div>
    `;
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