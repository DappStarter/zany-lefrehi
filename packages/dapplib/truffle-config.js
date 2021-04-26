require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food shock rebel sister public hard light army genius'; 
let testAccounts = [
"0xc323ab095c68431c107efae5983fe1e039a0ddef3e2239c45fef2ec8ae00684c",
"0xda2a967fb7b50b5be8c9f67a7a58ca5f5bd29a3e64e942478bbefe6fd6199278",
"0xc72319ee2a3342e7d74f11a2b6a80656381d03071315c1c9fb0a8fc0467dcd20",
"0x4e3fc156d01a79bf9d90e825f9e0a6b61d026dd568416bad01f52d2a72f92371",
"0xe92a7a4aa8a03ab51abd38f87c0c7b2471d79a24a787d54b4aee4124306bc61c",
"0xd02c46714e5760bf28edbb7b617cc1647697d3720c7e04b9469143dd439e2e92",
"0x2f495421e22acfd07077df281907dc3eadcbf54a05f862479081a36d8cd56f67",
"0x21b313ee941fdbf5e84b2c959082c5dafd631abdff3ad3913908da090d44ac0d",
"0x5d943dc059f03ae21474a9bf2f1cb0c1e2ad0b2c665147db9e95af43720ad543",
"0x31c8a152a8001b4437a7897a33f6afc33710332af16c2ce624b77e86f92bb000"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
