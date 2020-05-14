function openTab(evt, name, headerReplacementText) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them

  tabcontent2 = document.getElementsByClassName("tabcontentactive");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].className = "tabcontent";
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  element = document.getElementById(name);
  element.style.display = "block";
  element.className += "active";
  evt.currentTarget.className += " active";

  inner = document.getElementById("headerText");
  headerText.innerText = headerReplacementText;

  // Get the element with id="defaultOpen" and click on it
}
