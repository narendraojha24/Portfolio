const menu=document.querySelector("#menu");
const nav=document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

}

//modal
const projectBox = document.getElementById("projectBox");
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const body = document.body;

// Open modal
projectBox.addEventListener("click", () => {
  projectModal.style.display = "flex";
  body.classList.add("no-scroll"); // Disable background scrolling
});

// Close modal
closeModal.addEventListener("click", () => {
  projectModal.style.display = "none";
  body.classList.remove("no-scroll"); // Enable background scrolling
});

// Close modal when clicking outside content
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.style.display = "none";
    body.classList.remove("no-scroll");
  }
});


//modal 1

const projectBox1 = document.getElementById("projectBox1");
const projectModal1 = document.getElementById("projectModal1");
const closeModal1 = document.getElementById("closeModal1");

// Open modal
projectBox1.addEventListener("click", () => {
  projectModal1.style.display = "flex";
  body.classList.add("no-scroll"); // Disable background scrolling
});

// Close modal
closeModal1.addEventListener("click", () => {
  projectModal1.style.display = "none";
  body.classList.remove("no-scroll"); // Enable background scrolling
});

// Close modal when clicking outside content
projectModal1.addEventListener("click", (e) => {
  if (e.target === projectModal1) {
    projectModal1.style.display = "none";
    body.classList.remove("no-scroll");
  }
});




//modal 2

const projectBox2 = document.getElementById("projectBox2");
const projectModal2 = document.getElementById("projectModal2");
const closeModal2 = document.getElementById("closeModal2");

// Open modal
projectBox2.addEventListener("click", () => {
  projectModal2.style.display = "flex";
  body.classList.add("no-scroll"); // Disable background scrolling
});

// Close modal
closeModal2.addEventListener("click", () => {
  projectModal2.style.display = "none";
  body.classList.remove("no-scroll"); // Enable background scrolling
});

// Close modal when clicking outside content
projectModal2.addEventListener("click", (e) => {
  if (e.target === projectModal2) {
    projectModal2.style.display = "none";
    body.classList.remove("no-scroll");
  }
});





 // Get the WhatsApp icon and tooltip elements
 const whatsappIcon = document.getElementById("whatsappIcon");
 const whatsappTooltip = document.getElementById("whatsappTooltip");
 
 // Toggle tooltip visibility on icon click
 whatsappIcon.addEventListener("click", () => {
   whatsappTooltip.classList.toggle("show");
 });
 
 // Hide tooltip when clicking anywhere else on the page
 document.addEventListener("click", (event) => {
   if (!whatsappIcon.contains(event.target)) {
     whatsappTooltip.classList.remove("show");
   }
 });



 function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Randomize size and position
  const size = Math.random() * 50 + 10; // 10px to 60px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * window.innerWidth}px`;

  // Append to body
  document.body.appendChild(bubble);

  // Remove after animation
  setTimeout(() => {
    bubble.remove();
  }, 10000); // Matches animation duration
}

setInterval(createBubble, 200); // Add bubbles every 200ms