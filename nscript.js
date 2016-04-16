var originalState = $("div#content").html();
//var originalState2=$("div#timeslotlist").html();
$("#createevent").click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var name = $('<input>',{type: "text",name: "name", value: "Enter event name"});
    var desc = $('<input>',{type: "text",name: "description", value: "Type Description"});
    var addtime = $('<button>',{id: "addslot",type: "button" ,text: "Add time slot"});
    var timelist = $('<div>',{id: "timeslotlist"});
    var timelistadd = $('<div>',{id: "timeslotlistadd"});
    $('<div>').addClass("cevent").append(name).append(desc).append(addtime).append(timelist).append(timelistadd).appendTo("div#content");

    var originalState2 = $("div#timeslotlistadd").html();
    $("#addslot").click(function(e){
    //var originalState = $("div#content").html();
    //$("div#content").html(originalState);
    //$("div#content").html(originalState);
    $("div#timeslotlistadd").html(originalState2);
      e.preventDefault();
      var date = $('<input>',{type: "text",name: "date", value: "Enter date"});
      var from = $('<input>',{type: "text",name: "from", value: "Enter time begin"});
      var to = $('<input>',{type: "text",name: "to", value: "Enter time finish"});
      var adds = $('<button>',{text: "Add",type: "button",class:"add"});
      $('<div>').addClass("timeslota").append(date).append(from).append(to).append(adds).appendTo("div#timeslotlistadd");
      $(".add").click(function(e){
        var sdate=$('input[name=date]').val();
        var sfrom=$('input[name=from]').val();
        var sto=$('input[name=to]').val();
        var del=$('<span>',{text:"click to delete"});
        $(".timeslota").remove();
        originalState2 = $("div#timeslotlistadd").html();
        $('<div>').addClass("timeslot").append(sdate+" "+sfrom+" "+sto+" ").append(del).appendTo("div#timeslotlist");
        $(document).on('click', '.timeslot', function() {
          $(this).remove();
        });
      });
    });
});
/**/
/*function test(){
    var date = $('<input>',{type: "text",name: "date", value: "Enter date"});
    var from = $('<input>',{type: "text",name: "description", value: "Enter time begin"});
    var to = $('<input>',{type: "text",name: "description", value: "Enter time finish"});
    var adds = $('<button>',{text: "Add",type: "button"});
    $('<div>').addClass("timeslot").append(date).append(from).append(to).append(adds).appendTo("div#timeslotlist");
}*/

