console.log("欢迎登陆");

function get_from_data_by_class(class_value) {
    var parameters = $(class_value).serialize();
    return parameters
}

function my_request(action_id, form_class, method) {
    x = $.ajax({
        type: method,
        url: $(action_id).attr("action"),
        data: get_from_data_by_class(form_class),
        success(res) {
            console.log(x.responseText)
        },
        error(err) {
            console.log(x.status)
        },
    })

}


function b1_function() {
    my_request("#login_form", ".form_login", "post")
}

$("#b1").click(b1_function)