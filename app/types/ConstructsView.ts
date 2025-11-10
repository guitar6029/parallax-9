export const VIEW_STATES = {
  COMPACT: "compact",
  SELECTION: "selection",
  PLAYING: "playing",
} as const;

export type ViewState = (typeof VIEW_STATES)[keyof typeof VIEW_STATES];
