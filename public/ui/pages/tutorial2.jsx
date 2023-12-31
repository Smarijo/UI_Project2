function UIT02() {
    return (
        <>
            <p>So far, we have :</p>
            <p>1. Added elements to a webpage.</p>
            <p>2. Placed these elements into groups called 'div's.&nbsp;&nbsp;</p>
            <p>3. Assigned class labels to elements on a webpage</p>
            <p>4. Applied style rules that change how these elements look- mostly changing color, font, borders, sizing.&nbsp;&nbsp;</p>
            <p>Let's dig a little deeper into css to cover using css for defining behaviors and layouts.&nbsp;</p>
            <h2>CSS and Changes in Appearance on Interaction</h2>
            <p>Css can set rules for the appearance of your page, but you can also use it to specify some interactive changes. The way this is often done is through&nbsp;<strong>pseudo classes.&nbsp;&nbsp;</strong></p>
            <p>Here's a w3 schools reference : <a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank" rel="noopener">https://www.w3schools.com/css/css_pseudo_classes.asp</a></p>
            <p>Suppose you want to change the appearance of a class when elements of that class are hovered over- like changing their color. In addition to writing style rules that apply to a class, you can write specific rules that apply to that class when you are hovering over it.&nbsp;</p>
            <p>Here is the html, which creates a div with a class.&nbsp;&nbsp;</p>
            <pre>&nbsp;&lt;div class="myDivClassName"&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; &lt;h1&gt; I am some text &lt;/h1&gt;<br />&nbsp; &nbsp; &lt;/div&gt;</pre>
            <p>Then we want to define style rules for the default look of the class, and for when hovering over the div.&nbsp; We can do this using an additional label, which is called a pseudo class.</p>
            <pre>.myDivClassName{<br /> & nbsp; &nbsp; background-color: orange;<br />}<br /><br />.myDivClassName:hover{<br /> & nbsp; &nbsp; background-color: blue;<br />}</pre>
            <p>Here is the result, without hovering:</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159138625/preview" alt="Screen Shot 2022-09-16 at 12.19.13 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159138625" data-api-returntype="File" /></p>
            <p>While hovering:</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159138843/preview" alt="Screen Shot 2022-09-16 at 12.19.20 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159138843" data-api-returntype="File" /></p>
            <p>&nbsp;</p>
            <h2>CSS and Layout&nbsp;</h2>
            <p>The next natural question is- how do I layout these elements on the page?&nbsp; &nbsp;How do I manage what happens when the page resizes?&nbsp;</p>
            <p>There are a number of different options here.&nbsp;</p>
            <h3>Layout option 1: Use CSS&nbsp;</h3>
            <p>With CSS, you can create a page layout, that includes a header, a footer, and multiple columns in the body.&nbsp;&nbsp;</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159137843/preview" alt="Screen Shot 2022-09-16 at 12.05.07 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159137843" data-api-returntype="File" /></p>
            <p>W3 schools has a nice description here : <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog" target="_blank" rel="noopener">https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog</a>&nbsp;</p>
            <p>Let's look at the layout above.&nbsp;&nbsp;</p>
            <p>First, it has a header and a footer.&nbsp; These take up the whole page, and the main layout setting here is the placement of the text.&nbsp;</p>
            <pre><span>.header&nbsp;</span><span class="cssdelimitercolor">{</span><span class="csspropertycolor"><br />&nbsp; background-color<span class="csspropertyvaluecolor"><span class="cssdelimitercolor">:</span><span>&nbsp;</span>#F1F1F1<span class="cssdelimitercolor">;</span></span><br />&nbsp; text-align<span class="csspropertyvaluecolor"><span class="cssdelimitercolor">:</span><span>&nbsp;</span>center<span class="cssdelimitercolor">;</span></span><br />&nbsp; padding<span class="csspropertyvaluecolor"><span class="cssdelimitercolor">:</span><span>&nbsp;</span>20px<span class="cssdelimitercolor">;</span></span><br /></span><span class="cssdelimitercolor">}</span></pre>
            <p>But what about those columns in the middle?&nbsp; How do we make that work?&nbsp; Let's make an example.&nbsp; Suppose this is my html:&nbsp;</p>
            <pre>&nbsp; &lt;div&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 1&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am a column which has lots of excellent content. &nbsp;Read me! &nbsp;I have so many interesting things to say. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 2&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am just a boring middle column. &nbsp;Ignore me. &nbsp;I am sure the other columns have more to say than I do. &nbsp;Bla Bla Bla. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 3&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;Ok, Ok, Do what you want. &nbsp;Read me. &nbsp;Don't read me. &nbsp;I do not care. &nbsp;I don't think about other people and just focus on being the best column of text I can be no matter who reads me.&lt;/p&gt;<br />&nbsp; &lt;/div&gt;</pre>
            <p>By default, if each of those columns is a div, they will be placed on top of each other, like this:</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159139231/preview" alt="Screen Shot 2022-09-16 at 12.33.54 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159139231" data-api-returntype="File" /></p>
            <p>&nbsp;</p>
            <p>Let's override that default behavior by specifying layout behavior in css.&nbsp;</p>
            <p>First- we need to group these into a div called 'row' (since we want all 3 in the same row).&nbsp; And then we will call each one a column.&nbsp; &nbsp;Here's the new html:</p>
            <pre>&lt;div class="row"&gt;<br />&nbsp; &lt;div class="column"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 1&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am a column which has lots of excellent content. &nbsp;Read me! &nbsp;I have so many interesting things to say. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div class="column"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 2&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am just a boring middle column. &nbsp;Ignore me. &nbsp;I am sure the other columns have more to say than I do. &nbsp;Bla Bla Bla. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div class="column"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 3&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;Ok, Ok, Do what you want. &nbsp;Read me. &nbsp;Don't read me. &nbsp;I do not care. &nbsp;I don't think about other people and just focus on being the best column of text I can be no matter who reads me.&lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&lt;/div&gt;</pre>
            <p>Now the css, which specifying the layout of the columns in the row.&nbsp;</p>
            <pre>/* Create three equal columns that floats next to each other */<br /><br />.column {<br />  float: left;<br />  width: 33%;<br />}</pre>
            <p>&nbsp;</p>
            <p>And the result:</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159139331/preview" alt="Screen Shot 2022-09-16 at 12.36.45 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159139331" data-api-returntype="File" /></p>
            <p>&nbsp;</p>
            <p>What if you want columns to have different sizes?&nbsp; Let's try!&nbsp;</p>
            <p>Html:</p>
            <pre>div class="row"&gt;<br />&nbsp; &lt;div class="bigColumn"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 1&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am a column which has lots of excellent content. &nbsp;Read me! &nbsp;I have so many interesting things to say. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div class="smallColumn"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 2&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;I am just a boring middle column. &nbsp;Ignore me. &nbsp;I am sure the other columns have more to say than I do. &nbsp;Bla Bla Bla. &lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&nbsp;&nbsp;<br />&nbsp; &lt;div class="smallColumn"&gt;<br />&nbsp; &nbsp; &lt;h2&gt;Column 3&lt;/h2&gt;<br />&nbsp; &nbsp; &lt;p&gt;Ok, Ok, Do what you want. &nbsp;Read me. &nbsp;Don't read me. &nbsp;I do not care. &nbsp;I don't think about other people and just focus on being the best column of text I can be no matter who reads me.&lt;/p&gt;<br />&nbsp; &lt;/div&gt;<br />&lt;/div&gt;</pre>
            <p>CSS:</p>
            <pre>.bigColumn{<br /> & nbsp; float: left;<br />&nbsp; width: 50%;<br />}<br /><br />.smallColumn{<br /> & nbsp; float: left;<br />&nbsp; width: 25%;<br />}</pre>
            <p>The result:</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159139419/preview" alt="Screen Shot 2022-09-16 at 12.39.21 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159139419" data-api-returntype="File" /></p>
            <p>&nbsp;</p>
            <p>To recap- we put the elements we wanted to layout with respect to each other into a div together, and then described the rules for them using css.&nbsp;&nbsp;</p>
            <p>There are LOTS of positioning rules in CSS.&nbsp;&nbsp;</p>
            <p>You also CAN set responsive layout rules using CSS.<strong>&nbsp; What is responsive layout?&nbsp;&nbsp;</strong>A responsive layout is one where as the page resizes, elements shift and resize in useful ways, so you can look at the page comfortably on a phone, on a small laptop screen or ok a 4k computer monitor.&nbsp;&nbsp;</p>
            <p>Look at this example, where the three columns become one row, when the page is made smaller.&nbsp;&nbsp;</p>
            <p><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_grid" target="_blank" rel="noopener">https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_grid</a></p>
            <h3>Layout option 2: Use CSS Flexbox&nbsp;</h3>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159140217/preview" alt="Screen Shot 2022-09-16 at 12.59.58 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159140217" data-api-returntype="File" /></p>
            <p>CSS flexbox is a layout module that allows you to have more control over the layout of elements.&nbsp;&nbsp;</p>
            <p>W3 schools has a tutorial: <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank" rel="noopener">https://www.w3schools.com/css/css3_flexbox.asp</a></p>
            <p>The principle is: you define a container which will contain other elements, and call it a flex container. This container can have settings for how to wrap elements if they exceed the space provided.&nbsp; The container can have settings for how to&nbsp;<em>justify</em> the content- centered, at the start (flex start), at the end (flex end).&nbsp; You can have the content stretch and fill the container horizontally or vertically.&nbsp; And more.&nbsp;&nbsp;</p>
            <p><a href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank" rel="noopener">https://www.w3schools.com/css/css3_flexbox_container.asp</a></p>
            <p>Items in the flex container can also have properties.&nbsp;&nbsp;</p>
            <p><a href="https://www.w3schools.com/css/css3_flexbox_items.asp" target="_blank" rel="noopener">https://www.w3schools.com/css/css3_flexbox_items.asp</a></p>
            <p>The result is- you can customize the sizing, positioning and behavior of elements within a parent element.&nbsp;&nbsp;</p>
            <h3>Layout option 3: Use CSS Grid</h3>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159140189/preview" alt="Screen Shot 2022-09-16 at 12.59.11 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159140189" data-api-returntype="File" /></p>
            <p>With CSS grid, you create a virtual grid, of columns and rows.&nbsp; Then you specify that the items within can take up varied numbers of these columns and rows.&nbsp;</p>
            <p>Details here:</p>
            <p><a href="https://www.w3schools.com/css/css_grid.asp" target="_blank" rel="noopener">https://www.w3schools.com/css/css_grid.asp</a></p>
            <h3>Layout option 4: Use a CSS framework like Bootstrap</h3>
            <p>Bootstrap is a CSS framework, which means it provides responsive layout BUT ALSO a lot more.&nbsp; &nbsp;Bootstrap is one of the most common web dev tools in use today. &nbsp;<a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" target="_blank" rel="noopener">https://www.w3schools.com/bootstrap/bootstrap_ver.asp</a></p>
            <p>Bootstrap may or may not be a good choice for what you are going to do.&nbsp; It is ideal for cases where you want to get a site out quickly that doesn't involve much custom styling or layouts or behavior.&nbsp; Sometimes when you want something very specific, you may find yourself working against Bootstrap, rather than really benefiting from it.&nbsp;&nbsp;</p>
            <h3>Layout option 5: MORE ????&nbsp;</h3>
            <p>The internet is big.&nbsp; There are lots of tools out there.&nbsp;&nbsp;</p>
        </>
    )
}

export default UIT02