---
<%*
// Request a web page
let url = await tp.system.clipboard()
let page = await tp.obsidian.request({url})
let p = new DOMParser()
let doc = p.parseFromString(page, "text/html")
-%>
url: "<% tp.user.youtube('url', tp, doc) %>"
aliases: ["<% tp.user.youtube('title', tp, doc) %>"]
channel: "<% tp.user.youtube('channel', tp, doc) %>"
published: <% tp.user.youtube('published', tp, doc) %>
thumbnail: "<% tp.user.youtube('thumbnail', tp, doc) %>"
keywords: [<% tp.user.youtube('keywordsQ', tp, doc) %>]
duration: <% tp.user.youtube('duration', tp, doc) %>
---

# <% tp.user.youtube('title', tp, doc) %>

<% tp.user.youtube('description', tp, doc) %>