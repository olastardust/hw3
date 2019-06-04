//1
function func () {
	console.log (func)
	console.log (arguments)
}

//2
function userInfo (registered, data, name) {
  this.registered === true : console.log (`Дата регистрации : ${this.data.toLocateDateString()}) ? console.log (`Незарегистрированный пользователь : ${this.name})
}
var user1 = {
	name: "Alex"
  registered: true,
  data: "18.03.19"
	getInfo = userInfo
}

var user2 = {
	name: "Kate"
  registered: false
	getInfo = userInfo
}

//выдает ошибку на 9 строке. не нравится ":". говорит – "не ожидал". не могу понять. 
