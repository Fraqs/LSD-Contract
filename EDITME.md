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

## Installation

```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```

> Installing dependencies after this may force you to reinstall it due to cached `yarn.lock` doesn't contain GitHub modules.

## Usage

Import contract interface.

```js
// typescript
import IContract from 'contract';
```

Import Data Transfer Objects.

```js
// typescript
import { IBookingDetail } from 'contract/src/dto/booking';
```

> The `dto` folder contains a variety of entities, `booking` is just an example.

Import Error Transfer Objects.

```js
// typescript
import { NotFoundError } from 'contract/src/eto';
```

## {ignore=true}

Software Development @ Copenhagen Business Academy, Denmark 2020
