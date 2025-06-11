// script.js

const courses = [
  {
    title: "Dropshipping Full Tutorial - Beginner to Pro",
    description: "Complete guide to build and grow your dropshipping business."
  },
  {
    title: "100+ Viral YouTube Memes",
    description: "Ready-to-use memes that can help your content go viral."
  },
  {
    title: "500+ Motivational Reels Bundle",
    description: "Inspire your audience with professionally curated motivational reels."
  },
  {
    title: "Trending AI Reels Bundle",
    description: "Use cutting-edge AI visuals to grow your reels quickly."
  },
  {
    title: "YouTube Thumbnail Editing Pack",
    description: "Create eye-catching thumbnails that increase your click-through rates."
  },
  {
    title: "Video Editing Pack",
    description: "Enhance your content quality with top-tier editing resources."
  },
  {
    title: "2025 Viral YouTube Niches",
    description: "Stay ahead of trends with this expert-curated niche guide."
  },
  {
    title: "Product Research",
    description: "Master the art of finding winning products for any market."
  },
  {
    title: "Facebook Ads Run Full Setup Course",
    description: "Step-by-step guide to mastering Facebook ads."
  },
  {
    title: "Shopify Store Design Professional",
    description: "Learn how to create professional, high-converting Shopify stores."
  }
];

const courseContainer = document.getElementById("courses");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeModal = document.querySelector(".close");

let selectedCourse = "";

document.addEventListener("DOMContentLoaded", () => {
  courses.forEach((course, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <button onclick="openModal(${index})">Buy Now</button>
    `;
    courseContainer.appendChild(card);
  });
});

function openModal(index) {
  selectedCourse = courses[index].title;
  modalTitle.textContent = courses[index].title;
  modalDesc.textContent = courses[index].description;
  modal.classList.remove("hidden");

  const extra = document.querySelector(".dynamic-payment");
  if (extra) extra.remove();
}

closeModal.onclick = () => {
  modal.classList.add("hidden");
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
};

function confirmPayment(method) {
  const existing = document.querySelector(".dynamic-payment");
  if (existing) existing.remove();

  if (method === 'PhonePe') {
    const qr = document.createElement('div');
    qr.className = 'dynamic-payment';
    qr.innerHTML = `
      <p>Scan the QR code using PhonePe to complete your payment:</p>
      <img src="/mnt/data/WhatsApp%20Image%202025-06-11%20at%206.51.10%20PM.jpeg" alt="PhonePe QR Code" style="margin-top:1rem;border-radius:8px;width:100%;max-width:300px;">
    `;
    document.querySelector('.modal-content').appendChild(qr);

  } else if (method === 'Paytm') {
    const qr = document.createElement('div');
    qr.className = 'dynamic-payment';
    qr.innerHTML = `
      <p>Scan the QR code using Paytm to complete your payment:</p>
      <img src="/mnt/data/WhatsApp%20Image%202025-06-11%20at%206.51.10%20PM.jpeg" alt="PhonePe QR Code"
    `;
    document.querySelector('.modal-content').appendChild(qr);

  } else {
    const form = document.createElement('div');
    form.className = 'dynamic-payment';
    form.innerHTML = `
      <p>Enter your ${method} details:</p>
      <input type="text" placeholder="Cardholder Name" style="margin-top:0.5rem;width: 100%; padding: 0.5rem;">
      <input type="text" placeholder="Card Number" style="margin-top:0.5rem;width: 100%; padding: 0.5rem;">
      <input type="text" placeholder="Expiry Date (MM/YY)" style="margin-top:0.5rem;width: 100%; padding: 0.5rem;">
      <input type="text" placeholder="CVV" style="margin-top:0.5rem;width: 100%; padding: 0.5rem;">
      <button style="margin-top:1rem;" onclick="finishCardPayment('${method}')">Submit Payment</button>
    `;
    document.querySelector('.modal-content').appendChild(form);
  }
}

function finishCardPayment(method) {
  alert(`✅ Payment successful for: ${selectedCourse} via ${method}`);
  modal.classList.add("hidden");
}
