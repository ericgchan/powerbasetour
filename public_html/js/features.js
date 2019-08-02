// Instance the tour
var tour = new Tour({
    steps: [{
            element: "#top",
            title: "How to Mass Edit Participant Statuses for an Event",
            content: 'Click here to access "Events"'
        },

        {
            element: "#top2",
            title: "How to Mass Edit Participant Statuses for an Event",
            content: 'Click on "Manage Events"',
            path: "/page2.html"
        },

        {
            element: "#top3",
            title: "How to Mass Edit Participant Statuses for an Event",
            content: 'Search for your event, click on "Participants" and click on the relevant sub-category',
            path: "/page3.html"
        },


    ],
    debug: true,
    framework: "bootstrap4",
    backdrop: "false",
    storage: false
});

// Initialize the tour
//tour.init();

// Start the tour
tour.start();