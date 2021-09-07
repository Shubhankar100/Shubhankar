const fs = require('fs');
let callsData = fs.readFileSync('call_data.json');
let calls = JSON.parse(callsData);
//console.log(Object.keys(calls))

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
	if (!err1) {
		let db = client.db("callLogs");
		db.collection("callLogs").insertMany(calls, (err2, result) => {
			if (!err2) {
				console.log(result.insertedCount);
			} else {
				console.log(err2.message);
			}
			client.close();
		});

	}
}); 