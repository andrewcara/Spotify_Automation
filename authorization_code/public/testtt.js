var client_id1 = 'daf925983160411786bc9afd3c8db891'; // Your client id
var client_secret1 = '2be54995915c4bd197d6d85650faf39d'; // Your secret

client_id = process.env.SPOTIPY_CLIENT_ID
client_secret = process.env.SPOTIPY_CLIENT_SECRET
client_id = client_id.replace(/\s/g, '');
client_secret = client_secret.replace(/\s/g, '');

console.log(client_secret)
console.log(client_id)


if(client_secret1 == client_secret & client_id1==client_id){
    console.log("True")
}
