//Script event auto linked ipv4 nextdns: network-change

$httpClient.post('https://link-ip.nextdns.io/7b7837/a87541978c11f124', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
