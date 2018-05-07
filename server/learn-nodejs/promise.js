function delay(ms) {
	return new Promise(function(res, rej) {
		setTimeout(res, rej);
	});
}

const waitPromise = delay(3000);
waitPromise.then(() => console.log("waited "));
