<%*
let qcFileName = await tp.system.prompt("Note Title")
titleName = tp.date.now("YYYY-MM-DD") + " " + qcFileName
await tp.file.rename(titleName)
await tp.file.move("/Fleeting---
title: Using Templater
date: 2022-10-24 11:36:24
tags: quick_note
---

<% tp.file.cursor() %>
 Notes/" + titleName);
-%>
---
title: <% qcFileName %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
tags: quick_note
---

<% tp.file.cursor() %>
