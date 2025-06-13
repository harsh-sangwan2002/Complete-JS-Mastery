// default parameter
function test(firstName, lastName = "Kumar") {
    console.log(`Hi! I am ${firstName} ${lastName}`);
}

test("Harsh", "Sangwan");
test("Arvind");