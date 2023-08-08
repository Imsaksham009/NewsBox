const bcrypt = require('bcrypt');
const saltRounds = 10;

const myPlaintextPassword = "Saksham";

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    console.log(hash);
});
const hash = "$2b$10$1e40hMkhp915N88QoA76teyGFhH7bZHca4TV9WCLE3sPAOiHi9XyS";

bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    console.log(result);
});
