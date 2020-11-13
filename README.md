  
  
  
  
  
#  LSD Project Contract | GitHub NPM Module
  
  
_Large System Development, fall 2020_
  
**Stephan Duelund Djurhuus**
  
![cover image](/assets/cover.png?0.3787359857830821 )  
  
##  Content
  
  
- [Installation](/#installation )
- [Usage](/#usage )
  
##  Installation
  
  
```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```
  
> Installing dependencies after this may force you to reinstall it due to cached `yarn.lock` doesnt conatin GitHub modules.
  
##  Usage
  
  
Import contract interface.
  
```js
// typescript
import IContract from 'contract';
```
  
import DTO's.
  
```js
// typescript
import { IBookingDetail } from 'contract/src/dto/booking';
```
  
> The `dto` folder contains a variety of entities, `booking` is just an example.
  
import ETO's.
  
```js
// typescript
import { NotFoundError } from 'contract/src/eto';
```
  
## 
  
  
Software Development @ Copenhagen Business Academy, Denmark 2020
  