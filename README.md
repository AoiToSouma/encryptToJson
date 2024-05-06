# encryptToJson
Create a json file that encrypts the private key with a password of your choice and records address information.<br>
The created json file can be imported into wallets such as MetaMask and XDCPay by using the password used when encrypting it.<br>
<br>
privatekeyを任意のパスワードで暗号化しアドレス情報を記録したjsonファイルを作成します。<br>
作成されたjsonファイルは暗号化した際のパスワードを用いることでMetaMask, XDCPayなどのwalletにインポート可能です。<br>

# Setup
```
git clone https://github.com/AoiToSouma/encryptToJson.git
cd encryptToJson
npm install
```

# How to use
```
node decryptFromJson.js
```

```Enter privateKey:``` : Please enter your private key.<br>
```Enter password:``` : Please enter any password.<br>
```keys_YYYY_MM_DD_HH_MI_SS.json```(file with date and time) has been created in the same directory.<br>
<br>
```Enter privateKey:``` : privatekeyを入力してください。 <br>
```Enter password:``` : 任意のパスワードを入力してください。<br>
同じディレクトリ内に```keys_YYYY_MM_DD_HH_MI_SS.json```（日時が付与されたファイル）が作成されています。

# Appendix
If you want to decrypt (obtain a private key), please use the following.<br>
<br>
複合化（privatekeyを取得）する場合は下記を使ってください。<br>
<br>
https://github.com/AoiToSouma/decryptFromJson
