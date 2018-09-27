var email = 'yabhishek6666@ymail.com';
var emailExistence = require('email-existence');

emailExistence.check(email, function(error, response){
	console.log('res: '+response);
});

var verifier = require('email-verify');
verifier.verify(email, function( err, info ){
  if( err ) console.log(err);
  else{
    console.log( "Success (T/F): " + info.success );
    console.log( "Info: " + info.info );
  }
});

var validator = require('validator');

validator.isEmail(email, function(er, rs){
	console.log('r: '+rs);
});

var emailCheck = require('email-check');

// Quick version
emailCheck(email)
  .then(function (res) {
    console.log('reeeee: '+res);
  })
  .catch(function (err) {
    if (err.message === 'refuse') {
      console.log('err');
    } else {
      console.log('err');
    }
  });