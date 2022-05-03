export const transformStr = (str: string) => {
  let strArr = str.split('');
  return `${strArr[0].toUpperCase()}${strArr.slice(1).join('')}`;
};
