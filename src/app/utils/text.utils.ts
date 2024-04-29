export function textCompare(a: string, b: string): boolean {
  if (!a || !b) {
    return false;
  }
  a = formatString(a);
  b = formatString(b);
  return a === b;
}

export function answerCompare(a: string | null, b: string | null): boolean {
  if(!a && b || a && !b) {
    return false;
  } else if(!a && !b) {
    return true;
  }
  a = removeSpecialSymbols(a);
  b = removeSpecialSymbols(b);
  return a === b;
}

export function generatorID(length = 16): string {
  const symbols = 'abcdefghijklmnopqrstuvwxyz123456789';
  let result = '';
  for (let i = 0; i <= length; i++) {
    result += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return result;
}

export function formatString(string: string | null): string {
  if (!string) {
    return '';
  }
  string = string.toLowerCase();
  string = string.replace(/\s+/gi, ' ');
  string = string.replace(/<[^>]*>?/gi, ' ');
  string = string.replace(/__+/gi, '____');
  return string;
}

export function fileUrl(file: File): string {
  if (!file) {
    return '';
  }
  const blob = window.URL ?? window.webkitURL;
  return blob.createObjectURL(file);
}

export function textInclude(a: string | null, b: string | null): boolean {
  if (!a || !b) {
    return false;
  }
  const regex = new RegExp(b, 'gi');
  return !!a.match(regex);
}

export function removeSpecialSymbols(a: string | null): string {
  if(!a?.trim()) {
    return '';
  }
  a = a.trim();
  a = a.replace(/\s{2,}/g, ' ');
  a = a.replace(/[^a-z0-9\s]/gi, '');
  a = a.toLowerCase();
  return a;
}