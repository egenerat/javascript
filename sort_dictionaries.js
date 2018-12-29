var a = [
	{
		"name":"Alice",
		"birthday":"19850505"
	},
	{
		"name":"Bob",
		"birthday":"19950519"
	},
	{
		"name":"Chloe",
		"birthday":"19900508"
	}
];
a.sort( (a, b) => a.birthday > b.birthday);
console.log(a);