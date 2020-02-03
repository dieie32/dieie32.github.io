$(document).ready(function() {
  $("[id=submit-butt]").click(function() {
    var form = $("#getContact-form-" + $(this).attr("formNumber"));
    var field = [];

    form.find("input[data-validate]").each(function() {
      field.push("input[data-validate]");
      var value = $(this).val(),
        line = $(this).closest(".form_data");

      for (var i = 0; i < field.length; i++) {
        console.log(i);
        if (!value) {
          alert("Заповніть форму будь-ласка!");
        } else {
          $.ajax({
            url: "getcontact.php",
            type: "POST",
            dataType: "html",
            data: form.serialize(),
            success: function(response) {
              result = $.parseJSON(response);
              alert("В найближчому часі з вами зв'яжуться. Дякую!");
            },
            error: function(response) {
              alert("ERROR! " + response);
            }
          });
        }
      }
    });

    return false;
  });
});
