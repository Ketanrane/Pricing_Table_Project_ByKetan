// ------------------------------------------
// Enhanced Pricing Table Functionality (JS)
// ------------------------------------------

// Select all buttons and prices
const buttons = document.querySelectorAll(".plan-button");
const prices = document.querySelectorAll(".plan-price");

// Default monthly prices
const monthlyPrices = [11.99, 19.99, 49.99];

// Yearly prices (20% off)
const yearlyPrices = monthlyPrices.map(p => (p * 12 * 0.8).toFixed(2));

// Dynamically create a toggle switch (Monthly / Yearly)
const toggleContainer = document.createElement("div");
toggleContainer.style.textAlign = "center";
toggleContainer.style.margin = "20px 0";
toggleContainer.innerHTML = `
  <label style="font-weight:bold; font-size:18px;">
    <input type="checkbox" id="price-toggle" style="transform:scale(1.3); margin-right:8px;">
    Yearly (Save 20%)
  </label>
`;
document.body.insertBefore(toggleContainer, document.querySelector(".pricing-container"));

// Toggle between monthly and yearly prices
const toggle = document.getElementById("price-toggle");
toggle.addEventListener("change", () => {
  const yearly = toggle.checked;
  prices.forEach((price, i) => {
    price.textContent = yearly
      ? `$${yearlyPrices[i]}/year`
      : `$${monthlyPrices[i]}/month`;
  });
});

// Add interactivity when clicking on a plan
buttons.forEach(button => {
  button.addEventListener("click", e => {
    // Remove highlight from all plans
    document.querySelectorAll(".pricing-plan").forEach(plan => {
      plan.style.border = "none";
      plan.style.boxShadow = "";
      plan.style.transform = "scale(1)";
    });

    // Highlight selected plan
    const plan = e.target.closest(".pricing-plan");
    plan.style.border = "3px solid #ff6600";
    plan.style.boxShadow = "0 0 20px rgba(255,102,0,0.5)";
    plan.style.transform = "scale(1.05)";

    // Alert confirmation
    const planTitle = plan.querySelector(".plan-title").textContent;
    alert(`🎉 You selected the ${planTitle} plan!`);
  });
});

// Soft glow on hover
document.querySelectorAll(".pricing-plan").forEach(plan => {
  plan.addEventListener("mouseenter", () => {
    plan.style.boxShadow = "0 0 25px rgba(255,102,0,0.3)";
  });
  plan.addEventListener("mouseleave", () => {
    if (!plan.style.border.includes("#ff6600")) {
      plan.style.boxShadow = "";
    }
  });
});
