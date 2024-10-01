---
sidebar_position: 1
---

# Introduction

These docs are meant for members of Parlanchín or contributors to Idiom. Before working on the project we'll need to set up your permissions and get any .env variables and other secrets to you. After that you can read the [installation](/docs/installation.md) instructions (pretty straightforward at the moment!).


## Overview
This overview will give you an idea of what the project is meant to achieve both in terms of what it currently is and what we hope it will be as we continue building it. Understanding broadly what we want users to get out of Idiom will help to better understand some of the core concepts and lead to a better understanding of and more productive discussions about how to build features from our roadmap.

## What is Idiom
Idiom is an app where users can create, store and practice vocabulary cards for foreign languages. The idea came from two basic impulses. First, physical vocab cards can be tedious to make, hard to organize and storing them can become messy. Idiom makes this easier and less messy. Second, an app can mimic many of the exercises which can be done with physical cards and offer some additional exercises on top of these.

Of course there may be advantages to hand writing physical cards and sorting them manually. Additionally,there are sure to be some exercises which can't be easily done in a digital environment. Idiom simply offers either an alternative way of practicing lexis or a complement to what learners already do.


### Creating Sets
Before starting exercises a user needs to select items to practice. They do this in one of three ways either by selecting individual words, selecting a fixed set, or by selecting labels.
#### By choosing labels:
One of the core concepts in Idiom is how sets can be created by choosing labels. When a user adds a word to their library it has a property `labels`. For example the word 'dog' might have the following labels `["domestic", "animal","happy","fun", "noun"]`. Another user might add the following labels to 'dog' `["domestic animal", "scary", "noun"]` or another still `["Fido", "childhood", "noun"]`. Labels can include word class, association, topic, positive or negative connotation etc... Except for word class there aren't really any "incorrect" labels, they simply have to mean something to the user. Clicking on labels within a folder will create a set of words based on those labels.
#### By choosing a fixed set:
Users are also able to create fixed sets of words by simply adding any individual words they like to a given set with a unique name. For example a user might create a set called "In the Apartment" and add words related to things and activities they associate with being home. They could also just add an "in the apartment" label to any words they'd like in this set and the result would be the same. However we wanted to support explicity creating sets as users may think slightly differently about how they want to label and group words. Some users may prefer limiting labels to only word class, gender, level of difficulty, broad categories etc... And use fixed sets for things like "unit 6 vocab", "Camus - Stranger -ch. 4" etc... Additionally, allowing sets to be created this way gives flexibility as a user can choose a set but then filter it to only include certain labels in that set.
#### By choosing individual words:
A final way in which users can select cards for an exercise is to simply go to the list of words within a given folder and select them individually. They can then choose to save this selection as a fixed set if they wish. 

## Structure of project
Idiom is built with the following stack.
* Next.js
* React
* Tailwind
* Node.js (Express)
* MongoDB

### Database Schema
From the user's perspective they will have folders and within those folders they will have a collection of sets (optional) and a collection of words. The original idea was that users studying multiple languages will dedicate a folder to each language and within that folder they have *all* of their words for that language. Users can however choose to organize their folders how they wish but need to keep in mind that folders are isolated from each other. We may provide support to merge folders (and unmerge them if need be) but conceptually they don't "communicate" with one another and the words within a folder can't be shuffled or practiced with the words from another. 

### USERS
```javascript
{
  _id: "user_id123",
  name: "John Doe",
  email: "john@example.com",
  password:"hashed_password"
  folder_ids: ["folder_id", "folder_id2"],
  lastSeen: date,
}
```

### FOLDERS
```javascript
{
  _id: "folder_id",
  name: "Spanish",
  *userId: "user_id123",  // Link to the user
  word_ids: ["word_id1", "word_id2", "word_id3"],
  set_ids: ["set_id1"]
}
```

### SETS
```javascript
{
  _id: "set_id1",
  name: "Basic Vocabulary",
  *folderId: "folder_id",  // links to the folder ...and to that folder's user
  word_ids: ["word_id1", "word_id4"]
}
```

### WORDS
```javascript
{
  _id: "word_id1",
  a: "dog",
  b: ["perro",...other meanings]
  *labels: ["animal", "basic", "noun"],
  score: 0,
  lastSeen: Date,
},
{
  _id: "word_id2",
  a: "run",
  b: ["correr", "manejar", "operar"]
  *labels: ["verb", "action"],
  score:7,
  lastSeen: Date,
}
```
### Indexing
Some decisions still need to be made about handling indexing. At the moment the properties with an * next to them are considered worth indexing for performance.