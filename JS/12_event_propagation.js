// what is event propagation
    // -> how 
    // JavaScript uses Event Propagation to handle how events travel through the Document Object Model
    //  (DOM) when an event occurs and reaches the target element, triggering further
    //  actions based on the event.
    // https://dev.to/anshumanmahato/managing-event-flow-a-deep-dive-into-javascript-event-propagation-2gha#:~:text=Event%20Propagation%20%2D%20movement%20of%20Events,%2D%20Capturing%2C%20Targeting%20and%20Bubbling.

// Q2 what is event bubling 
//   event trigered from bottom to top
// dont not bubble events->focus ,blur\

//Q3-> current.target ->which event has triggerede
    //    event.target ->where the event started

//Q4->what is capturing /Trickling 
  // capturing-> event triggered from top to bottom
//   have to add (capture =true )each event for capturing 

// Q5-> how to stop the capturing/bubling
//    e.stop propagation

// Q5->event delegation?
// 