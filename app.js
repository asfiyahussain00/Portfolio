
document.getElementById('show-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const moreText = document.getElementById('more-text');
    const showMoreBtn = document.getElementById('show-more-btn');
  
    if (moreText.classList.contains('hidden')) {
      moreText.classList.remove('hidden');
      showMoreBtn.textContent = 'Show Less'; 
    } else {
      moreText.classList.add('hidden'); 
      showMoreBtn.textContent = 'Show More'; 
    }
  });


  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCuMNubWkq_A6ngOV3lmHSIHHCbm8vcGKM",
        authDomain: "data-base-57261.firebaseapp.com",
        projectId: "data-base-57261",
        storageBucket: "data-base-57261.appspot.com",
        messagingSenderId: "837271377905",
        appId: "1:837271377905:web:b9489f75b3c13613b7d650"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Get form element
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Push data to Firebase Realtime Database
        push(ref(database, "contact-messages"), { name, email, message })
            .then(() => {
                alert("Your form has been sent successfully!");
                contactForm.reset(); 
            })
            .catch((error) => {
                alert("Error sending message: " + error.message);
            });
    });