function UIT03() {
    return (
        <>
            <h4>Code editors:</h4>
            <p>You have 2 basic choices: Use a basic editor, like Sublime text or Atom.&nbsp;&nbsp;</p>
            <p>OR you can use something like Webstorm or Visual Studio.&nbsp;</p>
            <p>This is largely a matter of preference. You just need to be able to coordinate with your group on group projects.&nbsp;</p>
            <h4><strong>Local web server:</strong></h4>
            <p>When you dynamically load a data file, or do other dynamic work, you need to start a local webserver to view your code running in the browser.&nbsp; This will not share your project on the internet, but you can view it on your computer, in a browser, whenever your local server is running.&nbsp;</p>
            <p>In the command line, go to the directory where your project files are stored.&nbsp; The example below I am running in a directory of d3 examples.&nbsp;</p>
            <p>Then :</p>
            <ul>
                <li>
                    <p>For Python 2, use<span>&nbsp;</span><code>python -m SimpleHTTPServer [PORT-NUMBER]</code>.</p>
                </li>
                <li>
                    <p>For Python 3, use<span>&nbsp;</span><code>python -m http.server [PORT-NUMBER]</code></p>
                </li>
            </ul>
            <p>For example: python -m http.server 8000</p>
            <p><img src="https://uc.instructure.com/courses/1526754/files/152191485/preview" alt="Screen Shot 2022-01-20 at 1.55.49 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1526754/files/152191485" data-api-returntype="File" data-id="152191485" /></p>
            <p>Then, you go to the localhost address, and you can see your directory.&nbsp;</p>
            <p><img src="https://uc.instructure.com/courses/1546040/files/159238979/preview" alt="Screen Shot 2022-09-19 at 1.14.49 PM.png" data-api-endpoint="https://uc.instructure.com/api/v1/courses/1546040/files/159238979" data-api-returntype="File" /></p>
            <h3><strong>Visual Studio?</strong></h3>
            <p>If you use visual studio, you can install Live Server</p>
            <p><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener">https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer</a></p>
            <p>&nbsp;</p>
        </>
    )
}

export default UIT03