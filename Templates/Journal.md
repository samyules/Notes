---
Created: <% tp.file.creation_date() %>
Last Modified: '<% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>'
Tags: [ daily ]
<%*
var fileDate = moment(tp.file.title);
-%>
---
# <% tp.file.title %>
<% tp.web.daily_quote() %>

## Journal

<% tp.file.cursor() %>

## Tasks

- [ ] First Task
- [!] Important Task

## How did the day go?



## What can you do better?



<%*
function month() {
    let fileDateNum = fileDate.date();
    let numDays = fileDate.daysInMonth();
    // ignore leapyears
    tR += tp.user.makeProgressBar(fileDateNum, numDays, size=numDays, filledChar = "█", unFilledChar = "◽", label="Month");
}
month();
-%>
  
<%*
function year() {
    let dayNum = fileDate.dayOfYear();
    // ignore leapyears
    tR += tp.user.makeProgressBar(dayNum, 365, size=33,filledChar = "█", unFilledChar = "◽", label="Year");
}
year();
%>