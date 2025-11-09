export function getHeightForCMCKey(index: number) {
  if (index <= 5) {
    return "5rem";
  } else if (index <= 10) {
    return "7rem";
  } else if (index <= 15) {
    return "8rem";
  } else {
    return "3rem";
  }
}
export function getWidthForCMCKey(index: number) {
  if (index <= 5) {
    return ".1rem";
  } else if (index <= 10) {
    return ".2rem";
  } else if (index <= 15) {
    return ".3rem";
  } else {
    return ".1rem";
  }
}
