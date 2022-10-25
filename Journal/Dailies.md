```dataview
LIST file.day
FROM "Journal"
WHERE file.day <= date(now) AND file.name != this.file.name
SORT file.day DESC
LIMIT 1
```


`=LIST file.day FROM "Journal"`