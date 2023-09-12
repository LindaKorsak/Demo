var survey_options = document.getElementById('options');
var add_more_fields = document.getElementById('addmorefields');
var remove_fields = document.getElementById('removefields');

add_more_fields.onclick = function () {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'options[]');
    newField.setAttribute('class', 'options');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Another Field');
    survey_options.appendChild(newField);
}

remove_fields.onclick = function () {
    var input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}