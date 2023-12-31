function UIAssignment_04()
{return(<><h2> Week 4 in class work </h2>
<p>Tell me about what you worked on during class during week 4 (html, css and svg).</p> 

<p>You can include screenshots of what you created.</p>

<p>Include some code. </p>

<p>Tell me about how things are going- where do you want to learn more, practice more?</p> 


<h2>Monday activity</h2>

<p>We are going to make a UI for a smart fridge in-class.&nbsp; Today, we are just practicing the following with a partner (write your own code to submit for in-class work, but work together to figure out how):</p>
<p>1.&nbsp; Create an html project.&nbsp; Starter template here: <a class="instructure_file_link inline_disabled" title="basic-template.zip" href="https://uc.instructure.com/courses/1546040/files/158972601?wrap=1" target="_blank" rel="noopener" data-canvas-previewable="false" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/158972601" data-api-returntype="File">basic-template.zip</a>&nbsp;</p>
<p>2.&nbsp; Open the html file in your favorite editor.&nbsp; I like sublime text: <a href="https://www.sublimetext.com//" target="_blank" rel="noopener">https://www.sublimetext.com/.&nbsp;&nbsp;</a></p>
<p>3.&nbsp; Edit the html file to add text, buttons, controls, svg elements to create some of the functionalities of a smart fridge listed below.&nbsp; These will not be interactive, because we aren't writing javascript code today.&nbsp; These won't be laid out elegantly, because we haven't covered tools that will help with layout.&nbsp; Initially, they may not look very nice or interesting, but you can play around with style settings.&nbsp;</p>
<p>4. As you go, view the result in your browser.&nbsp; You can just double click on the html file to view it in the browser.&nbsp; I suggest Chrome.&nbsp;</p>
<p>5. Inspect your page using the web developer tools in Chrome (View &gt;&gt; Developer &gt;&gt; Developer Tools).&nbsp; Look at the elements and where they are onscreen, and the layout and sizing decisions computed by the layout engine in the Chrome browser.&nbsp;</p>
<p>6. Test out editing the html in the developer console to see immediate changes.&nbsp;&nbsp;</p>
<h3><strong>What are we implementing?&nbsp;</strong></h3>
<p>Starting assumptions, for a basic UI:</p>
<p>1. This smart fridge has interface that enables the user to see the temperature for different compartments</p>
<p>2. The user will be able to set the overall temperature for:</p>
<ul>
    <li>the fridge</li>
    <li>the freezer</li>
    <li>the crisper compartments</li>
</ul>
<p>3. The user will be able to see how full each portion of the fridge is</p>
<p>4. The smart fridge tracks and displays:</p>
<ul>
    <li>the number of times the fridge someone has opened the fridge that day</li>
    <li>the average daily number of times the fridge is opened</li>
    <li>the median length of time the fridge has been left open that day</li>
    <li>the median length of the time the fridge has been left open over the entire time someone owned the fridge</li>
</ul>
<p>5. The smart fridge communicates how much water has been dispensed that day, vs the average daily water dispensed&nbsp;</p>
<p>6. The smart fridge has a photo viewer&nbsp;</p>
<p>7. The smart fridge has a place to enter a reminder note</p>
<p>8. The smart fridge lets you set a timer</p>
<p>9. Come up with your own ideas ....</p>
<p>Here's what I created (see below).&nbsp; The fridge picture I did using svg rectangles and text elements, crudely positioned manually.&nbsp; The rest is html elements.&nbsp; The only style rules I set were for text size.&nbsp; I downloaded some images to include, and put them in a folder called 'img'.&nbsp;&nbsp;</p>
<p>It doesn't look great.&nbsp; It is not created after needs finding, or with lots of design prototyping.&nbsp; But it will get you to kick the tires for developing a simple webpage with just html, css and svg.&nbsp; Next time, we will work on layout and get into javascript.&nbsp;&nbsp;</p>
<p><strong>Try it yourself, with a partner.&nbsp; Your code will be your own, but see if you can work together to try making a smart fridge UI like the one below. It does NOT have to be identical.&nbsp; Feel free to play around and see how things work.&nbsp;</strong></p>
<p><img src="https://uc.instructure.com/courses/1546040/files/158972461/preview" alt="Screen Shot 2022-09-12 at 12.24.20 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/158972461" data-api-returntype="File" /></p>

<h2>Wednesday activity</h2>
<p>Let's continue with the smart fridge UI we played with last time.&nbsp; As a reminder, this is what we did, but you can take the folder from last time and continue working on it.&nbsp;</p>
<p>1.&nbsp; Open the html file in your favorite editor.&nbsp; I like sublime text: <a href="https://www.sublimetext.com//" target="_blank" rel="noopener">https://www.sublimetext.com/.&nbsp;&nbsp;</a></p>
<p>AND open the css file in your favorite editor.&nbsp;&nbsp;</p>
<p>2.&nbsp; Edit the html file to add&nbsp; MORE text, buttons, images, controls to create some of the functionalities of a smart fridge listed below.&nbsp;&nbsp;</p>
<p>3. As you go, view the result in your browser.&nbsp; You can just double click on the html file to view it in the browser.&nbsp; I suggest Chrome.&nbsp;</p>
<p>4. Inspect your page using the web developer tools in Chrome (View &gt;&gt; Developer &gt;&gt; Developer Tools).&nbsp; Look at the elements and where they are onscreen, and the layout and sizing decisions computed by the layout engine in the Chrome browser.&nbsp;</p>
<p>5. Test out editing the html in the developer console to see immediate changes.&nbsp;&nbsp;</p>
<p>NOW:</p>
<p>Try&nbsp;</p>
<p>A. Grouping elements into div's.&nbsp; How does it change your layout?&nbsp;</p>
<p>B. Use &lt;br&gt; to separate elements.</p>
<p>C.&nbsp; Give elements class names, in your html code.&nbsp; And write style rules for those classes.&nbsp;&nbsp;</p>
<ul>
    <li>Set their color</li>
    <li>Choose a new font and font size</li>
    <li>Add rounded corners if it is a div</li>
    <li>Try some things!&nbsp;&nbsp;</li>
</ul>
<p><strong>Below is what I did last time, can you make it look better?&nbsp;</strong></p>

<h2>Friday:</h2>
<p>1. Add some interactive changes to the style of your elements when hovering over them, using css pseudo classes.&nbsp; (selector:hover).&nbsp;</p>
<p>2. Modify the layout of your elements using either css alone, css flexbox or css grid.&nbsp;&nbsp;</p>
<p>a.&nbsp; If you have time, rather than implementing the colored fridge temperature indicators shown below using svg (Which was what I did), NOW make it using a divs, styling those divs, and positioning with css, css flexbox or css grid.&nbsp; You can also add more compartments and sub-compartments to make it more interesting.&nbsp;&nbsp;</p>
</>)}