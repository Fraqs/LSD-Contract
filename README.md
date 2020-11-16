  
  
  
  
  
#  LSD Project Contract | GitHub NPM Module
  
  
_Large System Development, fall 2020_
  
**Stephan Duelund Djurhuus**
  
![cover image](/assets/cover.png?0.5893448898315765 )  
  
##  Content
  
  
- [Components](/#components )
- [Installation](/#installation )
- [Usage](/#usage )
  
##  Components
  
  
-   [Backend](https://github.com/Fraqs/LSD-Project.Backend ), Handles Database Management.
-   [Frontend](https://github.com/Fraqs/LSD-Project.Frontend ), Handles REST API and Server Sided Rendering.
-   [Contract](https://github.com/Fraqs/LSD-Project.Contract ), Handles Contract Interface & Data Transfer Objects.
-   [Project Wiki](https://github.com/Fraqs/LSD-Project.Contract/wiki ), Assignments & Descriptions
  
##  Installation
  
  
```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```
  
> Installing dependencies after this may force you to reinstall it due to cached `yarn.lock` doesn't contain GitHub modules.
  
##  Usage
  
  
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
  
## 
  
  
Software Development @ Copenhagen Business Academy, Denmark 2020
  