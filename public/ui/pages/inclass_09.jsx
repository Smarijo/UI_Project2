function UI09() {
    return (
        <><p>My read of the room was that folks were still working on the in-class activity on Monday.&nbsp;</p>
            <p>So:&nbsp;</p>
            <p>1. Continue working on the last activity: <a title="Javascript In-Class Activity (Monday Sept 19)" href="https://uc.instructure.com/courses/1546040/pages/javascript-in-class-activity-monday-sept-19" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/pages/javascript-in-class-activity-monday-sept-19" data-api-returntype="Page">Javascript In-Class Activity (Monday Sept 19)</a></p>
            <p>To review: the activity last time involved</p>
            <ul>
                <li>adding event listeners to components on your page, write functions that translate these actions into changes on screen.&nbsp; An example would be- clicking a button updates the temperature the user has set, and this should be displayed visually in the interface.&nbsp;&nbsp;</li>
                <li>creating an array of objects that store about how the user opens the fridge.&nbsp; Every time they 'open' the fridge, a new entry would go into the array storing how long the fridge was left open, how the temperature changed (Start temp, ending temp)- in different compartments, whether they removed anything, which shelf registered a change....&nbsp; For now, pretend it is the middle of the day and they have opened the fridge a number of times.&nbsp; How would this array look?&nbsp;</li>
            </ul>
            <p>2. Use array functions to compute some data on this array- such as the average time opened today, or the max time opened.&nbsp; Display this within your page.&nbsp;&nbsp;</p>
            <p>3. Add a clock to your Fridge.&nbsp; Can you have it update every second?&nbsp;</p>
            <p>4. Add an event listener for key presses.&nbsp; When the user presses 'o', print a message to console saying "open fridge".&nbsp; When the user presses 's', print a message to the console saying "simulate a day".&nbsp;&nbsp;</p>
            <p>5. Suppose when someone opened the fridge the user interface would update to show how the temperature in the fridge changed, and update any displayed statistics.&nbsp; To simulate this, imagine there is a new object added to the array, with new statistics that represent the fridge opening.&nbsp; Maybe you need a function to estimate how much the temperature would change, with the fridge open for a particular amount of time?&nbsp; How would the UI update, in response to this event? Can you try to implement this 'open fridge' function.&nbsp; You can hard code the new statistics, so this action would just show a before opening and an after opening.&nbsp;&nbsp;</p>
            <p>6. How would you simulate the fridge running over the course of a day?&nbsp; Discuss with your partner- how would this code work?&nbsp; You can use timers, multiple arrays of data (one array with the data from the mock day and an empty array with how many events you have passed in your simulation).&nbsp; Suppose the simulation will run over the course of 2 minutes.&nbsp;</p>
            <p>&nbsp;</p>
        </>
    )
}

export default UI09