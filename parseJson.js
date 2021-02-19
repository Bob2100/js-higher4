const json = {
  "a": [
    {
      "b": "c"
    },
    "d"
  ],
  "x": 1
}

function get(json, express) {
  function getValue(obj, key) {
    if (key.indexOf('[') == -1) {
      return obj[key];
    }
    const tempArr = key.split('[');
    const realKey = tempArr[0];
    const index = tempArr[1].split(']')[0];
    return obj[realKey][index];
  }

  const keyChainArr = express.split('.');
  let value = json;
  for (let i = 0; i < keyChainArr.length; i++) {
    value = getValue(value, keyChainArr[i]);
  }
  return value;
}

console.log(get(json, 'a[0].b') == 'c');//true
console.log(get(json, 'a[1]') == 'd');//true