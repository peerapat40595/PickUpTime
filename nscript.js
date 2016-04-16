var originalState = $("div#content").html();
//var originalState2=$("div#timeslotlist").html();
$("#createevent").click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var name = $('<input>',{type: "text",name: "name", value: "Enter event name"});
    var desc = $('<input>',{type: "text",name: "description", value: "Type Description"});
    var addtime = $('<button>',{id: "addslot",text: "Add time slot"});
    var timelist = $('<div>',{id: "timeslotlist"});
    $('<form>').addClass("cevent").append(name).append(desc).append(addtime).append(timelist).appendTo("div#content");
    var originalState2=$("div#timeslotlist").html();
});
$("#addslot").click(function(e){
    //var originalState = $("div#content").html();
    //$("div#content").html(originalState);
    //$("div#content").html(originalState);
    $("div#timeslotlist").html(originalState2);
    e.preventDefault();
    var date = $('<input>',{type: "text",name: "date", value: "Enter date"});
    var from = $('<input>',{type: "text",name: "description", value: "Enter time begin"});
    var to = $('<input>',{type: "text",name: "description", value: "Enter time finish"});
    var adds = $('<button>',{text: "Add"});
    //var toAdd = $('input[name=checkListItem]').val();
   // $(".list").append('<div class="item">' + toAdd + '</div>'); 
    //$("#timeslotlist").append('<form class="timeslot">' + date+from+to+adds + '</form>'); 
    $("#timeslotlist").append('<div class="timeslot"> test </div>'); 
    //$('<form>').addClass("timeslot").append(date).append(from).append(to).append(adds).appendTo("div#timelist");
});

