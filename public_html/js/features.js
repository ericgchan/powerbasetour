// Instance the tour
// API reference: http://bootstraptour.com/api/
var tour = new Tour({
    steps: [{
            element: "#top",
            title: "Part 1 Events",
            content: "On the drop-down menu, click on create Event to create a new event"
        },
        {
            element: "#bottom",
            title: "Part 2 Fill out the event details on the first page",
            content: "Begin by filling out everything with an asterisk. You could make changes to your event details later."
        },
        {
            element: "#top",
            title: "Part 3 Event Location",
            content: "Finally, add the location of the event. Click save & done. Your event is now on the records and you could now add participants",
            path: "/page2.html"
        },
        {
            element: "#top",
            title: "Part 4 Title",
            content: "Finally, add the location of the event. Click save & done. Your event is now on the records and you could now add participants",
            path: "/page3.html"
        }
    ],
    debug: true,
    framework: "bootstrap4",
    backdrop: "true",
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

