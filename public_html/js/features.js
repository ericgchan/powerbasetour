// Instance the tour
// API reference: http://bootstraptour.com/api/
var tour = new Tour({
    steps: [{
        element: "#top",
        title: "Part 1: Create an Event",
        content: "On the drop-down menu, click on create Event to create a new event",
        path: "/index.html"
    },
    {
        element: "#bottom",
        title: "Part 2: Fill out the event details on the first page",
        content: "Begin by filling out everything with an asterisk. You could make changes to your event details later",
        path: "/page2.html"
    },
    {
        element: "#top",
        title: "Part 3: Add Event Location",
        content: "Finally, add the location of the event. Click save & done. Your event is now on the records and you could now add participants",
        path: "/page3.html"
    },
    {
        element: "#top",
        title: "Part 4: Register Participant to Event",
        content: "Click on Events & Register Event Participants. Search for contact information and add their attendance to new event created. Click save & next to add the next participant",
        path: "/page4.html"
    },
    {
        element: "#top",
        title: "Part 5: Event is now live!",
        content: "Click Event then dashboard to view you new event listing with all the participants.",
        path: "/page5.html"
    }
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