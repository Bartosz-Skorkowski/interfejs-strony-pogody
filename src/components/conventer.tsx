export const cToF = (c: number) => Math.round(c * 9/5 + 32);
export const fToC = (f: number) => Math.round((f - 32) * 5/9);
export const kmhToMph = (kmh: number) => Math.round(kmh / 1.609);
export const mphToKmh = (mph: number) => Math.round(mph * 1.609);
export const mmToIn = (mm: number) => Math.round(mm / 25.4);
export const inToMm = (inch: number) => Math.round(inch * 25.4);