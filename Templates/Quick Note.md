<%*
/* found at http://www.macdrifter.com/2021/08/obsidian-templater-fun.html */
let qcFileName = await tp.system.prompt("Note Title")
titleName = qcFileName + " " + tp.date.now("YYYY-MM-DD")
await tp.file.rename(titleName)
await tp.file.move("/Fleeting/" + titleName);
-%>
---
title: <% qcFileName %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
tags: quick_note
topic: 
---
