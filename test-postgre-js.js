var { Pool } = require('pg');
var conString = "postgres://postgres:admin@152.144.198.47:5432/postgres";

var pool = new Pool({
  connectionString: conString
})

var array1 = [[1,2]]

pool.connect().then(client => {
	client.query({
		rowMode: 'array',
		text: 'SELECT 1 as one, 2 as two;'
	}).then(res => {
		client.release()
		var array2 = res.rows
		if (array1.length == array2.length) {
			console.log("Number of elements are same in both the arrays, array1: ", array1, "array2: ", array2)
		} else {
			console.log("Number of elements are not same in both the arrays, array1: ", array1, "array2: ", array2)
			return false
		}
		var i = array1.length;
		var j = false
		while (i--) {
			console.log(array1[i])
			console.log(array2[i])
			if (array1[i] === array2[i]) {
				j = true
			} else {
				j = false
			}
		}
		if(j){
			console.log("All elements as same in both the arrays, array1: ", array1, "array2: ", array2)
		} else {
			console.log("There is difference in elements, array1: ", array1, "array2: ", array2)
		}
		// console.log(res.rows)		
	})
	.catch(e => {
		client.release()
		console.error('query error', e.message, e.stack)
	})
})
pool.end()


/* var { Pool } = require('pg');
var conString = "postgres://postgres:admin@152.144.198.47:5432/postgres";
var pool = new Pool({
  connectionString: conString
})
pool.connect((err) => {
	if (err) {
		console.log('There is some connection error!!', err.stack)
	} else {
		console.log('Successfully connected!!')
	}).then(client => {
		client.query({
		rowMode: 'array',
		text: 'Select * From "public"."3mn_16cols" LIMIT 5;'
	}).then(res => {
		client.release()
		console.log(res.fields[0].name)
		console.log(res.fields[1].name)
		console.log(res.rows)
	})
  .catch(e => {
    client.release()
    console.error('Error while running the query: ', e.message, e.stack)
  })
})
pool.end((err) => {
	if (err) {
	console.log('There is some disconnection error!!', err.stack)
	} else {
	console.log('Successfully disconnected!!')
	}
}) */