require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind million good kiwi olympic song'; 
let testAccounts = [
"0x0af237062731fab06c85c31c3d3de0327ce28bc888af0bed4648982e1308f4bd",
"0xf1d2bbfd9c31c2657041a19060f1363d45134feaae04390eea752fc7cc8a556d",
"0xd3df90b3d5a927e5ebd9b061e5b471355ef8d1865de66f890760bb8f8aef3160",
"0xba15487f5b7bacd5f1b417dc339abde0db818031c3cdb47306382d3c069ad6aa",
"0x5b1140002737772c1fc65c4ef8daf3d4a801c15168f693e215f53df1332efd6d",
"0x2aebc2fb64723281b2ca66097876a6fd4562b1f8b5599e8d20cf66766711171b",
"0xc9bf236b00e3e5992f4afa7a47b05e3bf10045d98fb38bfcd25a17b735a58371",
"0xfcce34c1e95f8e0c0ca2c786c1992ddc8da23d74e1c4d412895337d8456a4d6c",
"0x8fa39313bdd0e992b59b2aee29b06d4fc8816683b24d7c34760cfb330dac4fcc",
"0x954256f8b0fa9f07fc167ba15b7876af1fbdf0db5a41e695c98dc28f0f8be678"
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
            version: '^0.8.0'
        }
    }
};

