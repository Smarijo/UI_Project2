function UIT05() {
    return (
        <>
            <p>In the previous tutorial, I had the following argument:</p>
            <p>1. Javascript is a lot like other languages you have studied previously- it is interpreted, you don't have to worry about memory management (ala C/C++)....&nbsp;&nbsp;</p>
            <p>2. But:</p>
            <ul>
                <li>Javascript- is loosely typed, so you mostly declare whether a variable can or can't be changed (const vs let/var) and whether a variable is blocked scoped or not (let vs var).&nbsp; &nbsp;</li>
                <li>Javascript lets you add parameters to objects on the fly</li>
            </ul>
            <p>But, overall: you can write code in Javascript in a way that I hope feels familiar and comfortable.&nbsp;&nbsp;</p>
            <p>Now let's bust our of our comfort zone a little bit.....&nbsp; We will look at how Javascript's functional language properties allow us to use functions in convenient ways, enable asynchronous behavior, and manipulate arrays for data processing.&nbsp;&nbsp;</p>
            <h2><strong>Javascript is a Functional Language&nbsp;</strong></h2>
            <p><span>We are used to declaring variables, adding variables to arrays, passing variables to function calls....</span></p>
            <p>Ok now, take a deep breath: &nbsp;<strong> In Javascript: FUNCTIONS ARE VALUES THAT CAN BE STORED IN VARIABLES, and YOU CAN USE THEM LIKE VARIABLES.&nbsp;&nbsp;</strong></p>
            <ul>
                <li>Just as you can pass variables as parameters to a function, <strong>you can pass functions as parameters to other functions.&nbsp; </strong></li>
                <li>Just as you can return variables from a function, <strong>you can return functions from other functions.&nbsp;&nbsp;</strong></li>
                <li>Just as you can add variables to an array, <strong>you can add functions to an array</strong>.&nbsp;&nbsp;</li>
                <li>And so on....&nbsp;</li>
            </ul>
            <p>Mind blown?&nbsp;</p>
            <p><span><img src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" alt="Mind Blown GIFs - Get the best GIF on GIPHY" /></span></p>
            <p><span>There are other functional languages out there, and you have likely encountered at least one: Lisp, Python, Erlang, Haskell, Closure.&nbsp; Some people out there argue that Javascript is not a true functional language- I'll leave that as an argument for other times.&nbsp; But, let's look at some ways that functions work differently in Javascript when compared to C++ or Java.&nbsp;&nbsp;</span></p>
            <p><span>Let's walk through this.....&nbsp;</span></p>
            <p><span>Here are 2 ways to define a function (there are more, but let's start here).&nbsp;</span></p>
            <p><span>Version 1:</span></p>
            <pre><span class="pl-c">// One way to use functions</span>
                <span class="pl-k">function message</span><span class="pl-kos">(</span><span class="pl-s1">firstName</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
                <span class="pl-k">return</span> <span class="pl-s">`Hello, I'm <span class="pl-s1"><span class="pl-kos">${</span>firstName<span class="pl-kos">}</span></span>.`</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span>

                <span class="pl-c">// We can call the function to print the expected message</span>
                <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-en">message</span><span class="pl-kos">(</span><span class="pl-s">"Victoria"</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
            <p><span>Version 2: Assign an <strong>anonymous function </strong>to a variable name&nbsp;</span></p>
            <pre><span class="pl-c">// OR We assign an anonymous function to the variable 'message'</span>
                {/* <span class="pl-k">let</span> <span class="pl-en">message</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">firstName</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> */}
                <span class="pl-k">return</span> <span class="pl-s">`Hello, I'm <span class="pl-s1"><span class="pl-kos">${</span>firstName<span class="pl-kos">}</span></span>.`</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span>

                <span class="pl-c">// We can call the function to get the expected message</span>
                <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-en">message</span><span class="pl-kos">(</span><span class="pl-s">"Victoria"</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
            <p><span>Look closely- I know it looks very similar, but take a second to absorb the difference.&nbsp; This means that you could later do this:&nbsp;</span></p>
            <pre><span><span class="pl-c">// why don't we rename the function, just for fun. </span><br /><span class="pl-k">let</span> <span class="pl-en">newMessageName</span> <span class="pl-c1">=</span> message;<br /><br />//it looked like I was re-assigning a variable to another name right? <br />// BUT WAIT: I was reassigning an anonymous function from one name to another<br /><br /><span class="pl-c">// and let's put this function in an array </span><br /><span class="pl-k">let</span> arrayOfMyFunction = [ <span class="pl-en">newMessageName</span> ];<br /><br />console.log( arrayOfMyFunction[0]("Weird") ); </span></pre>
            <p><span>So far, so good?&nbsp;&nbsp;</span></p>
            <p>You can put functions into objects thusly:</p>
            // <pre><span class="jskeywordcolor">const</span><span>&nbsp;myObject = {</span><br /><span>&nbsp;&nbsp;firstName:</span><span class="jsstringcolor">"John"</span><span>,</span><br /><span>&nbsp; lastName:&nbsp;</span><span class="jsstringcolor">"Doe"</span><span>,</span><br /><span>&nbsp; fullName:&nbsp;</span><span class="jskeywordcolor">function</span><span>&nbsp;() {</span><br /><span>&nbsp; &nbsp;&nbsp;</span><span class="jskeywordcolor">return</span><span>&nbsp;</span><span class="jskeywordcolor">this</span><span>.</span><span class="jspropertycolor">firstName</span><span>&nbsp;+&nbsp;</span><span class="jsstringcolor">" "</span><span>&nbsp;+&nbsp;</span><span class="jskeywordcolor">this</span><span>.</span><span class="jspropertycolor">lastName</span><span>;</span><br /><span>&nbsp;&nbsp;}</span><br /><span>}</span><br /><span>myObject.</span><span class="jspropertycolor">fullName</span><span>();&nbsp;&nbsp;</span></pre>
            <p>Note the use of <strong>'this'</strong> in the function above?&nbsp; This refers to the object, and is interpreted to look within the scope of the object.&nbsp; &nbsp;We'll get to objects too, but let's stick with functions.&nbsp;</p>
            <p>What about passing functions as parameters to other functions?&nbsp;&nbsp;</p>
            // <pre><span class="jskeywordcolor">function</span><span>&nbsp;updateHTML(some) {</span><br /><span>&nbsp; document.</span><span class="jspropertycolor">getElementById</span><span>(</span><span class="jsstringcolor">"demo"</span><span>).</span><span class="jspropertycolor">innerHTML</span><span>&nbsp;</span><span>= some;</span><br /><span>}<br /><br /></span>function printToConsole(some){<br />  console.log("I have content to print: " + some);<br />}<br /><br /><span class="jskeywordcolor">function</span><span> sumNumbers(num1, num2, myCallback) {</span><br /><span>&nbsp;&nbsp;</span><span class="jskeywordcolor">let</span><span>&nbsp;sum = num1 + num2;</span><br /><span>&nbsp;&nbsp;</span><span>myCallback(sum);  //note- you can pass many different functions here</span><br /><span>}</span><br /><br /><span>myCalculator(</span><span class="jsnumbercolor">5</span><span>,&nbsp;</span><span class="jsnumbercolor">5</span><span>, updateHTML); </span><span>&nbsp;</span><br /><span>myCalculator(</span><span class="jsnumbercolor">5</span><span>,&nbsp;</span><span class="jsnumbercolor">5</span><span>, printToConsole); </span><span>&nbsp;</span></pre>
            <p>This may not look very exciting, but it comes up when we do <em>callback functions</em>, which are important in Javascript.&nbsp; &nbsp;But, I'll get to that below (asynchronous javascript).&nbsp;</p>
            <p><span>One more thing- there is a lot of interest in enabling Javascript developers to declare functions in one line.&nbsp; Let's consider some examples.&nbsp;</span></p>
            // <pre><span>myFunctionWithCallback( <span class="jskeywordcolor">function</span>() { return 100 } );&nbsp;</span></pre>
            <p>If you are looking at that thinking- why would you ever do that?&nbsp; See the Javascript asynchronous section below.&nbsp;</p>
            <p>This brings me to <strong>Arrow Functions.&nbsp;</strong></p>
            <h3><strong>Arrow Functions</strong></h3>
            <pre><span class="jskeywordcolor">let</span><span>&nbsp;myFunction = (a, b) =&gt; a * b;</span></pre>
            <p><span>The syntax above defines a function in one line.&nbsp; This function takes two parameters, a and b, and returns a*b.&nbsp; Let's look again, this time at 3 different function declarations, all of which do the same thing.&nbsp; &nbsp;</span></p>
            // <pre>helloNormalFn = function(val, val2) {<br />  return "Hello " + val + " and " + val2;<br />}<br /><br />//this is equivalent<br /><span>helloArrowFn = (val1, val2) =&gt; "Hello " + val + " and " + val2;</span></pre>
            <p><span>Y</span><span>ou may be asking, why can't you just write this in the multi-line format?&nbsp; Why the interest in such efficient function definitions?&nbsp; Because functions are passed around as callbacks (See below), developers like to be able to define them in one line.&nbsp;</span></p>
            <h2><strong>Javascript asynchronous&nbsp;</strong></h2>
            <p>Because we are running interactive programs, we never want our code to be unresponsive.&nbsp; Javascript allows processes to complete outside the main thread of execution- these are asynchronous functions.&nbsp;</p>
            <p>One classic example is a timeout function.&nbsp; You invoke it, a timer runs, when it times out, you want a response to execute.&nbsp;</p>
            <pre><span>setTimeout(</span><span class="jskeywordcolor">function</span><span>() {myFunction(</span><span class="jsstringcolor">"I love You !!!"</span><span>); },&nbsp;</span><span class="jsnumbercolor">3000</span><span>);</span><br /><br /><span class="jskeywordcolor">function</span><span>&nbsp;myFunction(value) {</span><br /><span>&nbsp; document.</span><span class="jspropertycolor">getElementById</span><span>(</span><span class="jsstringcolor">"demo"</span><span>).</span><span class="jspropertycolor">innerHTML</span><span>&nbsp;= value;</span><br /><span>}</span></pre>
            <p><span>What this will do, is call the anonymous function declared within the setTimeout function, when the timer runs out (in 3000 ms).&nbsp; </span><span><a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback9" target="_blank" rel="noopener">https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback9</a></span></p>
            <p><span>What if you want code to execute repeatedly at particular intervals?&nbsp; This example below will display a counter on the page, which updates at 1 second intervals (1000 ms).</span></p>
            <div class="w3-example">
                <pre class="w3-code notranslate jsHigh"><span class="jscolor">setInterval(myFunction,<span>&nbsp;</span><span class="jsnumbercolor">1000</span>);<br /><br /><span class="jskeywordcolor">function</span><span>&nbsp;</span>myFunction() {<br /> & nbsp;<span>&nbsp;</span><span class="jskeywordcolor">let</span><span>&nbsp;</span>d =<span>&nbsp;</span><span class="jskeywordcolor">new</span><span>&nbsp;</span>Date();<br />&nbsp; document.<span class="jspropertycolor">getElementById</span>(<span class="jsstringcolor">"demo"</span>).<span class="jspropertycolor">innerHTML=</span><br />&nbsp; d.<span class="jspropertycolor">getHours</span>() +<span>&nbsp;</span><span class="jsstringcolor">":"</span><span>&nbsp;</span>+<br />&nbsp; d.<span class="jspropertycolor">getMinutes</span>() +<span>&nbsp;</span><span class="jsstringcolor">":"</span><span>&nbsp;</span>+<br />&nbsp; d.<span class="jspropertycolor">getSeconds</span>();<br />}</span></pre>
                <p>See it in action here: <a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback6" target="_blank" rel="noopener">https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback6</a></p>
                <p>In these examples, myFunction is the callback function, which is executed when the timer or interval functions resolve.&nbsp;&nbsp;</p>
                <p>This also comes up on loading a file, which also executes asynchronously, so our overall program does halt execution while we wait for a file to load.&nbsp;</p>
                {/* <pre><span class="jskeywordcolor">function</span><span>&nbsp;myDisplayer(some) {</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>document.</span><span class="jspropertycolor">getElementById</span><span>(</span><span class="jsstringcolor">"demo"</span><span>).</span><span class="jspropertycolor">innerHTML</span><span>&nbsp;= some;</span><br /><span>}</span><br /><br /><span class="jskeywordcolor">function</span><span>&nbsp;getFile(myCallback) {</span><br /><span>&nbsp;&nbsp;</span><span class="jskeywordcolor">let</span><span>&nbsp;req =&nbsp;</span><span class="jskeywordcolor">new</span><span>&nbsp;XMLHttpRequest();</span><br /><span>&nbsp; req.</span><span class="jspropertycolor">open</span><span>(</span><span class="jsstringcolor">'GET'</span><span>,&nbsp;</span><span class="jsstringcolor">"mycar.html"</span><span>);</span><br /><span>&nbsp; req.</span><span class="jspropertycolor">onload</span><span>&nbsp;=&nbsp;</span><span class="jskeywordcolor">function</span><span>() {</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="jskeywordcolor">if</span><span>&nbsp;(req.</span><span class="jspropertycolor">status</span><span>&nbsp;==&nbsp;</span><span class="jsnumbercolor">200</span><span>) {</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; myCallback(</span><span class="jskeywordcolor">this</span><span>.</span><span class="jspropertycolor">responseText</span><span>);</span><br /><span>&nbsp;&nbsp;&nbsp; }&nbsp;</span><span class="jskeywordcolor">else</span><span>&nbsp;{</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; myCallback(</span><span class="jsstringcolor">"Error: "</span><span>&nbsp;+ req.</span><span class="jspropertycolor">status</span><span>);</span><br /><span>&nbsp;&nbsp;&nbsp; }</span><br /><span>&nbsp; }</span><br /><span>&nbsp; req.</span><span class="jspropertycolor">send</span><span>();</span><br /><span>}</span><br /><br /><span>getFile(myDisplayer);</span></pre> */}
                <p><span><strong>Promises</strong> are another approach in Javascript for handling asynchronous code.</span></p>
                <h3><strong>Promises</strong></h3>
                <p>w3 schools walks through this: <a href="https://www.w3schools.com/Js/js_promise.asp" target="_blank" rel="noopener">https://www.w3schools.com/Js/js_promise.asp</a></p>
                <p>Here's the structure of a promise:</p>
                <pre><span class="jskeywordcolor">let</span><span>&nbsp;myPromise =&nbsp;</span><span class="jskeywordcolor">new</span><span>&nbsp;Promise(</span><span class="jskeywordcolor">function</span><span>(myResolve, myReject) {</span><br /><span class="commentcolor">// "Producing Code" (May take some time)<br /></span><br /><span>&nbsp; myResolve();&nbsp;</span><span class="commentcolor">// when successful<br /></span><span>&nbsp; myReject(); &nbsp;</span><span class="commentcolor">// when error<br /></span><span>});</span><br /><br /><span class="commentcolor">// "Consuming Code" (Must wait for a fulfilled Promise)<br /></span><span>myPromise.</span><span class="jskeywordcolor">then</span><span>(</span><br /><span>&nbsp;&nbsp;</span><span class="jskeywordcolor">function</span><span>(value) {& nbsp;</span><span class="jsregexpcolor">/* code if successful */</span><span>&nbsp;},</span><br /><span>&nbsp;&nbsp;</span><span class="jskeywordcolor">function</span><span>(error) {& nbsp;</span><span class="jsregexpcolor">/* code if some error */</span><span>&nbsp;}</span><br /><span>);</span></pre>
                <p>Remember the file reading example above?&nbsp; Here's how we do it with a promise.</p>
                <pre><span class="jskeywordcolor">let</span><span>&nbsp;myPromise =&nbsp;</span><span class="jskeywordcolor">new</span><span>&nbsp;Promise(</span><span class="jskeywordcolor">function</span><span>(myResolve, myReject) {</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span class="jskeywordcolor">let</span><span>&nbsp;req =&nbsp;</span><span class="jskeywordcolor">new</span><span>&nbsp;XMLHttpRequest();</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>req.</span><span class="jspropertycolor">open</span><span>(</span><span class="jsstringcolor">'GET'</span><span>,&nbsp;</span><span class="jsstringcolor">"mycar.htm"</span><span>);</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>req.</span><span class="jspropertycolor">onload</span><span>&nbsp;=&nbsp;</span><span class="jskeywordcolor">function</span><span>() {</span><br /><span>&nbsp;&nbsp;&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span class="jskeywordcolor">if</span><span>&nbsp;(req.</span><span class="jspropertycolor">status</span><span>&nbsp;==&nbsp;</span><span class="jsnumbercolor">200</span><span>) {</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>myResolve(req.</span><span class="jspropertycolor">response</span><span>);</span><br /><span>&nbsp;&nbsp;&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>}&nbsp;</span><span class="jskeywordcolor">else</span><span>&nbsp;{</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>myReject(</span><span class="jsstringcolor">"File not Found"</span><span>);</span><br /><span>&nbsp;&nbsp;&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span>}</span><br /><span>&nbsp; };</span><br /><span>&nbsp; req.</span><span class="jspropertycolor">send</span><span>();</span><br /><span>});</span><br /><br /><span>myPromise.</span><span class="jskeywordcolor">then</span><span>(</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span class="jskeywordcolor">function</span><span>(value) {myDisplayer(value);},</span><br /><span>&nbsp;</span><span class="jsnumbercolor"><span>&nbsp;</span></span><span class="jskeywordcolor">function</span><span>(error) {myDisplayer(error);}</span><br /><span>);</span></pre>
            </div>
            <h2><strong>Javascript array functions</strong></h2>
            <p>Javascript has a number of interesting array functions that can make your life easier.&nbsp;</p>
            <p>Javascript provides several helpful functions for operating on arrays that use functional programming syntax.&nbsp; These are<span>&nbsp;</span><strong>higher order functions.</strong>&nbsp;</p>
            <h3><strong>1. Filter</strong></h3>
            <p><strong>Filter (callback )-<span>&nbsp;</span><span>&nbsp;creates a new array with just elements that meet the condition in your callback function.&nbsp;</span></strong></p>
            <pre><span class="pl-c">// ---- Filter Example 1 - Get all cities except London ---- </span> <br /><span class="pl-c">//https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/0_Web_Tutorial<br /><br /></span> <span class="pl-k">const</span> <span class="pl-s1">cities</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-s">"Vienna"</span><span class="pl-kos">,</span> <span class="pl-s">"Paris"</span><span class="pl-kos">,</span> <span class="pl-s">"London"</span><span class="pl-kos">,</span> <span class="pl-s">"London"</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

                <span class="pl-c">// Pass an anonymous function with arrow notation to cities.filter()</span>
                <span class="pl-k">const</span> <span class="pl-s1">filteredCities</span> <span class="pl-c1">=</span> <span class="pl-s1">cities</span><span class="pl-kos">.</span><span class="pl-en">filter</span><span class="pl-kos">(</span><span class="pl-s1">city</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">city</span> <span class="pl-c1">!=</span> <span class="pl-s">"London"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

                <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">filteredCities</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// Returns: ["Vienna", "Paris"]</span>


                <span class="pl-c">// ---- Filter Example 2 - Get all numbers which are &gt;= 10 and have array indices &gt; 3 ---- </span>

                <span class="pl-k">const</span> <span class="pl-s1">numericData</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">20</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-c1">40</span><span class="pl-kos">,</span> <span class="pl-c1">5</span><span class="pl-kos">,</span> <span class="pl-c1">60</span><span class="pl-kos">,</span> <span class="pl-c1">7</span><span class="pl-kos">,</span> <span class="pl-c1">80</span><span class="pl-kos">]</span><span class="pl-kos">;</span>

                <span class="pl-c">// Anonymous function takes the array element's current value and index as parameters</span>
                <span class="pl-k">const</span> <span class="pl-s1">filteredNumericData</span> <span class="pl-c1">=</span> <span class="pl-s1">numericData</span><span class="pl-kos">.</span><span class="pl-en">filter</span><span class="pl-kos">(</span> <span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">,</span> <span class="pl-s1">index</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
                <span class="pl-k">return</span> <span class="pl-kos">(</span><span class="pl-s1">value</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1">10</span><span class="pl-kos">)</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-kos">(</span><span class="pl-s1">index</span> <span class="pl-c1">&gt;</span> <span class="pl-c1">3</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

                <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">filteredNumericData</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// Returns: [60, 80]</span></pre>
            <h3><strong>2. Sort</strong></h3>
            <p><strong>sort() - sorts elements (inline).&nbsp; You can write a custom sorting function, and pass it as a parameter.&nbsp;</strong></p>
            <pre><span class="pl-c">// ---- Sort Example 1 - Filter array with strings (default sorting) ---- </span>

                <span class="pl-k">const</span> <span class="pl-s1">cities</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-s">"Vienna"</span><span class="pl-kos">,</span> <span class="pl-s">"Paris"</span><span class="pl-kos">,</span> <span class="pl-s">"London"</span><span class="pl-kos">,</span> <span class="pl-s">"Munich"</span><span class="pl-kos">,</span> <span class="pl-s">"Toronto"</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
                <span class="pl-s1">cities</span><span class="pl-kos">.</span><span class="pl-en">sort</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
                <span class="pl-s1">cities</span>   <span class="pl-c">// Returns: ["London", "Munich", "Paris", "Toronto", "Vienna"]</span>


                <span class="pl-c">// ---- Sort Example 2 - Filter array with objects ---- </span>
                <span class="pl-c">// We are specifying a function that defines the sort order</span> <br /><span class="pl-c">//https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/0_Web_Tutorial<br /></span><br /> <span class="pl-k">const</span> <span class="pl-s1">products</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"laptop"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>: <span class="pl-c1">800</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"phone"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>:<span class="pl-c1">200</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"tv"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>: <span class="pl-c1">1200</span><span class="pl-kos">}</span>
                <span class="pl-kos">]</span><span class="pl-kos">;</span>

                <span class="pl-c">// Sort ascending by the 'price' property</span>
                <span class="pl-s1">products</span><span class="pl-kos">.</span><span class="pl-en">sort</span><span class="pl-kos">(</span> <span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">,</span> <span class="pl-s1">b</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
                <span class="pl-k">return</span> <span class="pl-s1">a</span><span class="pl-kos">.</span><span class="pl-c1">price</span> <span class="pl-c1">-</span> <span class="pl-s1">b</span><span class="pl-kos">.</span><span class="pl-c1">price</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

                <span class="pl-c">// Sort descending by the 'price' property</span>
                <span class="pl-s1">products</span><span class="pl-kos">.</span><span class="pl-en">sort</span><span class="pl-kos">(</span> <span class="pl-kos">(</span><span class="pl-s1">a</span><span class="pl-kos">,</span> <span class="pl-s1">b</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
                <span class="pl-k">return</span> <span class="pl-s1">b</span><span class="pl-kos">.</span><span class="pl-c1">price</span> <span class="pl-c1">-</span> <span class="pl-s1">a</span><span class="pl-kos">.</span><span class="pl-c1">price</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
            <h3><strong>3. Map</strong></h3>
            <p><strong>map(functionCall)- create a new array, where the original elements in the array are modified using a function you provide</strong></p>
            <pre><span class="pl-c">// ---- Map Example 1 - Calculate the square root ----<br />//https://github.com/UBC-InfoVis/2021-436V-tutorials/tree/master/0_Web_Tutorial<br /></span>
                <span class="pl-k">const</span> <span class="pl-s1">numericData</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-c1">9</span><span class="pl-kos">]</span><span class="pl-kos">;</span>
                <span class="pl-k">const</span> <span class="pl-s1">roots</span> <span class="pl-c1">=</span> <span class="pl-s1">numericData</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-c1">sqrt</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

                <span class="pl-s1">roots</span>    <span class="pl-c">// Returns: [1, 2, 3]</span>


                <span class="pl-c">// ---- Map Example 2 - Double the prices ---- </span>

                <span class="pl-k">const</span> <span class="pl-s1">products</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"laptop"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>: <span class="pl-c1">800</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"phone"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>:<span class="pl-c1">200</span><span class="pl-kos">}</span><span class="pl-kos">,</span>
                <span class="pl-kos">{</span> <span class="pl-c1">name</span>: <span class="pl-s">"tv"</span><span class="pl-kos">,</span> <span class="pl-c1">price</span>: <span class="pl-c1">1200</span><span class="pl-kos">}</span>
                <span class="pl-kos">]</span><span class="pl-kos">;</span>

                <span class="pl-k">const</span> <span class="pl-s1">expensiveProducts</span> <span class="pl-c1">=</span> <span class="pl-s1">products</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-s1">doublePrice</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

                <span class="pl-k">function</span> <span class="pl-en">doublePrice</span><span class="pl-kos">(</span><span class="pl-s1">elem</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
                <span class="pl-s1">elem</span><span class="pl-kos">.</span><span class="pl-c1">price</span> <span class="pl-c1">=</span> <span class="pl-s1">elem</span><span class="pl-kos">.</span><span class="pl-c1">price</span> <span class="pl-c1">*</span> <span class="pl-c1">2</span><span class="pl-kos">;</span>
                <span class="pl-k">return</span> <span class="pl-s1">elem</span><span class="pl-kos">;</span>
                <span class="pl-kos">}</span>

                <span class="pl-s1">expensiveProducts;</span> <span class="pl-c">// Returns: [{name: "laptop", price: 1600 }, {name: "phone", price:400}, {name: "tv", price: 2400}]</span><br /><br /></pre>
            <h3><strong>4. Join</strong></h3>
            <p>The join method takes an array, and returns a string with all elements joined together.</p>
            <pre>const fruits = ["Banana", "Orange", "Apple", "Mango"];<br />let text = fruits.join(" and ");<br /><br />document.getElementById("demo").innerHTML = text;<br />//produces a string Banana and Orange and Apple and Mango. </pre>
            <h3><strong>5. Reduce</strong></h3>
            <p>Reduce takes an array and reduces it to a single value, using a sequential protocol you pass it in a function.&nbsp;</p>
            <p>Suppose you want to round the numbers in an array and compute a sum:</p>
            <pre>const numbers = [15.5, 2.3, 1.1, 4.7];<br /><br />document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);<br /><br />function getSum(total, num) {<br /> & nbsp; return total + Math.round(num);<br />}</pre>
            <p>One more note on Arrays in Javascript: Spread and Destructing Arrays,</p>
            <h3><strong>Arrays: Spread and Destructing</strong></h3>
            <p>The spread operator&nbsp; ( ... ) allows you to quickly copy all of an array (or part of an array) into another array.&nbsp;</p>
            <pre>const numbersOne = [1, 2, 3];<br />const numbersTwo = [4, 5, 6];<br />const numbersCombined = [...numbersOne, ...numbersTwo];</pre>
            <p>The result is one array with all the numbers in it.&nbsp;</p>
            <p>What about splitting an array up into multiple arrays?</p>
            <pre>const numbers = [1, 2, 3, 4, 5, 6];<br /><br />const [one, two, ...rest] = numbers;<br /><br />document.write("&lt;p&gt;" + one + "&lt;/p&gt;"); //outputs 1<br />document.write("&lt;p&gt;" + two + "&lt;/p&gt;"); // outputs 2<br />document.write("&lt;p&gt;" + rest + "&lt;/p&gt;"); // outputs 3, 4, 5, 6, </pre>
            <p>These are convenience functions, and you may see this spread operator in example Javascript code.&nbsp;&nbsp;</p>
        </>
    )
}

export default UIT05