// Simple JS to show an alert when user clicks "Sign Up"

const buttons = document.querySelectorAll(".plan-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for choosing a plan!");
  });
});
