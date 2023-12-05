const crt = require('./index');

const { error, data } = crt.CommOpen('COM4');
console.log(error, data);
const device = data.handle;
let res = crt.CRT310_CardSetting(device, 2, 1);
console.log(res);
res = crt.CRT310_CardPosition(device, 4);
console.log(res);
res = crt.CRT310_LEDSet(device, 0);
console.log(res);

