function connectToDb(callback) {
    // connect to db
    // on success, do callback
}

function startServer(callback) {
    // start express app
}

function seedData(callback) {
    // put test data in the db
}

function makeTestRequestToApi(callback) {
    // make HTTP request to an API endpoint
}

function inspectResponse(callback) {
    // check if response from api has right
    // code and data
}

function inspectDb(callback) {
    // check if db state is how we expect
    // given API request
}

function doMyTest(done) {
    connectToDb(
        startServer(
            seedData(
                makeTestRequestToApi(
                    inspectResponse(
                        inspectDb(done))))));
}