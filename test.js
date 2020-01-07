"use strict";

const { dottedWait } = require("./index");

Promise.resolve()
	.then(() => dottedWait( 1 * 1000))
	.then(() => dottedWait( 1 * 1000))
	.then(() => dottedWait( 2 * 1000))
	.then(() => dottedWait( 3 * 1000, "-"))
	.then(() => dottedWait( 5 * 1000, "*"))
	.then(() => dottedWait( 8 * 1000, "?"))
	.then(() => dottedWait(13 * 1000, "!"))
	.then(() => dottedWait(21 * 1000, "~"))
	.then(() => dottedWait(34 * 1000, "#"))
	.then(() => dottedWait(55 * 1000))
	.catch((err) => console.log(err))
	.finally(() => console.log("The end ＼(^o^)／"));
