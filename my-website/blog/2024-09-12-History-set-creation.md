---
slug: set-creation
title: Creating Sets - From Client to Server
authors: mrueter
tags: [history]
---

As I began this project before knowing any backend development I only had the option of mutating my data on the client. Given I was handling a small amount of data this wasn't hitting any performance issues and worked fine.

 **Initial structure of the data**
```javascript
const library = [
  {id: 31, a: 'chien', b: 'dog', folder: "demo-French", labels: ["basic", "animals"], isDemo: true},
  {id: 32, a: 'chat', b: 'cat', folder: "demo-French", labels: ["basic", "animals"], isDemo: true},
  {id: 33, a: 'oiseau', b: 'bird', folder: "demo-French", labels: ["basic", "animals"], isDemo: true},
  {id: 34, a: 'poisson', b: 'fish', folder: "demo-French", labels: ["basic", "animals"], isDemo: true},
  // etc...
]
```
At the time I had no backend or database but wanted the user to be able to create sets of vocabulary cards given a `library` of word items. Set creation was based on the user selecting a `folder`and then selecting 1+ `labels`. This would then creat a `set`of words which had at least one of the labels in it's `labels` array.

I created some utility functions to help out. 
1. `getFolder(folderName:string)` which would return an array of all of the word items whose `folder`property matched the `folderName`string passed in as an argument.
2. `createSet(folder:[obj], labels:[string])` which would return an array of all of the words in a given folder whose `labels` property contained one or more of the labels in the passed in `labels` array.

Additionally, I wanted to randomly sort the sets so that the user wasn't always seeing words in the same order during the exercises.
3. `shuffleArray([obj])` is a util I created to take an array of objects and randomly reorder them. 

This was back around the first quarter of 2023 (if I recall) and though I knew calculations, paginations and other business should be done on the backend I was limited by my knowledge and experience and still wanted to create these exercises. So in the meantime I enjoyed making these utils and using them within the app I was building knowing that they could be moved to the backend at some point.

That "some point" has taken a while as I've been working on other projects (in addition to having learned some back end development). As of this writing I am designing the API and hope soon to move this logic there.