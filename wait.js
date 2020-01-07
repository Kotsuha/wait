"use strict";

const wait = function(ms, param) {
	return new Promise(function(res) { // , rej
		// function fn(foo, bar, baz) {
		// 	console.log(foo, bar, baz);
		// }
		// setTimeout.apply(global, [fn, 3000, "foo!", "bar!", "baz!"]);
		// // But resolve() only has one parameter
		setTimeout(res, ms, param);
	});
};

const drawDots = function(num, dot = ".") {
	for (let i = 0; i < num; i++)
		process.stdout.write(dot);
};

const dottedWait = function(ms, dot = ".") {
	ms = parseInt(ms);
	const exe = async function(resolve) {
		while (ms > 0) {
			process.stdout.write("\x1b[K");
			const num = parseInt(ms / 1000) - 1; // TODO ?
			drawDots(num, dot);
			process.stdout.write("\r");
			const waitMs = ms >= 1000 ? 1000 : ms;
			await wait(waitMs);
			ms -= waitMs;
		}
		resolve();
	};
	return new Promise(exe);
};

module.exports = {
	wait,
	dottedWait
};
