Copy Form Data
============

Stack overflow question: http://stackoverflow.com/questions/14695651/javascript-copy-form-from-one-page-to-another-form-on-another-page/14695703#comment20584517_14695703

The question is how one can have a form and copy the values entered into that form into the fields on another web page. The most simple way shown here is to load the other webpage, hide it, and show the custom form while it is loading. When the user submits the custom form, it will show the original form and insert the data into that form, and hide the custom one.

Method:
1. Hide the "original form" container.
2. Download the original form while the user fills out the custom form. When done, fill the container with the downloaded data.
3. When the user submits the custom form, hide it, and show the original form, and fill in the values from the custom form
