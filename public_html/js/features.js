// Instance the tour
var tour = new Tour({
    steps: [{
            element: "#Firstly",
            title: "Click on Events",
            content: "The drop-down menu will allow you to find participants with a selection of options"
        },
        {
            element: "#Secondly",
            title: "Find participants",
            content: "Find participants using their Name, Email, Event Name, Event Dates or event through partipant group involvement",
        },
        {
            element: "#Lastly",
            title: "Search and Action",
            content: "Once the contact is seen, select the contact(s) and use the drop-down menu to take actions such as exporting participant, deleting participant or event updating multiple participants at once",
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