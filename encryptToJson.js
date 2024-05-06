const XDC3 = require('xdc3');
const readlineSync = require('readline-sync');
const fs = require('fs');

//Letter Color
const RED     = '\u001b[31m';
const YELLOW  = '\u001b[33m';
const RESET   = '\u001b[0m';

//RPC
const RPC = 'https://rpc.ankr.com/xdc';

function formattedDateTime(date) {
  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  const h = ('0' + date.getHours()).slice(-2);
  const mi = ('0' + date.getMinutes()).slice(-2);
  const s = ('0' + date.getSeconds()).slice(-2);

  return y + '_' + m + '_' + d + '_' + h + '_' + mi + '_' + s;
}

async function main() {
    const date = new Date();
    const currentTime = formattedDateTime(date);

    console.log(YELLOW);
    console.log('=================================================================================');
    console.log('If PrivateKey is leaked, your assets will be taken away.');
    console.log('Please be careful not to let others see you.');
    console.log('PrivateKeyは流出すると資産を奪われます。他人に見られないように注意してください。');
    console.log('=================================================================================');
    console.log(RESET);

    try {
        const privatekey = readlineSync.question('Enter privateKey: ', { hideEchoBack: true });
        const password = readlineSync.question('Enter password: ', { hideEchoBack: true });
        const xdc3 = new XDC3(new XDC3.providers.HttpProvider(RPC));

        const jsondata = await xdc3.eth.accounts.encrypt(privatekey, password);
        const jsonfile = 'keys_' + currentTime + '.json';
        fs.writeFileSync(jsonfile, JSON.stringify(jsondata));

    } catch(e) {
        console.log("["+e.name+"]"+e.message);
    }
}

main();
