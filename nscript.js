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

        $('<button id="createevent" class="button-primary" onclick=initevent()>+ Create Event</button><input type="text" name="keyword" placeholder="Enter Keyword" ><button id="joinevent" class="button-primary" >Join Event</button><div id="loginas"><div id="profilepic"></div><div id="profiledata"><div id="profilename">Testt</div><a href="logout">Log out</a></div></div>').insertAfter( "#minilogo" );

      }

    }, 

    {
      remember: "sessionOnly",
        scope: "email" // the permissions requested

    });
  });
});



var originalState = $("div#content").html();

// function initevent(){
$("#createevent").click(function(e){
    var count = 0;
    console.log(count)
    $("div#content").html(originalState);
    e.preventDefault();
    var count=0;
    var name = $('<input>',{type: "text",name: "name", value: "Enter event name",width:"25%"});
    var desc = $('<input>',{type: "text",name: "description", value: "Type Description",width:"70%"});
    var submit = $('<button>',{id: "submit",type: "submit" ,class:"button-primary",text: "Submit",onclick:"join()"});
    var cancel = $('<button>',{id: "cancel",type: "reset" ,text: "Cancel",onclick:'$("div#content").html(originalState)'});
<<<<<<< HEAD
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
              count++;
      console.log(count);
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
          count--;
          console.log(count);
        });
      });
    });
=======
    $('<div>').addClass("cevent").append(name).append(desc).append(submit).append(cancel).appendTo("div#content");

>>>>>>> 460826767a1f8f1bfb11d2ca9da942b230ad25d6
});
// }
$('#joinevent').click(function(e){
    $("div#content").html(originalState);
    e.preventDefault();
    var label1=$('<label>',{text:"Date :",class:"slotlabel"});
    var label2=$('<label>',{text:"From :",class:"slotlabel"});
    var label3=$('<label>',{text:"To :",class:"slotlabel"});
    var addform=$('<div>',{id:"addform"});
    var adddate=$('<input>',{type: "date",name: "date", value: "Enter date"});
    var addfrom=$('<input>',{type: "time",name: "from", value: "Enter time begin"});
    var addto=$('<input>',{type: "time",name: "to", value: "Enter time finish"});
    var addt=$('<button>',{id:"addtime",type:"button",text:"Add",class:"button-primary"});
    addform.append(label1).append(adddate).append(label2).append(addfrom).append(label3).append(addto).append(addt);
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


// function drawTable(){

//   // header & footer
//   $('.table-header').html('<th>Name</th>');
//   $('.table-footer').html('<th></th>');
//   for(var number = 0 ; number < /* number of timeslot */ ; number++ ){
//     $('.table-header').append('<th>'+/*date*/[number]+'<br>'+/*time range*/[number]+'</th>');
//     $('.table-footer').append('<th class="footer'+(number+1)+'"></th>');
//   }
  
<<<<<<< HEAD
//   // data
//   for(var number = 0 ; number < /*number of people*/ ; number++){
//     if(/* this people is selected*/){
//       $('tbody').append('<tr><td class= "name-selected">'+/*name*/+'</td>');
//       for( var index = 0 ; index < /*number of time slot*/ ; index++){
//         $('tbody').append(' <td class = "stage stage'+/*status*/+' selected"></td>');
//       }
//       $('tbody').append('</tr>');
//     }
//     else{
//       $('tbody').append('<tr><td>'+/*name*/+'</td>');
//       for( var index = 0 ; index < /*number of time slot*/ ; index++){
//         if(/*status*/ == "1"){
//           $('tbody').append(' <td class = "stage warning"></td>');
//         }else if(/*status*/ == "2"){
//           $('tbody').append(' <td class = "stage danger"></td>');
//         }else if(/*status*/ == "3"){
//           $('tbody').append(' <td class = "stage success"></td>');
//         }
//       }
//       $('tbody').append('</tr>');
//     }
//     }

//   }

// function updateScore(){
//   for(var col = 1 ; col < document.getElementById('example').rows[0].cells.length ; col++){
//     var red = 0;
//     var yellow = 0;
//     var green = 0;
//     for(var row = 1 ; row < document.getElementById('example').rows.length-1 ; row++){
//       console.log("row["+row+"] col["+col+"] : "+document.getElementById('example').rows[row].cells[col].className );
//       if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage1')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('warning')>-1){
//         $(document.getElementById('example').rows[row].cells[col]).html('May Be');
//         yellow++;
//       }else if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage2')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('danger')>-1){
//         $(document.getElementById('example').rows[row].cells[col]).html('Busy');
//         red++;
//       }else if(document.getElementById('example').rows[row].cells[col].className.indexOf('stage3')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf('success')>-1){
//         $(document.getElementById('example').rows[row].cells[col]).html('Available');
//         green++;
//       }
//     }
//     $('.footer'+col).html('<span class="green">'+green+'</span> : <span class="yellow">'+yellow+'</span> : <span class="red">'+red+'</span>');
//   }
// }
=======
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
      console.log("row["+row+"] col["+col+"] : "+document.getElementById('example').rows

[row].cells[col].className );
      if(document.getElementById('example').rows[row].cells[col].className.indexOf

('stage1')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf

('warning')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('May Be');
        yellow++;
      }else if(document.getElementById('example').rows[row].cells[col].className.indexOf

('stage2')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf

('danger')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('Busy');
        red++;
      }else if(document.getElementById('example').rows[row].cells[col].className.indexOf

('stage3')>-1 || document.getElementById('example').rows[row].cells[col].className.indexOf

('success')>-1){
        $(document.getElementById('example').rows[row].cells[col]).html('Available');
        green++;
      }
    }
    $('.footer'+col).html('<span class="green">'+green+'</span> : <span 

class="yellow">'+yellow+'</span> : <span class="red">'+red+'</span>');
  }
}





>>>>>>> 460826767a1f8f1bfb11d2ca9da942b230ad25d6
