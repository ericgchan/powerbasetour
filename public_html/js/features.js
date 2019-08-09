// Instance the tour
// API reference: http://bootstraptour.com/api/
var tour = new Tour({
    steps: [{
            element: "#top",
            title: "Part 1:  How to Mass Edit Participant Statuses",
            content: 'Click here to access "Events"',
            path: "/index.html"
        },

        {
            element: "#top2",
            title: "Part 2: How to Mass Edit Participant Statuses",
            content: 'Click on "Manage Events"',
            path: "/page2.html"
        },

        {
            element: "#top3",
            title: "Part 3: How to Mass Edit Participant Statuses",
            content: 'Search for your event, click on "Participants" and click on the relevant sub-category',
            path: "/page3.html"
        },

    ],
    debug: true,
    framework: "bootstrap4",
    backdrop: "false",
    //storage: false  //THIS WILL RESTART THE TOUR ON EVERY PAGE LOAD (No MEMORY)
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();

// Check if the Tour has ended. Reset it so that future Tours will start
if (tour.ended() == true) {
    console.log('tour ended. status variable saved. need to reset it');
    tour.restart();
}
