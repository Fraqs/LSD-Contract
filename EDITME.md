---
markdown:
    path: README.md
    image_dir: /assets
    absolute_image_path: true
export_on_save:
    markdown: true
---

<!-- ATTENTION
DON'T edit the README.md file! It will be overridden by this document.

This document is created with the vs-code extension - Markdown Preview Enhanced
> https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced
-->

# LSD Project Contract | GitHub NPM Module {ignore=true}

_Large System Development, fall 2020_

**Stephan Duelund Djurhuus**

@import "/assets/cover.png" {alt="cover image"}

## Content {ignore=true}

<!-- Auto-generated Table of Content -->

[toc]

## Components

-   [Backend](https://github.com/Fraqs/LSD-Project.Backend), Handles Database Management.
-   [Frontend](https://github.com/Fraqs/LSD-Project.Frontend), Handles REST API and Server Sided Rendering.
-   [Contract](https://github.com/Fraqs/LSD-Project.Contract), Handles Contract Interface & Data Transfer Objects.
-   [Project Wiki](https://github.com/Fraqs/LSD-Project.Contract/wiki), Assignments & Descriptions

## Installation

```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```

> Installing dependencies after this may force you to reinstall it due to cached `yarn.lock` doesn't contain GitHub modules.

## Usage

### Contract Interface

Import contract interface.

```js
// typescript
import IContract from 'contract';
```

### Data Transfer Objects

Import Data Transfer Objects.

```js
// typescript
import { IBookingDetail } from 'contract/dist/dto/booking';
```

> The `dto` folder contains a variety of entities, `booking` is just an example.

### Error Transfer Objects

Import Error Transfer Objects.

```js
// typescript
import { NotFoundError } from 'contract/dist/eto';
```

### Duck Typing

_"If it walks like a duck and it quacks like a duck, then it must be a duck"_

With duck typing objects doesn't have to be instantiated from a class. A simple `object` containing similar fields as the `class` or `interface` will be seen as an instance of it.

#### Interface Example

```javascript
// typescript
interface IPerson {
	name: string;
}

const p1: IPerson = { age: 123 }; // type error (missing field "name")
const p2: IPerson = { name: 'myName' }; // acceptable
```

#### Class Example

```javascript
// typescript
class Person {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const p1: Person = { age: 123 }; // type error (missing field "name")
const p2: Person = { name: 'myName' }; // acceptable
```

## {ignore=true}

Software Development @ Copenhagen Business Academy, Denmark 2020
