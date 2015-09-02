# WEB AUDIO UTILS
[![Build Status](http://img.shields.io/travis/mohayonao/web-audio-utils.svg?style=flat-square)](https://travis-ci.org/mohayonao/web-audio-utils)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/web-audio-utils.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/web-audio-utils)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> Utility functions for Web Audio API

## Installation

Node.js

```sh
npm install @mohayonao/web-audio-utils
```

## API

- `createAudioBufferFromArray(array: Float32Array[], [ audioContext ]): AudioBuffer`
- `createPeriodicWave(wave: object, [ audioContext ]): PeriodicWave`
  - `wave: { real: Float32Array, imag: Float32Array}`
  - this function is for [wave-tables](https://github.com/mohayonao/wave-tables).
- `enableCustomAudioNode(): void`
- `enableMobileAutoPlay([ audioContext, callback ]): void`
- `fetchAudioBuffer(path: string, [ audioContext ]): Promise<AudioBuffer>`
  - fetch && decode
- `getAudioContext(): AudioContext`
  - return an AudioContext as singleton
- `splitAudioBuffer(audioBuffer: AudioBuffer, n: number): AudioBuffer[]`

## License
MIT
