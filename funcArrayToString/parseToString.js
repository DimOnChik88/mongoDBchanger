module.exports = function  parseToString(item) {
  if (item) {
    let toSTR = '';
    if (item.length > 1) {
      for ( let i = 0; i < item.length; i++ ) {
        toSTR = toSTR.concat('<br>', item[i]);
      }
    } else { toSTR = item[0]; }
    return toSTR;
  } else { return null; }
}