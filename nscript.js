var originalState = $("div#content").html();
//var originalState2=$("div#timeslotlist").html();
$("#createevent").click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var name = $('<input>',{type: "text",name: "name", value: "Enter event name",width:"25%"});
    var desc = $('<input>',{type: "text",name: "description", value: "Type Description",width:"70%"});
    var addtime = $('<button>',{id: "addslot",type: "button" ,text: "Add time slot"});
    var timelist = $('<div>',{id: "timeslotlist"});
    var timelistadd = $('<div>',{id: "timeslotlistadd"});
    var submit = $('<button>',{id: "submit",type: "submit" ,class:"button-primary",text: "Submit",onclick:"join()"});
    var cancel = $('<button>',{id: "cancel",type: "reset" ,text: "Cancel",onclick:'$("div#content").html(originalState)'});
    $('<div>').addClass("cevent").append(name).append(desc).append(addtime).append(timelist).append(timelistadd).append(submit).append(cancel).appendTo("div#content");

    var originalState2 = $("div#timeslotlistadd").html();
    $("#addslot").click(function(e){
    $("div#timeslotlistadd").html(originalState2);
      e.preventDefault();
      var date = $('<input>',{type: "date",name: "date", value: "Enter date"});
      var from = $('<input>',{type: "time",name: "from", value: "Enter time begin"});
      var to = $('<input>',{type: "time",name: "to", value: "Enter time finish"});
      var adds = $('<button>',{text: "Add",type: "button",class:"add"});
      $('<div>').addClass("timeslota").append(date).append(from).append(to).append(adds).appendTo("div#timeslotlistadd");
      $(".add").click(function(e){
        var sdate=$('input[name=date]').val();
        var sfrom=$('input[name=from]').val();
        var sto=$('input[name=to]').val();
        var del=$('<span>',{text:"remove",id:"del"});
        var label1=$('<label>',{text:"Date :",class:"slotlabel"});
        var label2=$('<label>',{text:"From :",class:"slotlabel"});
        var label3=$('<label>',{text:"To :",class:"slotlabel"});
        $(".timeslota").remove();
        originalState2 = $("div#timeslotlistadd").html();
        $('<div>').addClass("timeslot").append(label1).append(sdate).append(label2).append(sfrom).append(label3).append(sto).append(del).appendTo("div#timeslotlist");
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
function join(){
  /*var personavail = [
    [ "Tiger Nixon", 1 , 2, 1, 0 ],
    [ "Garrett Winters", 1 , 1, 1, 1 ],
    [ "Ashton Cox", 0 , 2, 2, 0 ],
    [ "Cedric Kelly", 0 , 1, 0, 2 ]
  ];
  var timeavail=["13/5/2016 13.00-16.00","16/5/2016 13.00-16.00","16/5/2016 16.00-19.00","17/5/2016 16.00-19.00"];
  var choose =$('<div>',{id:"choose"});
  
  for (var i = 0; i < timeavail.length; i++) {
    var select =$('<select>',{size:"1", class:"select",name:"select"+timeavail[i]});
    for (var j = 1; j <4; j++) {
      var dtime=$('<option>',{value:j,text:j})
      select.append(dtime);
    };
    choose.append(select);
  };
  choose.appendTo("div#content");
  $('<table>').addClass("eventdata").appendTo("div#content");
  var table=$('.eventdata').DataTable( {
        bFilter: false, 
        bInfo: false,
        bPaginate:false,
        //bLengthChange: false,
       // bSort: false,
       // bSortMulti: false,
       // bProcessing: false,
       // bSortClasses: false, 
      //  bServerSide: false,
      //  bDeferRender: false, 
        data: personavail,
        columns: [
            { title: "Name" },
            { title: timeavail[0] },
            { title: timeavail[1]},
            { title: timeavail[2] },
            { title: timeavail[3] }
        ]
    } );*/

}
