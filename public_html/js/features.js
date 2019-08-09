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

        {
            element: "#top4",
            title: "Part 4: How to Mass Edit Participant Statuses",
            content: 'Select the participants you want to make changes to with the checkboxes on the left',
            path: "/page4.html"
        },

        {
            element: "#top5",
            title: "Part 5: How to Mass Edit Participant Statuses",
            content: 'Click on "Actions, then scroll down to "Participant status - change"',
            path: '/page5.html'
        },

        {
            element: "#top6",
            title: "Part 6: How to Mass Edit Participant Statuses",
            content: 'Under "Participant Status", click on each contact to change their status',
            path: '/page6.html'
        },

        {
            element: "#top7",
            title: "Part 7: How to Mass Edit Participant Statuses",
            content: 'Update all relevant Participant statuses',
            path: '/page7.html'
        },

        {
            element: '#bottom7',
            title: "Part 7: How to Mass Edit Participant Statuses",
            content: 'Hit "Update Participant(s)" and you are set!',
            path: '/page7.html'
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