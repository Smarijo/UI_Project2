function UIProj1() {
    return (
        <>
            <p>In this project you will design an interactive user interface for a smart object.&nbsp; You can choose from one of the smart objects we have explored in class:</p>
            <ul>
                <li>Smart shower</li>
                <li>Smart shopping cart</li>
                <li>Smart water bottle</li>
                <li>Smart toilet</li>
                <li>Smart flower pot / garden</li>
            </ul>
            <p>You can stay with the smart object you selected for in-class activities, or you can shift to another.&nbsp;</p>
            <p>We can't fully create these smart objects, but we CAN think about <span style="text-decoration: underline;">the design of the user interface</span> that will connect the user to the various features of these objects to address the needs we identified during our interviews in week 2.&nbsp;&nbsp;</p>
            <h2><strong>Project setup:</strong></h2>
            <p>You will complete this project in several phases, which we have started on in class.</p>
            <p>1. Design (20%):</p>
            <p style="padding-left: 40px;">a. Gathering design requirements, Sketching design alternatives,</p>
            <p style="padding-left: 40px;">b. Sketching design prototypes, Feedback on designs for each 'level' you complete (C, B, A).&nbsp;&nbsp;</p>
            <p>2. Implementation (50%)</p>
            <p>3. Final Documentation (20%)</p>
            <p>4: Presentation (10%)</p>
            <p>In a real UI design scenario, we would do more iterations of designing and evaluation, before coding, but the goal here is to get some experience at multiple stages of the process and to get some experience implementing an interactive user interface.&nbsp;<strong></strong></p>
            <h2><strong>Project Deadlines:&nbsp;</strong></h2>
            <p><span style="text-decoration: underline;"><strong>Sept 26th at 11:59pm:</strong></span><strong>. Design</strong></p>
            <p>Submit 1a (exploring designs) and the 'C-level' UI design prototype with a write up of the feedback.&nbsp;</p>
            <p>*** Edited to add: reflect on how the project is going, and write down what you have accomplished and what you intend to do to say on track to finish.&nbsp;&nbsp;</p>
            <p><span style="text-decoration: line-through;"><strong>Oct 9th at 11:59pm: Code</strong></span></p>
            <p><span style="text-decoration: line-through;">Submit the code for your implementation&nbsp;</span></p>
            <p><span style="text-decoration: line-through;"><strong>Oct 11th at 11:59pm: Documentation</strong></span></p>
            <p><span style="text-decoration: line-through;">Submit the documentation for your project, presented on your public webpage<strong></strong></span></p>
            <p><span style="text-decoration: line-through;"><strong>Oct 12 and 14: </strong></span></p>
            <p><span style="text-decoration: line-through;">Presentations, sign up sheet to follow....&nbsp;</span></p>
            <div><strong>Friday October 14th at 11:59pm</strong>- <strong>Code submission</strong></div>
            <div><strong>Sunday October 16th at 11:59pm</strong>- <strong>Documentation submission&nbsp;</strong></div>
            <div><strong>Presentations via Zoom</strong><strong>&nbsp;Monday 10/17, Wednesday 10/19</strong> (and Monday 10/24 if necessary)</div>
            <p>Reminder: every day late, is a letter grade (10%) off.&nbsp; Turn it in- it'll be ok!&nbsp;</p>
            <h3><strong>Edited to add:&nbsp; Suggested timeline</strong></h3>
            <p>If you want to be on target for completing the project, here is a suggested timeline:</p>
            <p><span style="text-decoration: line-through;">Design 1a + C design prototype: Aim to complete by 9/19</span></p>
            <p><span style="text-decoration: line-through;">C goals:&nbsp; Aim to complete by 9/25</span></p>
            <p><span style="text-decoration: line-through;">B goals: Aim to complete by 10/2</span></p>
            <p><span style="text-decoration: line-through;">A goals: Aim to complete by 10/9</span></p>
            <h2><strong>Collaboration policy:</strong></h2>
            <p><span>This is an <strong><span style="text-decoration: underline;">individual project</span></strong>, which will give everyone experience developing a user interface with html, css and javascript.&nbsp; The material presented in the tutorials will give you a starting point.&nbsp; &nbsp;The code you submit must be your own.&nbsp;</span></p>
            <p><span>However, you are encouraged to ask questions on the Discord channel.&nbsp; You can include code snippets, and ask for help debugging.&nbsp; If you are answering questions, you can also post code snippets or links to useful information.&nbsp; You can also show your code to a classmate to ask for their help.&nbsp; Your peers are a resource, and I am strongly in favor of helping each other, as long as everyone submits their own work.&nbsp;</span></p>
            <h2><strong>Project requirements</strong></h2>
            <p>You will design and implement an interactive UI mock-up of the interface on your smart object. The UI for your smart object in its final form would <em>not</em> be on a computer screen or controlled through a mouse and keyboard.&nbsp; But, we are going to create the visual interface elements, controls (buttons, sliders, input forms...) and visual indicators that will address design requirements for your smart object.&nbsp;</p>
            <h3><strong>Everyone (those completing C-goals, B-goals and A-goals):</strong></h3>
            <ul>
                <li>Design requirements:&nbsp; We started to develop our design requirements in class- in your teams and through interviews. You will elaborate on these and document it on your webpage.&nbsp; Some of the design requirements you captured were concerned with physical aspects of your smart object (Eg. wheels on shopping cart get stuck).&nbsp; We are going to focus on a visual user interface that enables users to control the object or view data it is capturing through its sensors (Eg. visual indicator of how well the wheels are turning.&nbsp; button to reset a locked wheel....) or suggestions provided by smart functions.&nbsp;<br />
                    <ul>
                        <li>Write down the assumptions you are making about your smart object (eg. it measures the water level and temperature, it tracks how much water someone drinks through a sensor in the opening....)</li>
                        <li>Create a clearly written list of design requirements for the user interface.&nbsp; Use the design goals your team generated in class based on in class interviews as a starting point.&nbsp; These can be design requirements you address in your implementation, or ones that could only be realized through a longer design process (which you can label as 'future goals).&nbsp;</li>
                        <li>Add to the list of design requirements.&nbsp; Find 3 people (friends, family) outside of class to interview about your smart object.&nbsp; List the interview questions you posed.&nbsp; Summarize the responses.&nbsp;</li>
                    </ul>
                </li>
                <li>Sketching design alternatives
                    <ul>
                        <li>Choose 3 interesting design challenges to explore through the 10-plus-10 method.&nbsp;
                            <ul>
                                <li>For instance, if I were developing a microwave+toaster oven combo device, my design challenges might be- user wants to figure out how long to cook something for and in what mode, user wants to be able to quickly heat up foods they repeatedly heat up, user wants to avoid over or under cooking their food.&nbsp;</li>
                                <li><strong>**** UPDATE</strong>: See my announcement about this design alternatives sketching activity.&nbsp; Instead of sketching 10-plus-10 sketches, do 10-plus-5 MINUTES.&nbsp; Link to announcement here: <a title="Design alternatives sketching: aim for 15 minutes per design challenge " href="https://uc.instructure.com/courses/1546040/discussion_topics/7755386" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/discussion_topics/7755386" data-api-returntype="Discussion">Design alternatives sketching: aim for 15 minutes per design challenge </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <h3><strong>C-goals:&nbsp; &nbsp;</strong></h3>
            <p><span>For the C-goals you will create a basic UI for your smart object, within a single view and using simple controls and visual elements.&nbsp; The focus here is on addressing a subset of the design requirements through basic features to input simple settings for the smart object, and to view simple status data- which may be static.&nbsp;</span></p>
            <ul>
                <li><span>To enable basic use of your smart object, create a list of the controls you are including in this UI and the indicators you want display, and how these connect to the design goals you captured.&nbsp;&nbsp;</span></li>
                <li><span>Create prototype sketches of this interface BEFORE you implement it.&nbsp;&nbsp;</span>
                    <ul>
                        <li><span>Include these sketches in your documentation</span></li>
                    </ul>
                </li>
                <li><span>Show your prototype sketches to 3 people (friends, family members, classmates).&nbsp; Record the feedback.&nbsp; </span>
                    <ul>
                        <li><span>You don't need to follow an evaluation methodology here, as we have not yet covered this in class, but get some feedback.&nbsp;&nbsp;</span></li>
                    </ul>
                </li>
                <li><span>Implement this UI using html, css and javascript, and serve your webpage using localhost (details to follow).&nbsp; Test your page in the Chrome browser, which is what I will use when I run and test your code.&nbsp; </span>
                    <ul>
                        <li><span>Elements should be clearly laid out, features should be discoverable, and you should provide feedback on user actions.&nbsp; &nbsp;</span></li>
                    </ul>
                </li>
                <li><span>Your interface for the smart object should have fixed dimensions (non-resizing, non-responsive layout) with size and aspect ratio that is appropriate for your object.&nbsp; </span>
                    <ul>
                        <li><span>For instance, the smart water bottle could have a front and back UI, in two sections on your page, with an appropriate aspect ratio for a water bottle (eg. tall and narrow, or wide if it wraps continuously around the display).&nbsp; &nbsp;Clearly indicate where the boundaries on UI for the smart object- in one or several regions.&nbsp;&nbsp;</span></li>
                    </ul>
                </li>
                <li><span>Outside of the region for your smart object UI, include a title for the project, your name and</span><span> a link to your project write up.</span></li>
                <li><span>Outside of the region for your smart object UI, include a small graphic to indicate where this UI would reside on the physical smart object.</span></li>
                <li>Within the fixed area for your smart object UI, implement the targeted goals, based on your design prototype.&nbsp; Remember- the goal is to enable users to control the smart object with basic settings<span style="color: var(--ic-brand-font-color-dark); font-family: inherit; font-size: 1rem;"> and view a snapshot of the information your smart object may collect.&nbsp; Elements should <span style="text-decoration: underline;">&nbsp;effective use of visual design principles</span>, and <span style="text-decoration: underline;">appropriate feedback for interactions</span>. &nbsp;</span><strong style="color: var(--ic-brand-font-color-dark); font-family: inherit; font-size: 1rem;"></strong>
                    <ul>
                        <li><span style="color: var(--ic-brand-font-color-dark); font-family: inherit; font-size: 1rem;">For example, if this were a microwave/toaster oven project (as described above), my UI for a C-level implement may include : </span>
                            <ul>
                                <li>Controls: ability to set a timer,&nbsp;ability to select heating mode (e.g. bake / broil / toast / bagel / pizza / convection bake), ability to start the oven&nbsp;</li>
                                <li>Display: display the temperature, time and heating mode the user has set; display the current temperature inside the oven (non-updating); display the number of times the user has run the oven that day- increments by one when they start the oven</li>
                                <li>Design choices: Layout of elements allows the user to see the food inside</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <h3><strong>B-goals: all of the C goals, plus:&nbsp;</strong></h3>
            <p>Pick one of the following design directions.&nbsp; Choose one that interests you, or that is a good fit for your smart object.&nbsp;&nbsp;</p>
            <p>For the one you choose:&nbsp; UPDATE: use sketching appropriately to think through your designs.&nbsp; Either sketching novel user interface views you are adding, or sketching how your UI will update on events or simulations, or sketching the mobile interface, or sketching the alternate user profiles.&nbsp; Use sketches to think before you code.&nbsp;</p>
            <ul>
                <li><span style="text-decoration: line-through;">Sketch design alternatives with the 10-plus-10 method</span>
                    <ul>
                        <li><span style="text-decoration: line-through;">Can use the 10-plus-5 minutes method, detailed above.&nbsp;&nbsp;</span></li>
                    </ul>
                </li>
                <li><span style="text-decoration: line-through;">If Sketch your design- either the prototype UI or your design plan&nbsp;&nbsp;</span></li>
                <li><span style="text-decoration: line-through;">Get feedback from 3 people, and record it.&nbsp;</span></li>
            </ul>
            <p>&nbsp;</p>
            <h4 data-pm-slice="1 1 []" data-en-clipboard="true"><strong><span>1. Enable the user to input a complex set of selections</span></strong><span>:&nbsp; </span></h4>
            <div data-pm-slice="1 1 []" data-en-clipboard="true"><span>The basic interface you implemented for the C-goals may not allow for more complex inputs or user selections.&nbsp; For instance, perhaps they need to input a sequence of shower temperatures and nozzle settings, with timings, something that is more complex than simple selection within a single menu.&nbsp; Design and implement the user interface that will enable your user to input these selections. Ensure that they can see their selections clearly, have quick visual or auditory feedback on their selections.&nbsp;&nbsp;</span></div>
            <h4><strong>2. Connecting to a mock secondary device.</strong></h4>
            <div><strong> </strong> If one of your design goals involved integrating a secondary device- like a mobile phone or a watch- include a region on your page which will display an interactive UI of the mobile device.&nbsp; For instance, perhaps you have a mock-UI for shopping list creation on your phone, which you can load onto your smart shopping cart UI.&nbsp; Interactive inputs within the mock mobile device UI, should update the smart object, and vice versa.&nbsp; Clearly define in your write up what the role of the secondary device is, with respect to your smart object. Why have a secondary device?&nbsp;&nbsp;</div>
            <h4><strong>3. Display information for different mock users or situations:</strong>&nbsp;</h4>
            <div>Go deeper than you did for the C-goals, to display captured information from sensors in the smart device to the user.&nbsp; You do not need to include complex visualizations here, but if one of your design goals is to allow users to see how much water they are drinking, how would you display this to them?&nbsp; Sketch design alternatives.&nbsp; If your smart toilet is tracking health-related data, how would this be visually presented to the user? If the user has added 10 items to their cart, how would you help them see what categories their products are in and how much they cost?&nbsp;</div>
            <div>Within your UI, display basic indicators of the captured data for at least 4 different model users or example situations. Create these profiles as json files or as objects. You can include buttons outside of the UI to switch between these data profiles.</div>
            <h4><strong>4. Simulate the smart object in use over a time frame: </strong></h4>
            <div>You can't push your UI around a real grocery store. But, if one of your design goals is to highlight where you are in the store, or show coupons for the products near the shopping cart, can you simulate this behavior, in a very simplified store? Outside of the boundaries of your smart object UI, you can include a 'simulate' button, and your UI should act as if it were being used. Or, if your smart object has a program- like the smart shower programmable shower program- you can include interactions or controls to activate this program, and then show a real time (or accelerated) version, of how the UI changes as it runs the program. All visual indicators or visual elements should update dynamically as you run your simulation. For something like the smart water bottle, this might be a simulation of someone drinking water occasionally throughout a simulated period of time, updating the display of how much water they are drinking. You can use a timer and can pre-script the program, to control how the object should change.</div>
            <h4><strong>5. Propose your own:</strong></h4>
            <div>It has to be interesting, sufficiently challenging, and it has to involve developing of an interactive UI using html, css and javascript. Run it by me first.&nbsp;<strong></strong></div>
            <h3><strong>A-goals: all of the C-goals and the B-goals plus:&nbsp;</strong></h3>
            <p>Complete a second design direction from the above list for the B-goals.&nbsp;&nbsp;</p>
            <h3><strong>Documentation:&nbsp;</strong></h3>
            <p>For documentation: assume that someone is encountering your project for the first time.&nbsp;This documentation&nbsp;must&nbsp;be publicly available on your portfolio page.&nbsp; &nbsp;</p>
            <ul>
                <li>Present your sketches- both the design exploration and the prototype interface design</li>
                <li>Write up your requirements and your interview findings</li>
                <li>Describe your interface in detail:
                    <ul>
                        <li>Explain the features and controls</li>
                        <li>Include screenshots to illustrate</li>
                    </ul>
                </li>
                <li>Include a 2-3 minute demo video, showing your interface in action.&nbsp; The easiest way to record this is with a screen capture tool, which also captures audio- such as Quicktime.&nbsp; Use a voiceover to explain your application.&nbsp; Demo videos should be sufficient on their own, but can reference your documentation.&nbsp; Include the name of the project, your name, the project components, and how your application works.&nbsp; You can present it on your webpage or on youtube, but it must be linked on your webpage.&nbsp;</li>
                <li>Include a link to your source code on github. &nbsp;</li>
            </ul>
            <h3><strong>Presentation:</strong></h3>
            <p>Give a <span style="text-decoration: line-through;">5</span> 3 minute presentation of your designs and interface.&nbsp;&nbsp;</p>
            <p>&nbsp;</p>
            <p>-----------------------------------------</p>
            <p>&nbsp;</p>
            <h2><strong>Clarifications:</strong></h2>
            <div data-pm-slice="1 1 []" data-en-clipboard="true">To recap: the C-level interface should allow the user to:</div>
            <div>- provide a small set of the highest priority inputs for the smart object</div>
            <div>- provide a basic snapshot of the status of the smart object, or simple data collected by the smart object.&nbsp;</div>
            <div>To take the smart fridge as an example:</div>
            <div>A C-level interface would be an implemented UI (html, css, javascript), in a single view, served using localhost.&nbsp; As a basic interface, it could (for one moment in time):&nbsp;</div>
            <div>- display the temperature of different compartment of the fridge,</div>
            <div>- display how full different compartments of the fridge are,</div>
            <div>- display how often the fridge has been opened and an average length of time left open,</div>
            <div>- display the date and time,</div>
            <div>- allow the user to input a desired fridge temperature</div>
            <div>- allow the user to input how long to allow the fridge to be opened without an alarm</div>
            <div>The implemented UI would be informed by graphic design principles (week 6)- simplicity, layout, effective use of color.</div>
            <div>This implementation would be supported by 'pre-design work'- interviews, sketches, lists of requirements&nbsp; (20% of the project grade).&nbsp;</div>
            <div>B-level and A-level examples for the smart fridge (choose 1 for each level):&nbsp;</div>
            <div>1. Enable the user to input a complex set of selections:&nbsp; &nbsp;Within an 'advanced settings' sub-page, the user would be able to input preferences for how much of different food groups they want to have in their fridge, and which foods they want to have tracked, so they can be notified if they run out.<span> &nbsp;</span></div>
            <div>2. Connecting to a mock secondary device.&nbsp; Create a mock phone interface that displays fridge status and allows the user to input preferences.&nbsp; The mock phone would have additional features appropriate to a phone UI, vs the fridge UI.&nbsp; These inputs should update the main UI view, and vice versa.&nbsp;</div>
            <div>3. Display information for different mock users or situations:&nbsp; For 4 different users, display a range tracked data points and varied input preferences, that would help these users understand usage of the fridge.&nbsp; Go deeper than the C-interface.</div>
            <div>4. Simulate the usage of the fridge over the course of a mock day.&nbsp; Pre-programmed data, would run on a timer, with the fridge updating as the mock-day plays out.&nbsp;&nbsp;</div>
            <div>As before-&nbsp;</div>
            <div>The implemented UI would be informed by graphic design principles (week 6)- simplicity, layout, effective use of color.</div>
            <div>This implementation would be supported by 'pre-design work'- interviews, sketches, lists of requirements&nbsp; (20% of the project grade).&nbsp;</div>
            <div>&nbsp;</div>
            <p>&nbsp;</p>
        </>
    )
}

export default UIProj1