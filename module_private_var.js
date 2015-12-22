var secret_keeper = function () {
	var secret = 0;

	return {
		get_secret: function () {
			return secret;
		},
		increment: function () {
			secret += 1;
		}
	};
};

var obj = secret_keeper();
console.log(obj.get_secret());
// 0

obj.increment();
console.log(obj.get_secret());
// 1

console.log(secret_keeper.secret); 
// undefined