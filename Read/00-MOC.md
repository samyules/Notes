# Books
```button
name New Book
type note(New Book, split) template
action Book
```
---
```dataview
TABLE coverArt AS Cover, author AS Author, summary AS Summary, startedReading AS "Started Reading"
FROM #media AND -"Templates"
WHERE type = "Book"
```