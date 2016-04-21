$(function(){
	$("#addTimeSlot").click(function(){
		var currentdate = new Date(); 
		// var time1 = getTime1;
		// var time2 = getTime2;
		// id
		if(!!QuestionID){
		ref.child("Question").child(QuestionID).child("timeslot").push({
			date: getDayMonth(currentdate),
			time1: "13:00",
			time2: "14.00"
			});
		}
	});
	// delete by id
});	