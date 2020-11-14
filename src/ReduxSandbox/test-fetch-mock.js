const fetchMock = require('fetch-mock');

async function run(){
fetchMock.mock('http://example.com', {status:200, body:{nane:'john'}});
const res = await fetch('http://example.com');
console.log(res);
fetchMock.restore();
};

run();