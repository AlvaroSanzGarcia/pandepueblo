// formSubmit.js displays a window on the browser when a form is submitted (copied from T7 Coding Challenge 1)
//
// Author: Cengage
// Date Copied: 2024/12/15

"use strict";

window.onload = function() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {
            alert("Form Submitted");
            return false;
        }
    };
};