document.addEventListener("DOMContentLoaded", () => {
    // Create and append overlay
    const createOverlay = () => {
        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "-1"
        });
        document.body.appendChild(overlay);
    };

    // Handle friend descriptions
    const handleFriendDescriptions = () => {
        const descriptionContainer = document.querySelector('.friend-description-container');
        const friendName = document.getElementById('friendName');
        const friendDescription = document.getElementById('friendDescription');
        const friendItems = document.querySelectorAll('.friends-list li');
        let currentTimeout;

        // Function to show description
        const showDescription = (name, description) => {
            // Clear any existing timeout
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }

            // Update content
            friendName.textContent = name;
            friendDescription.textContent = description;

            // Show container
            descriptionContainer.classList.add('show');

            // Set timeout to hide after 3 seconds
            currentTimeout = setTimeout(() => {
                descriptionContainer.classList.remove('show');
            }, 3000);
        };

        // Add click event to each friend
        friendItems.forEach(friend => {
            friend.addEventListener('click', () => {
                const name = friend.textContent;
                const description = friend.dataset.description;
                showDescription(name, description);
            });
        });
    };

    // Handle fade-in animations
    const handleFadeIn = () => {
        const elements = document.querySelectorAll(".container > *");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => {
            el.classList.add("fade-in");
            observer.observe(el);
        });
    };

    // Handle link hover animations
    const handleLinkHover = () => {
        const icons = document.querySelectorAll(".link-icon");
        
        icons.forEach(icon => {
            icon.addEventListener("mouseenter", () => {
                icon.style.transform = "scale(1.1)";
            });
            
            icon.addEventListener("mouseleave", () => {
                icon.style.transform = "scale(1)";
            });
        });
    };

    // Initialize all features
    const init = () => {
        createOverlay();
        handleFadeIn();
        handleLinkHover();
        handleFriendDescriptions();
    };

    init();
});
