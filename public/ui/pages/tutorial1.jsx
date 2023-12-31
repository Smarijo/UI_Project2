function UIT01() {
  return (
    <>
      <p><span>This is the first main tutorial in a series on web development fundamentals, which will discuss html and the document object model, as well as css and svg.&nbsp; &nbsp;The goal of this tutorial is </span><strong>not</strong><span> to give you a comprehensive overview of these topics, but to give you enough of a starting point that you will be able to work on your projects and understand the (many!) external resources available on web development topics.&nbsp;&nbsp;</span></p>
      <p><span>This tutorial will get you to the point of placing a line of static elements onto a page.&nbsp; They won't update dynamically.&nbsp; They won't respond to your interactions.&nbsp; They won't be organized into a nice layout.&nbsp; This is still to come.&nbsp; This tutorial is all about adding static elements to a page, and controlling their 'styling'.&nbsp;&nbsp;</span></p>
      <h3><strong>1. HTML</strong></h3>
      <p>HTML stands for Hypertext Markup Language. &nbsp;HTML defines elements on a web pages, in a hierarchical structure. &nbsp;In the early days of the internet, HTML allowed web developers to create largely static pages that could be linked to other pages (hypertext), and marked up to structure the page. &nbsp;The elements in html thus allowed developers to create pages with titles, headers, text, images and links to other pages. Today, we can use it to incorporate much more- graphics, scripts to dynamically update the page, buttons and UI elements, audio, video, etc. &nbsp;</p>
      <p>In this class we aren't creating web pages, but<span>&nbsp;</span><strong>web applications</strong>- programs that can respond to complex inputs from users, present graphics, and dynamically update.&nbsp; Not that long ago, it was very difficult to create complex applications on the web, but with modern web standards and contemporary browsers we can create interactive, dynamic applications and share them easily.&nbsp;</p>
      <h4><strong>Elements, tags and attributes</strong></h4>
      <p>An HTML page consists in a set of elements. &nbsp;Elements are indicated by tags, which begin and end the element. &nbsp;</p>
      <pre>&lt;p&gt;This is an HTML element.&lt;/p&gt;</pre>
      <p>The 'p' tag is used to identify this element as a paragraph. &nbsp;Note how there is an opening tag (```&lt;p&gt;```) and a closing tag (```&lt;\p&gt;```). &nbsp;</p>
      <p>Elements can be nested within other elements. &nbsp;</p>
      <pre>&lt;p&gt;This is an HTML element. &nbsp;I have some text I want to &lt;strong&gt;bold and &lt;u&gt; underline &lt;\u&gt; &lt;\strong&gt; and other text that is not bolded or underlined&lt;/p&gt;</pre>
      <p>Within a tag you can include 'attributes' about the element. &nbsp;For example, suppose you want to include a link within your text. &nbsp;You could write:</p>
      <pre>&lt;a href='https://www.uc.edu/'&gt;University of Cincinnati&lt;/a&gt;</pre>
      <p>The attributes we will use most often are classes, ids, and style. &nbsp;We will discuss these in the next section. &nbsp;</p>
      <h4><strong>HTML Boilerplate</strong></h4>
      <p>Every HTML project you create will need some boilerplate- you can use this every time you get started with a blank html page.&nbsp;&nbsp;</p>
      <pre><code>&lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
        &lt;meta charset="UTF-8"/&gt;
        &lt;title&gt;Ceci n'est pas un document HTML&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        &lt;/body&gt;
        &lt;/html&gt;</code></pre>
      <p>The first line is a document type declaration.&nbsp; Then you have your root element - your html element.&nbsp; HTML5 documents need a header, which specifies a charset (utf-8).</p>
      <p>Just as a note: some elements do not have internal content, and to avoid making developers type a closing tag every time they use these elements, they can instead replace</p>
      <pre>&lt;foo&gt;&lt;/foo&gt; </pre>
      <p>with</p>
      <pre>&lt;foo/&gt;</pre>
      <h4><strong>DOM</strong></h4>
      <p>DOM stands for<span>&nbsp;</span><strong>Document Object Model</strong>. &nbsp;When the browser parses the html document, it creates a hierarchical (tree-structured) model containing and connecting your page elements.&nbsp; &nbsp;This tree has a root (''html' element).&nbsp; Elements will have a 'parent', 'parents' can have multiple children. &nbsp;Children can have their own children, and will be a parent to those children. &nbsp;</p>
      <p>This model creates a structure for accessing and modifying elements - changing the content, changing the style, adding and removing elements- using javascript or d3. &nbsp;For example, suppose you have created a section of your page within a 'div', and you want to access all child elements within that div. Javascript provides ways to select an element (by class or id), and then you can select all child elements of your selection.</p>
      <p><span>You can (and should) inspect the DOM in your live browser when you develop.&nbsp; You can see the elements, their children, which is very helpful when debugging your code.&nbsp;&nbsp;</span></p>
      <p><span>Let's give it a try.&nbsp; The following instructions work in the Chrome browser, which will be the default browser for this class.&nbsp;</span></p>
      <p>1. Go to this page: <a href="http://cscheid.net/courses/spr15/cs444/lectures/week2/index.html#" target="_blank" rel="noopener">http://cscheid.net/courses/spr15/cs444/lectures/week2/index.html#</a></p>
      <p>2. Right click on the page and select 'Inspect'</p>
      <p>3. A small panel will open on the right of the page (or the bottom, depending on your settings).&nbsp;</p>
      <p><img src="https://uc.instructure.com/courses/1546040/files/157455963/preview" alt="Screen Shot 2022-08-08 at 11.01.08 AM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/157455963" data-api-returntype="File" /></p>
      <p>4. Hover over the head element or the body.&nbsp; It will be highlighted on the page.&nbsp;&nbsp;</p>
      <p>5. You can also select these elements (clicking on the small arrow to the left of the element), and see it's children.&nbsp;&nbsp;</p>
      <p>6. Play around with this for a while, taking note of the structure of the page and the elements in the page. FYI- it contains a&nbsp;</p>
      <p>7. You can also edit these elements live.&nbsp; Try editing the text in the title.&nbsp;&nbsp;</p>
      <h4><strong>Elements</strong></h4>
      <p>There are lots of elements you can add to your page.&nbsp;</p>
      <p>You can add text elements in several different ways.&nbsp; You can use &lt;h1&gt; tags or &lt;h2&gt; tags, to create text elements with larger font sizes.&nbsp; You can use paragraph tags &lt;p&gt; to create other text.&nbsp;&nbsp;</p>
      <p>You can add buttons of different kinds.&nbsp; Let's look at some examples NOTE- I inserted images of these elements, not actually clickable elements.&nbsp; I can't do this in canvas.&nbsp; So don't click the buttons!&nbsp; Even though they say 'click me'.&nbsp;&nbsp;</p>
      <pre><span class="tagnamecolor"><span class="tagcolor">&lt;</span>button<span class="attributecolor"><span>&nbsp;</span>type<span class="attributevaluecolor">="button"</span></span><span class="tagcolor">&gt;</span></span><span>Click Me!</span><span class="tagnamecolor"><span class="tagcolor">&lt;</span>/button<span class="tagcolor">&gt;<br /><img src="https://uc.instructure.com/courses/1546040/files/159057153/preview" alt="Screen Shot 2022-09-14 at 11.44.24 AM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159057153" data-api-returntype="File" /><br /><br /></span></span></pre>
      <p>How about a special button, like a play button?&nbsp; You can look up unicode symbols here:&nbsp;</p>
      <pre>&lt;button type="button"&gt;&amp;#9658;&lt;/button&gt;</pre>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159057521/preview" alt="Screen Shot 2022-09-14 at 11.51.49 AM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159057521" data-api-returntype="File" /></p>
      <p>Checkboxes, which need both a label and the input defined:</p>
      <pre>&nbsp; &nbsp; &lt;input type="checkbox" id="checkbox1" value="select"&gt;<br />&nbsp; &nbsp; &lt;label for="checkbox1"&gt; Select me&lt;/label&gt;&lt;br&gt;</pre>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159057647/preview" alt="Screen Shot 2022-09-14 at 11.55.47 AM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159057647" data-api-returntype="File" /></p>
      <p>Image elements:</p>
      <pre>&nbsp; &nbsp; &lt;img src="img/parisPhoto.jpeg"&gt;</pre>
      <p><br /><img src="https://uc.instructure.com/courses/1546040/files/159057691/preview" alt="Screen Shot 2022-09-14 at 11.57.01 AM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159057691" data-api-returntype="File" /></p>
      <p>There are LOTS of element types. I generally look these up at w3 schools, and copy and paste the starting point template into my code, and then edit to personalize the content.&nbsp;&nbsp;</p>
      <h4><strong>Grouping html elements</strong></h4>
      <p>If you add the elements in order, they will mostly appear in order and their layout with respect to other elements will either be:</p>
      <p><strong>Inline</strong>- which means they are next to each other on the page, in one row.</p>
      <p><strong>Block</strong>- which means that are stacked on top of each other like blocks.&nbsp;&nbsp;</p>
      <p>Elements have default block or inline behavior.&nbsp; You can control some of this with elements:&nbsp;<strong>div&nbsp;</strong> or&nbsp;<strong>span.&nbsp;</strong></p>
      <p>Div's partition your elements into groups, and the elements within a div are treated as belonging to the same block, so they will be separated from other elements in a different line.&nbsp;&nbsp;</p>
      <p>Span forces elements that may want to be in separate lines to be in the same line.&nbsp;&nbsp;</p>
      <p>Let's look at an example:</p>
      <p>Suppose you have this html code- which has a header text, and image and 2 buttons.&nbsp; The header text is a block element, it will occur on a separate line by default, but the buttons will be placed in line with the photo by default.&nbsp; As shown here:</p>
      <pre>&nbsp; &nbsp; &lt;h1&gt; This is my amazing photo &lt;/h1&gt;<br />&nbsp; &nbsp; &lt;img src="img/parisPhoto.jpeg"&gt;<br />&nbsp; &nbsp; &lt;button type="button"&gt;Add&lt;/button&gt;<br />&nbsp; &nbsp; &lt;button type="button"&gt;Remove&lt;/button&gt;<br /><br /></pre>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159057963/preview" alt="Screen Shot 2022-09-14 at 12.03.36 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159057963" data-api-returntype="File" /></p>
      <p>How can I use a div to move the buttons onto a new line, beneath the photo?&nbsp;</p>
      <pre>&lt;h1&gt; This is my amazing photo &lt;/h1&gt;<br />&nbsp; &nbsp; &lt;img src="img/parisPhoto.jpeg"&gt;<br />&nbsp; &nbsp; &lt;div&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; &lt;button type="button"&gt;Add&lt;/button&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; &lt;button type="button"&gt;Remove&lt;/button&gt;<br />&nbsp; &nbsp; &lt;/div&gt;</pre>
      <p><strong><img src="https://uc.instructure.com/courses/1546040/files/159058013/preview" alt="Screen Shot 2022-09-14 at 12.04.48 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159058013" data-api-returntype="File" /></strong>t</p>
      <h4><strong>Classes and IDs</strong></h4>
      <p>As you add elements to your page, you need ways to reference them through selectors, so you can modify or apply style rules, which apply to the appearance and behavior&nbsp; to selected elements. &nbsp;There are 2 ways to do this:&nbsp;</p>
      <ul>
        <li>classes, which reference a set of elements, and</li>
        <li>ids, which uniquely reference one element</li>
      </ul>
      <p>Here is a div element with no class or id.&nbsp;</p>
      <pre>&lt;div&gt;User Interface Design Course&lt;/div&gt;</pre>
      <p>If we want to reference this 'div', and modify it, we can select it through a unique id.&nbsp;</p>
      <pre>&lt;div id="fall2022UI"&gt;User Interface Design Course&lt;/div&gt;</pre>
      <p>If we have a set of elements in the page that we want to be able to select and modify as a group, we use a class. &nbsp;</p>
      <pre>&lt;div class="courses"&gt;User Interface Design Course&lt;/div&gt;<br />&lt;div class="courses"&gt;Data Visualization Course&lt;/div&gt; </pre>
      <p>We can use both ids and classes together for one element, as in the example below:&nbsp;</p>
      <pre>&lt;div id="fall2022UI" class="courses"&gt;User Interface Design Course&lt;/div&gt;</pre>
      <p>We can also use multiple class labels. &nbsp;</p>
      <pre>&lt;div id="fall2022UI" class="courses ugrad grad"&gt;User Interface Design Course&lt;/div&gt;</pre>
      <p>How will this be useful for our projects? &nbsp;Identifiers are particularly useful for labeling buttons, checkboxes, sliders or other controls that uniquely give a particular type of input from the user, and that you will want to capture. &nbsp;For example, suppose you have a set of buttons that update the interface when clicked.&nbsp; Perhaps you want two checkboxes, one labeled 'undergraduate' &nbsp;and another labeled 'graduate', and clicking on these checkboxes controls which content is displayed. &nbsp;You need some way to capture the inputs from these uniquely identified checkbox elements in your page, and labels from identifiers will help with this. &nbsp;If you want to apply style rules (size, color...) to these two checkboxes, you can use a class label to modify both checkboxes at once. &nbsp;</p>
      <h3><strong>2. CSS</strong></h3>
      <p>HTML creates the structure of your webpage- what elements are present, and how are they nested within other elements. &nbsp;CSS defines the style rules for your page- the colors, fonts, backgrounds, margins between elements, orientation of elements... These style rules can be set as attributes within individual elements. &nbsp;But this can get tedious and hard to manage. &nbsp;So, instead you can set style rules that apply across all elements of a certain type (Eg. how should all buttons in a page be styled?), or across all elements in a particular class or for specific elements with a particular id.&nbsp;</p>
      <p>To include a style sheet in your page, you need the following line of code:</p>
      <pre>&lt;link rel="stylesheet" href="css/style.css"&gt;</pre>
      <p>You can set styles inline in html.&nbsp; &nbsp;You can use a style element in the header, to define styles, but then these are not re-usable across different pages.&nbsp; It is better though to do this in your css file and link it in.&nbsp;</p>
      <p>Style rules are typically formatted like this.&nbsp; You have a selector, followed by curly braces and a list of properties that apply to that selector.&nbsp; &nbsp;&nbsp;</p>
      <div
        style={{
          property: 'value',
          property: 'value',
        }}
      >
        Content with Inline Styles
      </div>
      <p>Selectors can be elements (like div, h1, p, button....).&nbsp; They can apply to classes and to id's as well.&nbsp;</p>
      <p>Let's see a style rule applied to all divs on the page:</p>
      <div
        style={{
          borderRadius: '25px',
          background: 'orange',
          padding: '20px',
          width: '200px',
          height: '150px',
        }}
      >
        Content with Inline Styles
      </div>
      <p>Suppose you then had this html code in your page:</p>
      <pre><br />&lt;p&gt;Rounded corners for an element with a specified background color:&lt;/p&gt;<br />&lt;div&gt;Rounded corners!&lt;/div&gt;</pre>
      <p>Here's the result once the style sheet is parsed and the style rule is applied to your div.&nbsp;</p>
      <p><img src="https://uc.instructure.com/courses/1526754/files/151205251/preview" alt="cssExample1-1.png" width="469" height="252" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1526754/files/151205251" data-api-returntype="File" data-id="151205251" /></p>
      <p>The above example applied style rules to **all** divs in the page. &nbsp;If you want to apply style rules to **some** elements, but not others, you can use classes and identifiers.&nbsp;</p>
      {/* <p>Here's an example.&nbsp; Suppose you want to define a class of div that will have rounded corners.&nbsp; And you also want classes of div with a green background and others with a white background and blue border.&nbsp; You can define style rules for these different classes using the format: .class-name {...}.&nbsp;</p> */}
      <div
        className="rounded"
        style={{
          borderRadius: '25px',
          padding: '20px',
          width: '200px',
          height: '150px',
        }}
      >
        Content with Rounded Style
      </div>

      <div
        id="rcorners1"
        style={{
          background: '#73AD21',
        }}
      >
        Content with Background Color #73AD21
      </div>

      <div
        id="rcorners2"
        style={{
          border: '2px solid blue',
        }}
      >
        Content with Blue Border
      </div>
      <p>And the html:&nbsp;</p>
      <pre><br />&lt;p&gt;Rounded corners for an element with a specified background color:&lt;/p&gt;<br />&lt;p class="rounded" id="rcorners1"&gt;Background is green!&lt;/p&gt;<br />&lt;p&gt;Rounded corners for an element with a border:&lt;/p&gt;<br />&lt;p class="rounded" id="rcorners2"&gt;Blue boarder!&lt;/p&gt;</pre>
      <p>&nbsp;</p>
      <p>From the above, classes are selected in css with a dot, as in .className. &nbsp;In the above example, this means all the div's in class 'rounded', can be styled to have rounded corners. &nbsp;And then div's can be individually styled, through identifier selectors, using #idName.</p>
      <p><br />The result:&nbsp;</p>
      <p><img src="https://uc.instructure.com/courses/1526754/files/151205269/preview" alt="Screen Shot 2021-12-28 at 5.04.12 PM.png" width="479" height="527" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1526754/files/151205269" data-api-returntype="File" data-id="151205269" /></p>
      <p>Here's another example.&nbsp; Suppose you have 3 types of buttons, with 3 different colors.&nbsp; You can define a base class for buttons, which will apply to all buttons.&nbsp; This can include text color, font, padding around the text.... etc.&nbsp; THEN you can create particular style rules for the different kinds of buttons, including different colors.&nbsp;&nbsp;</p>
      <p>Let's first look at the style sheet:</p>
      <div>
        <button style={{ padding: '10px', color: 'white' }}>Button with White Text</button>
        <button style={{ padding: '10px', backgroundColor: 'green' }}>Green Button</button>
        <button style={{ padding: '10px', backgroundColor: 'blue' }}>Blue Button</button>
        <button style={{ padding: '10px', backgroundColor: 'purple' }}>Purple Button</button>

      </div><p>Now let's look at the html:</p>
      <pre><br />&nbsp; &nbsp; &lt;button class="btn btn1"&gt; button 1 &lt;/button&gt;<br />&nbsp; &nbsp; &lt;button class="btn btn2"&gt; button 2 &lt;/button&gt;<br />&nbsp; &nbsp; &lt;button class="btn btn3"&gt; button 2 &lt;/button&gt;</pre>
      <p>What do we get?&nbsp;</p>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159059711/preview" alt="Screen Shot 2022-09-14 at 12.45.51 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159059711" data-api-returntype="File" /></p>
      <p>Note- you can include style rules in your html page, in the header section.&nbsp; This would produce the same result for the buttons shown above:</p>
      <pre>head&gt;<br />&nbsp; &nbsp; &lt;meta charset="UTF-8"&gt;<br />&nbsp; &nbsp; &lt;title&gt;My Smart Fridge UI&lt;/title&gt;<br />&nbsp; &nbsp;&nbsp;<br />&nbsp; &nbsp; &lt;!-- The following line references an external css file --&gt;<br />&nbsp; &nbsp; &lt;!-- &lt;link href="css/style.css" rel="stylesheet"&gt; --&gt;<br />&nbsp; &nbsp; &lt;style&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; .btn{<br /> & nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; padding: 10px;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; color: white;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br /><br />&nbsp; &nbsp; &nbsp; &nbsp; .btn1{background - color: green;}<br /><br />&nbsp; &nbsp; &nbsp; &nbsp; .btn2{background - color: blue; }<br /><br />&nbsp; &nbsp; &nbsp; &nbsp; .btn3{background - color: purple; }<br /><br />&nbsp; &nbsp; &lt;/style&gt;<br />&nbsp; &nbsp;&nbsp;<br />&lt;/head&gt;</pre>
      <p>Class selectors are used most often.&nbsp; But- What if you want a style rule to apply to just one element- exactly one button, or exactly one div or h1 element?&nbsp;&nbsp;</p>
      <p>You can give that element an identifier, and then define the style rules using #i.&nbsp; Here's an example:</p>
      <pre>&nbsp; &nbsp;&lt;h1 id="main-header"&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; Title<br />&nbsp; &nbsp; &lt;/h1&gt;</pre>
      <p>And the style rule:</p>
      <header
        style={{
          color: 'white',
          backgroundColor: 'slateblue',
          padding: '10px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        Main Header Content
      </header>
      <p>Result:</p>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159060117/preview" alt="Screen Shot 2022-09-14 at 12.54.28 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159060117" data-api-returntype="File" /></p>
      <p>&nbsp;</p>
      <p>Now you may be asking- what if I want to combine selectors together in my css?&nbsp; There are lots of different rules for how selectors are combined together.&nbsp;</p>
      <p>Suppose you want to set style rules for paragraph elements in a div, but not other paragraph elements on the page.&nbsp; There is a way to do that.&nbsp; Take this example:&nbsp;</p>
      <h1
        style={{
          color: 'brown',
        }}
      >
        Heading Inside Main Div with Brown Color
      </h1>
      <p>And the htmL:</p>
      <pre>&nbsp; &nbsp; &lt;div class="main-div"&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; &lt;h1 class="brown"&gt;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Selected<br />&nbsp; &nbsp; &nbsp; &nbsp; &lt;/h1&gt;<br />&nbsp; &nbsp; &lt;/div&gt;</pre>
      <p><img src="https://uc.instructure.com/courses/1546040/files/159060437/preview" alt="Screen Shot 2022-09-14 at 1.03.38 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159060437" data-api-returntype="File" /></p>
      <p>You can share style properties between selectors, by putting a comma between them.&nbsp; This can avoid duplication.&nbsp;&nbsp;</p>
      <p><strong>The take-away- css lets you style elements.&nbsp; You can set rules on elements, on classes and on ids.&nbsp; You can combine selectors in different ways to organize your style rules.&nbsp;&nbsp;</strong></p>
      <p>References:&nbsp;<br />* w3Schools is a good reference for css [at this link](https://www.w3schools.com/css/default.asp).</p>
      <p>Want to do more?</p>
      <p>This is a nice tutorial:</p>
      <p>&nbsp;</p>
      <h3><strong>3. SVG</strong></h3>
      <p>SVG stands for 'scalable vector graphics'.&nbsp; It is part of the HTML5 standards and it allows developers to add graphical elements to their page- shapes, lines, etc.&nbsp; D3, the visualization library we will use in this class, uses svg extensively to map data to graphical elements on the page.&nbsp; But, you can also use svg independent of d3.&nbsp;</p>
      <p>Note: alternative methods for creating graphics on webpages include using the<span>&nbsp;</span><a class="inline_disabled external" href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank" rel="noopener"><span>Canvas</span><span class="screenreader-only">&nbsp;(Links to an external site.)</span></a>, which you can think of as a drawing area, or using<span>&nbsp;</span><a class="inline_disabled external" href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank" rel="noopener"><span>WebGL</span><span class="screenreader-only">&nbsp;(Links to an external site.)</span></a>, which includes the ability to draw elements in 3D.&nbsp; We are focusing on svg and d3 in this class, because they are the standard for contemporary work in creating 2D graphics, and d3 includes many powerful tools for presenting data visually.&nbsp;</p>
      <h4><strong>SVG drawing basics:&nbsp;</strong></h4>
      <ul>
        <li>SVG is defined using markup code similar to HTML.</li>
        <li>SVG elements don't lose any quality when they are resized.</li>
        <li>SVG elements can be included directly within any HTML document or dynamically inserted into the DOM with JS.</li>
        <li>Before you can draw SVG elements, you have to add an<span>&nbsp;</span><code>&lt;svg&gt;</code><span>&nbsp;</span>element with a specific<span>&nbsp;</span><code>width</code><span>&nbsp;</span>and<span>&nbsp;</span><code>height</code><span>&nbsp;</span>to your HTML document, for example:<span>&nbsp;</span><code>&lt;svg width="500" height="500"&gt;&lt;/svg&gt;</code><span>&nbsp;</span>.</li>
        <li>The SVG coordinate system places the origin (0,0) in the top-left corner of the svg element. This means your coordinates go from<span>&nbsp;</span><strong>(0, 0) in the upper left corner</strong>, to<strong><span>&nbsp;</span>(width, height) in the lower right corner. &nbsp;To put an item in the center, specify that is sits at (width/2, height/2).&nbsp; An item at (50, 100), will be 50 pixels to the right of the upper left corner, and 100 pixels down.&nbsp;</strong></li>
        <li>SVG has no layering concept or depth property. The order in which elements are coded determines their depth order.&nbsp;&nbsp;</li>
      </ul>
      <p>Here is an example DOM with an svg element, width 400 and height 50.&nbsp; We can add basic shapes and text, setting the position and parameters of the elements.</p>
      <pre><span class="pl-kos">&lt;</span><span class="pl-ent">svg</span> <span class="pl-c1">width</span>="<span class="pl-s">400</span>" <span class="pl-c1">height</span>="<span class="pl-s">50</span>"<span class="pl-kos">&gt;</span>

        <span class="pl-c">&lt;!-- Rectangle (x and y specify the coordinates of the upper-left corner --&gt;</span>
        <span class="pl-kos">&lt;</span><span class="pl-ent">rect</span> <span class="pl-c1">x</span>="<span class="pl-s">0</span>" <span class="pl-c1">y</span>="<span class="pl-s">0</span>" <span class="pl-c1">width</span>="<span class="pl-s">50</span>" <span class="pl-c1">height</span>="<span class="pl-s">50</span>" <span class="pl-c1">fill</span>="<span class="pl-s">blue</span>" /&gt;

        <span class="pl-c">&lt;!-- Circle: cx and cy specify the coordinates of the center and r the radius --&gt;</span>
        <span class="pl-kos">&lt;</span><span class="pl-ent">circle</span> <span class="pl-c1">cx</span>="<span class="pl-s">85</span>" <span class="pl-c1">cy</span>="<span class="pl-s">25</span>" <span class="pl-c1">r</span>="<span class="pl-s">25</span>" <span class="pl-c1">fill</span>="<span class="pl-s">green</span>" /&gt;

        <span class="pl-c">&lt;!-- Ellipse: rx and ry specify separate radius values --&gt;</span>
        <span class="pl-kos">&lt;</span><span class="pl-ent">ellipse</span> <span class="pl-c1">cx</span>="<span class="pl-s">145</span>" <span class="pl-c1">cy</span>="<span class="pl-s">25</span>" <span class="pl-c1">rx</span>="<span class="pl-s">15</span>" <span class="pl-c1">ry</span>="<span class="pl-s">25</span>" <span class="pl-c1">fill</span>="<span class="pl-s">purple</span>" /&gt;

        <span class="pl-c">&lt;!-- Line: x1,y1 and x2,y2 specify the coordinates of the ends of the line --&gt;</span>
        <span class="pl-kos">&lt;</span><span class="pl-ent">line</span> <span class="pl-c1">x1</span>="<span class="pl-s">185</span>" <span class="pl-c1">y1</span>="<span class="pl-s">5</span>" <span class="pl-c1">x2</span>="<span class="pl-s">230</span>" <span class="pl-c1">y2</span>="<span class="pl-s">40</span>" <span class="pl-c1">stroke</span>="<span class="pl-s">gray</span>" <span class="pl-c1">stroke-width</span>="<span class="pl-s">5</span>" /&gt;

        <span class="pl-c">&lt;!-- Text: x specifies the position of the left edge and y specifies the vertical position of the baseline --&gt;</span>
        <span class="pl-kos">&lt;</span><span class="pl-ent">text</span> <span class="pl-c1">x</span>="<span class="pl-s">260</span>" <span class="pl-c1">y</span>="<span class="pl-s">25</span>" <span class="pl-c1">fill</span>="<span class="pl-s">red</span>"<span class="pl-kos">&gt;</span>SVG Text<span class="pl-kos">&lt;/</span><span class="pl-ent">text</span><span class="pl-kos">&gt;</span>

        <span class="pl-kos">&lt;/</span><span class="pl-ent">svg</span><span class="pl-kos">&gt;<br /></span></pre>
      <p>And the result:&nbsp;</p>
      <p><img src="https://uc.instructure.com/courses/1526754/files/151309801/preview" alt="Screen Shot 2022-01-01 at 5.49.04 PM-1.png" width="869" height="127" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1526754/files/151309801" data-api-returntype="File" data-id="151309801" /></p>
      <p><strong>Paths</strong>:&nbsp; Paths can be used to create more complex shapes, though it is not standard to manually specify these shapes very frequently.&nbsp; It essentially consists in a set of points, where a line is drawn from the first point to the next, and you can indicate when to close the shape.&nbsp; There also are ways to create paths using curves.&nbsp;&nbsp;</p>
      <p>This<span>&nbsp;</span><a class="inline_disabled external" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths" target="_blank" rel="noopener"><span>path tutorial</span><span class="screenreader-only">&nbsp;(Links to an external site.)</span></a><span>&nbsp;</span>may prove a useful reference.</p>
      <p><strong>SVG Grouping and Transformations:</strong></p>
      <p>Elements can be grouped together, and then acted upon together.&nbsp; This includes changes to presentation attributes, as well as geometric transformations (moved, rotated, etc).&nbsp; SVG has a transform attribute, the allows you to specify how the group of elements are collectively transformed.</p>
      <p>Let's do an activity: <a title="HTML, CSS, SVG In-Class Activity 1 (Monday Sept 12)" href="https://uc.instructure.com/courses/1546040/pages/html-css-svg-in-class-activity-1-monday-sept-12" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/pages/html-css-svg-in-class-activity-1-monday-sept-12" data-api-returntype="Page">HTML, CSS, SVG In-Class Activity 1 (Monday Sept 12)</a></p>
    </>
  )
}

export default UIT01