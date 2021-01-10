module.exports = function check(str, bracketsConfig) {
  const arr = [],
  open = [],
  close = []
  bracketsConfig.forEach((i) => {
    open.push(i[0])
    close.push(i[1])
  })
  for (let i = 0; i < str.length; i++) {
    if (close.includes(str[i]) && arr.length > 0) {
      const bracket = open[close.indexOf(str[i])];
      if (arr[arr.length - 1] === bracket || arr[arr.length - 1] === str[i]) {
        arr.pop()
      } else if (str[i] !== bracket) {
        return false;
      } else {
        arr.push(str[i])
      }
    } else {
      arr.push(str[i])
    }
  }
  return arr.length === 0
}
