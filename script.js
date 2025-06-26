document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });
    });
  });

  let users = JSON.parse(localStorage.getItem("users")) || [];

  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      name: formData.get(0),
      email: formData.get(1),
      password: formData.get(2),
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully! Please login now.");
    window.location.href = "#login";
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get(0);
    const password = formData.get(1);

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert(`Welcome back, ${user.name}!`);
      window.location.href = "#track";
    } else {
      alert("Invalid credentials!");
    }
  });

  document.getElementById("trackerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {
      date: formData.get(0),
      time: formData.get(1),
      liters: formData.get(2),
      category: formData.get(3),
      notes: formData.get(4),
    };

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));

    alert("Entry saved! 🎉");
    e.target.reset();
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    document.getElementById(targetId).style.display = "block";
  });
});

function navigateToSignup() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        section.classList.remove('active'); 
        if (section.id === 'signup') section.classList.add('active'); 
    });
}

document.getElementById("getStartedButton").addEventListener("click", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.classList.remove("active"); 
        if (section.id === "signup") section.classList.add("active"); 
    });
});
