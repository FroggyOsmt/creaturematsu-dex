/**
 * CreatureMatsu Petting Box
 *
 * Storage-only scaffold for future development.
 * This file is intentionally not loaded by index.html and creates no elements.
 * A future Box will reuse the petting/tickling behavior while swapping each
 * character's face, body, mouth and audio assets through a profile.
 */

const CREATUREMATSU_PETTING_BOX_DRAFT = Object.freeze({
  enabled: false,
  mount: null,

  position: Object.freeze({
    x: 0,
    y: 0,
    scale: 1
  }),

  profileTemplate: Object.freeze({
    id: "",
    assetPath: "",

    head: Object.freeze({
      idle: "",
      blink: Object.freeze([]),
      pet: "",
      laughClosed: "",
      laughBase: "",
      laughMouth: ""
    }),

    body: Object.freeze({
      idle: Object.freeze([]),
      tickle: "",
      tickleToIdle: ""
    }),

    audio: Object.freeze({
      purr: "",
      laugh: ""
    })
  }),

  characterProfiles: Object.freeze({})
});
