$(document).ready(function(){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var img = $('.bs-nike-img');
      var imgPos = img.position().top;
      if (scroll > imgPos - $(window).height() + 200) {
          img.fadeIn(3000);
      }
    });
  });

  function nameValidate(input) {
    if (!/^[a-zA-Z ]+$/.test(input.value)) {
      input.setCustomValidity('Please enter a valid full name in English');
    }
    else {
      input.setCustomValidity('');
    }
    if (input.validity.customError && !input.form.ageErrorDisplayed) {
      console.log(input.validationMessage);
      input.form.ageErrorDisplayed = true;
    }
  };

  function ageValidate(input) {
    if (input.value < 18 || input.value > 120) {
      input.setCustomValidity('Please enter a valid age. Valid age is between 18 - 120');
    }
    else {
      input.setCustomValidity('');
    }
    if (input.validity.customError && !input.form.ageErrorDisplayed) {
      console.log(input.validationMessage);
      input.form.ageErrorDisplayed = true;
    }
  };

  function phoneValidate(input) {
    if (!/^(0|972|\+972)\d{9}$/.test(input.value)) {
      input.setCustomValidity("Error: Invalid phone number - Phone number must contain 9 digits and have a prefix of 0, 972, or +972");
    }
    else {
      input.setCustomValidity('');
    }
    if (input.validity.customError && !input.form.ageErrorDisplayed) {
      console.log(input.validationMessage);
      input.form.ageErrorDisplayed = true;
    }
  };

  function idValidate(input) {
    if (!/^\d{9}$/.test(input.value)) {
      input.setCustomValidity("Error: Invalid ID - ID must be 9 digits only");
    }
    else {
      input.setCustomValidity('');
    }
    if (input.validity.customError && !input.form.ageErrorDisplayed) {
      console.log(input.validationMessage);
      input.form.ageErrorDisplayed = true;
    }
  };

    function buttonMessage() {
      window.alert('This button does not currently lead to any page.\nGenerally, it should lead to the Shoe-info page. Thanks!');
  };
