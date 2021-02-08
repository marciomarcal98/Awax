function handleSliderClick(click) {
  let number = click;

  if (number == 1) {
    document.getElementById("sliderone").classList.add("slideOne");
    document.getElementById("pointerOne").classList.add("active");
    document.getElementById("pointerTwo").classList.remove("active");
    document.getElementById("pointerThree").classList.remove("active");
    document.getElementById("sliderone").classList.remove("slideTwo");
    document.getElementById("sliderone").classList.remove("slideThree");
  }

  if (number == 2) {
    document.getElementById("sliderone").classList.add("slideTwo");
    document.getElementById("pointerTwo").classList.add("active");
    document.getElementById("pointerOne").classList.remove("active");
    document.getElementById("pointerThree").classList.remove("active");
    document.getElementById("sliderone").classList.remove("slideOne");
    document.getElementById("sliderone").classList.remove("slideThree");
  }

  if (number == 3) {
    document.getElementById("sliderone").classList.add("slideThree");
    document.getElementById("pointerThree").classList.add("active");
    document.getElementById("pointerOne").classList.remove("active");
    document.getElementById("pointerTwo").classList.remove("active");
    document.getElementById("sliderone").classList.remove("slideOne");
    document.getElementById("sliderone").classList.remove("slideTwo");
  }
}