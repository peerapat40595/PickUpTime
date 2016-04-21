var QuestionID = "";
$(function(){
	$("#createEvent").click(function(){
		name = "ประชุม";
		description = "sdsd";
		var added = ref.child("Question").push({name: name,description: description});
		QuestionID = added.key();
		ref.onAuth(function globalOnAuth(authData) {
			ref.child("Question").child(QuestionID).update({
				createdBy_uid: authData.uid,
				createdBy_facebookId: authData.facebook.id, 
		    	createdBy_displayName: authData.facebook.displayName,
			});
		});
	});
});	

var joinEventID = ""

$(function(){
	$("#joinEvent").click(function(){
		// id = getelementbyid //
		id = "-KFtr2RjgAgDHdWh9n6v";

		if(ref.child(id).exists()){
			joinEventID = id;
			/// เปลี่ยนหน้า
		}
	});
});	