# rc-player

A simple react component to play and control audio file built on <audio> html5 element.


## Installation and Usage

[![NPM](https://nodei.co/npm/rc-player.png)](https://nodei.co/npm/rc-player/)

`npm i rc-player`

Playground: https://codesandbox.io/s/rc-player-ej2f8

## Props

  Prop | Type | Usage | Note
------------ | ------------- | ------------- | ------------------------------------------
`audioSource` | audio file | The audio file that plays in component | **REQUIRED**
`decrementPeriod` | Number | Decrement Period in seconds for fast backward playing | *default = 5*
`incrementPeriod` | Number | Increment Period in seconds for fast forward playing |  *default = 5*
`onIncrement` | Function | Fires in incrementing | () => {}
`onDecrement` | Function | Fires in decrementing | () => {}
`onPlay` | Function | Fires on play audio | () => {}
`onStop` | Function | Fires on stop audio | () => {}
`audioFunctions` | Object | Objects with `<audio>` properties keys and their values are the functions  | {}
`formatTime` | Function | Format time function | () => {} 