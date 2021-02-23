
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )
dynamapping
======
function that replaces keys from dynamically specified objects within the values for a raw object

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )

[![Version](https://img.shields.io/npm/v/dynamapping.svg)](https://npmjs.org/package/dynamapping)
[![Downloads/week](https://img.shields.io/npm/dw/dynamapping.svg)](https://npmjs.org/package/dynamapping)
[![License](https://img.shields.io/npm/l/dynamapping.svg)](https://github.com/YizYah/dynamapping/blob/master/package.json)

[![Geenee](https://img.shields.io/badge/maintained%20by-geenee-brightgreen)](https://npmjs.org/package/geenee)
[![Template](https://img.shields.io/badge/template-ts--packrat-blue)](https://npmjs.org/package/ts-packrat)

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__start_section api )


[//]: # ( ns__custom_start APIIntro )

# Why
You may want to update objects retrieved from a static source (such as a file) using a session with dynamically set values. It's a pain to set up the logic of mapping through session data and calling replace.

# What
A single function that you can pass in a flat object to and replace strings in the object values with your session values.

# How
Include the function with 
```
npm i dynamapping
```

Then you can include it as follows:
```
const dynamapping = require('dynamapping')
object = dynamapping( object, session, {})
```
Notes: 

1. `object` currently needs to be of depth 1 (no recursion is currently implemented.)
2. you can currently use one of two mappings: `session` and `answer`.  (The `session` object is so named to be generic.  The `answer` object can be useful for an interactive session, for instance using [inquirer](https://www.npmjs.com/package/inquirer)).

[//]: # ( ns__custom_end APIIntro )


[//]: # ( ns__custom_start constantsIntro )
[//]: # ( ns__custom_end constantsIntro )



[//]: # ( ns__start_section types )


[//]: # ( ns__end_section types )


[//]: # ( ns__end_section api )

