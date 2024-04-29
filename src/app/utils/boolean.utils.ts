import { SIMPLE_TYPES, ENUMARABLE_TYPES } from '@constants/types.constants';

export function isFileExist(file: File, files: File[]): boolean {
  let isExist = false;
  for (const currentFile of files) {
    const isSize = currentFile.size === file.size;
    const isLastModified = currentFile.lastModified === file.lastModified;
    const isName = currentFile.name === file.name;
    if (isSize && isLastModified && isName) {
      isExist = true;
      break;
    }
  }
  return isExist;
}

export function isEqualObject<T extends object>(x: T, y: T): boolean {
  const xType = ENUMARABLE_TYPES.indexOf(typeof x) !== -1;
  const yType = ENUMARABLE_TYPES.indexOf(typeof y) !== -1;
  if ((!x && y) || (x && !y) || !xType || !yType) {
    return false;
  }
  for (const key in x) {
    const xData = x[key];
    const yData = y[key];
    if ((xData && !yData) || (!xData && yData)) {
      return false;
    }
    if (SIMPLE_TYPES.indexOf(typeof xData) !== -1 && xData !== yData) {
      return false;
    }
    if (Array.isArray(xData)) {
      if (!isEqualArray(xData, yData)) {
        return false;
      }
    }
    if (ENUMARABLE_TYPES.indexOf(typeof xData) !== -1) {
      if (!isEqualObject(<object>xData, <object>yData)) {
        return false;
      }
    }
  }
  return true;
}

export function isEqualArray(x: any, y: any): boolean {
  if ((!x && y) || (x && !y) || x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    const xData = x[i];
    const yData = y[i];
    if (SIMPLE_TYPES.includes(typeof xData) && xData !== yData) {
      return false;
    } else if (Array.isArray(xData)) {
      if (!isEqualArray(xData, yData)) {
        return false;
      }
    } else if (ENUMARABLE_TYPES.includes(typeof xData)) {
      if (!isEqualObject(xData, yData)) {
        return false;
      }
    }
  }
  return true;
}
