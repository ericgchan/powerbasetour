// Instance the tour
var tour = new Tour({
    steps: [{
            element: "#top",
            title: "Events",
            content: "On the drop-down menu, click on create Event to create a new event"
        },
        {
            element: "#bottom",
            title: "Fill out the event details on the first page",
            content: "Begin by filling out everything with an asterisk. You could make changes to your event details later.",
        },
        {
            element: "#top",
            title: "Event Location",
            content: "Finally, add the location of the event. Click save & done. Your event is now on the records and you could now add participants",
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