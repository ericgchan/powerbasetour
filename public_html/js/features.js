// Instance the tour
var tour = new Tour({
    steps: [
        {
            element: "#top",
            title: "Top Title of my step",
            content: "Content of my step"
        },
        {
            element: "#bottom",
            title: "Bottom Title of my step",
            content: "Content of my step",
        },
        {
            element: "#top",
            title: "Third Title of my Step 1, Page 2",
            content: "Content of my step",
            path: "/page2.html"
        }

    ],
    debug: true,
    framework: "bootstrap4",
    backdrop: "true",
    storage: false
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();