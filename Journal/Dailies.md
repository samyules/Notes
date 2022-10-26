Currently playing with some dataview:

This shows the prior day only:
```dataview
LIST file.day
FROM "Journal"
WHERE file.day <= date(now) AND file.name != this.file.name
SORT file.day DESC
LIMIT 1
```

Here is a link with a preview. ![[]]
![[2022-10-25]]