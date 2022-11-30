
function scrollToTop() {
    $(window).scrollTop(0)
}
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["femail"].value;
    if (x == "") {
      alert("email must be filled out");
      return false;
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["fnumber"].value;
    if (x == "") {
      alert("number must be filled out");
      return false;
    }
  }