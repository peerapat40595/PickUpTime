var ref = new Firebase("https://pickuptime.firebaseio.com");

$(function(){
	$("#fblogin").click(function(){
		

		ref.authWithOAuthPopup("facebook", function(error, authData) {

		  if (error) {
		    console.log("Login Failed!", error);
		  } 

		  else {
		    // the access token will allow us to make Open Graph API calls
			ref
			.child("users")
			.child(authData.facebook.id)
			.update({
				uid: authData.uid,
				facebookId: authData.facebook.id, 
		    	profileImage: authData.facebook.profileImageURL,
		    	displayName: authData.facebook.displayName,
		    	email: authData.facebook.email
		    });
		  }

		}, 

		{
			remember: "sessionOnly",
		  	scope: "email" // the permissions requested

		});
	});
});

