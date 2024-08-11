/* Scroll Section (Degerlendirme Kriteri - 9) */
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
    }
};

//Navbar Responsive Toogle Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
        });
    });
}

// Degerlendirme Kriteri - 11
//Our Classes Details
const classDetails = {
    yoga: {
        title: "Why are your Yoga?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.",
        schedule: [
            "Saturday-Sunday: 8:00am - 10:00am",
            "Monday-Tuesday: 10:00am - 12:00pm",
            "Wednesday-Friday: 3:00pm - 6:00pm"
        ],
        image: "/Dökümanlar/Resimler/yoga.jpg"
    },
    group: {
        title: "Why choose Group Classes?",
        description: "Group classes provide a sense of community and motivation. You can enjoy a variety of workouts and stay accountable with friends.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.",
        schedule: [
            "Saturday: 9:00am - 11:00am",
            "Monday-Wednesday: 5:00pm - 7:00pm",
            "Friday: 6:00pm - 8:00pm"
        ],
        image: "/Dökümanlar/Resimler/group.webp"
    },
    solo: {
        title: "Why choose Solo Practice?",
        description: "Solo practice allows you to focus on your personal goals and progress at your own pace. It's a great way to improve specific skills.",
        schedule: [
            "Sunday: 7:00am - 9:00am",
            "Tuesday-Thursday: 10:00am - 12:00pm",
            "Saturday: 2:00pm - 4:00pm"
        ],
        image: "/Dökümanlar/Resimler/solo.jpg"
    },
    stretching: {
        title: "Benefits of Stretching Classes",
        description: "Stretching classes help improve flexibility, reduce muscle tension, and prevent injuries. They are suitable for all fitness levels.",
        schedule: [
            "Monday-Friday: 8:00am - 9:00am",
            "Wednesday: 3:00pm - 4:00pm",
            "Saturday: 11:00am - 12:00pm"
        ],
        image: "/Dökümanlar/Resimler/stret.webp"
    }
};
//Dynamically displays information of the selected class
function showDetails(classType) {
    const details = classDetails[classType];
    const classDescription = document.getElementById("class-description");
    const classImage = document.getElementById("class-image");

    classDescription.innerHTML = `
        <h3>${details.title}</h3>
        <p>${details.description}</p>
        <h4>When comes ${classType.charAt(0).toUpperCase() + classType.slice(1)} Your Time.</h4>
        <ul>
            ${details.schedule.map(time => `<li>${time}</li>`).join('')}
        </ul>
    `;
    classImage.src = details.image;
    classImage.alt = `${classType.charAt(0).toUpperCase() + classType.slice(1)} Class`;
}

// Show Yoga content when page loads
window.onload = function() {
    showDetails('yoga');
};


/* BMI CALCULATOR SECTİON*/
/* Degerlendirme Kriteri - 8 */
function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const arrow = document.getElementById("bmi-arrow");

 
    // The preventDotInput function prevents the entry of "." or "," when these keys are pressed.
    function preventDotInput(event) {
        if (event.key === "." || event.key === ",") {
            event.preventDefault();
        }
    }
   // Check if the input already has 3 or more characters and the pressed key is not "Backspace" or "Delete"
    function restrictToThreeDigits(event) {
        const inputField = event.target;
        if (inputField.value.length >= 3 && event.key !== "Backspace" && event.key !== "Delete") {
            event.preventDefault();
        }
    }

    document.getElementById("height").addEventListener("keypress", preventDotInput);
    document.getElementById("height").addEventListener("keypress", restrictToThreeDigits);
    
    document.getElementById("weight").addEventListener("keypress", preventDotInput);
    document.getElementById("weight").addEventListener("keypress", restrictToThreeDigits);

    // Validate inputs and calculate BMI
    if (height && weight && !isNaN(height) && !isNaN(weight) && height > 2  && weight > 20) {
        const heightInMeters = height / 100; // Convert cm to meters
        const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1); // Calculate BMI
        document.getElementById("bmi-value").innerText = ` ${bmiValue}`;
        
        let position;
        
        if (bmiValue < 18.5) {
            position = "19%";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            position = "34%";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            position = "48%";
        } else if (bmiValue >= 30 && bmiValue <= 34.9) {
            position = "62%";
        } else if (bmiValue >= 35) {
            position = "76%";
        }

        arrow.style.left = position;
        arrow.style.display = "block";
    } 
  
}


document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);
