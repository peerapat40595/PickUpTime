var originalState = $("div#content").html();
//var originalState2=$("div#timeslotlist").html();
$("#createevent").click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var count=0;
    var name = $('<input>',{type: "text",name: "name", value: "Enter event name",width:"25%"});
    var desc = $('<input>',{type: "text",name: "description", value: "Type Description",width:"70%"});
    var submit = $('<button>',{id: "submit",type: "submit" ,class:"button-primary",text: "Submit",onclick:"join()"});
    var cancel = $('<button>',{id: "cancel",type: "reset" ,text: "Cancel",onclick:'$("div#content").html(originalState)'});
    $('<div>').addClass("cevent").append(name).append(desc).append(submit).append(cancel).appendTo("div#content");

});
$('#joinevent').click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var addform=$('<div>',{id:"addform"});
    var adddate=$('<input>',{type: "date",name: "date", value: "Enter date"});
    var addfrom=$('<input>',{type: "time",name: "from", value: "Enter time begin"});
    var addto=$('<input>',{type: "time",name: "to", value: "Enter time finish"});
    var addt=$('<button>',{id:"addtime",type:"button",text:"Add"});
    addform.append(adddate).append(addfrom).append(addto).append(addt);
    var table=$('<div>',{class:"table-scrollable"});
    var insidetable=$('<table>',{class:"table table-bordered table-hover",id:"example"});
    table.append(insidetable);
    $('<div>').addClass("portlet-body").append(addform).append(table).appendTo("div#content");
    drawTable(/*jsonfile*/);
    updateScore();
    // stage1 = yellow
    // stage2 = red
    // stage3 = green
    $('.stage.selected').click(function(){
      if($(this).hasClass('stage1')){
        $(this).removeClass('stage1');
        $(this).addClass('stage3');
        $(this).html('Available');
      }else if($(this).hasClass('stage2')){
        $(this).removeClass('stage2');
        $(this).addClass('stage1');
        $(this).html('May Be');
      }else if($(this).hasClass('stage3')){
        $(this).removeClass('stage3');
        $(this).addClass('stage2');
        $(this).html('Busy');
      }
      updateScore();
    });
});

function drawTable(){

  // header & footer
  $('.table-header').html('<th>Name</th>');
  $('.table-footer').html('<th></th>');
  for(var number = 0 ; number < /* number of timeslot */ ; number++ ){
    $('.table-header').append('<th>'+/*date*/[number]+'<br>'+/*time range*/[number]+'</th>');
    $('.table-footer').append('<th class="footer'+(number+1)+'"></th>');
  }
  
  // data
  for(var number = 0 ; number < /*number of people*/ ; number++){
    if(/* this people is selected*/){
      $('tbody').append('<tr><td class= "name-selected">'+/*name*/+'</td>');
      for( var index = 0 ; index < /*number of time slot*/ ; index++){
        $('tbody').append(' <td class = "stage stage'+/*status*/+' selected"></td>');
      }
      $('tbody').append('</tr>');
    }
    else{
      $('tbody').append('<tr><td>'+/*name*/+'</td>');
      for( var index = 0 ; index < /*number of time slot*/ ; index++){
        if(/*status*/ == "1"){
          $('tbody').append(' <td class = "stage warning"></td>');
        }else if(/*status*/ == "2"){
          $('tbody').append(' <td class = "stage danger"></td>');
        }else if(/*status*/ == "3"){
          $('tbody').append(' <td class = "stage success"></td>');
        }
      }
      $('tbody').append('</tr>');
    }
    }

  }

function updateScore(){
  for(var col = 1 ; col < document.getElementById('example').rows[0].cells.length ; col++){
    var red = 0;
    var yellow = 0;
    var green = 0;
    for(var row = 1 ; row < document.getElementById('example').rows.length-1 ; row++){
      console.log("row["+row+"] col["+col+"] : "+document.getElementById('example').rows[row].cells[col].className );
      if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage1')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('warning')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('May Be');
        yellow++;
      }else if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage2')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('danger')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('Busy');
        red++;
      }else if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage3')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('success')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('Available');
        green++;
      }
    }
    $('.footer'+col).html('<span class="green">'+green+'</span> : <span class="yellow">'+yellow+'</span> : <span class="red">'+red+'</span>');
  }
}



