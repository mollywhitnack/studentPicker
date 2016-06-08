var Allnames =[];

document.addEventListener('DOMContentLoaded', init);


function init(){
    //console.log("Loaded!!");
    document.getElementsByClassName('submitBtn')[0].addEventListener('click', randomStudent)
    document.getElementsByClassName('groupBtn')[0].addEventListener('click', sortGroups)
    //el.innerHTML = '';
  }

  function randomStudent(){
    console.log("HERE");
    //Get names
    var el = document.querySelector('#textArea');
    var names  = el.value.split(/[ ,]+/);
    Allnames = Allnames.concat(names);
    console.log("all Names: " + Allnames);
    console.log(names.length);
    var rand = Math.floor(Math.random() * (names.length));
    //console.log('random student: ' + names[rand]);
    var el2 = document.querySelector('.pickedStud');
    el2.innerHTML = '<p>' + names[rand] + '</p>';
    el2.style.height = '50px';
    //el.style.color = "transparent";

    /*var hideentext = names;
    var hiddenNames = document.querySelector('.hiddenNames');
    hiddenNames.innerHTML(hideentext);*/
    //el.empty();
    el.value = '';
  }

    function sortGroups(){
    //var testing = document.querySelector('.hiddenNames');
    //console.log("testing: " + testing.value);


    var groupss = document.querySelector('#textArea3');
    //console.log("groups:" + groupss.value);   
    var el = document.querySelector('#textArea');
    //var names  = el.value.split(/[ ,]+/);
    console.log("all names in sortgroups: " + Allnames);
    var n = Allnames.length;
    var m = groupss.value;
    var groups = 0;
    if( m != 0){
      //console.log("m: " + m);
      groups = Math.floor(n/m);
    }
    else if(m == 0)
      alert("Invalid Entry");
    //console.log("groupsHERE: " + groups);
    

    var elem = document.querySelector('div.grouplist');
    elem.innerHTML = '';
    
    for(var i = 0; i<groups; i++){
      var group = document.createElement('span');
      group.classList.add('group' + i);
      group.innerHTML = ("<h4> Group " + i)
      group.style.marginLeft = "5%";
      var ref = document.querySelector('div.grouplist');
      ref.appendChild(group);
      //console.log("-----------------");
        for(var j =0; j<m; j++){
          var rand = Math.floor(Math.random() * (Allnames.length));
          //console.log(names[rand]);
          var spanEl = document.createElement('li');
          spanEl.innerHTML =  Allnames[rand];
          group.appendChild(spanEl);
          Allnames.splice(rand, 1);
          var ref = document.querySelector('span.group' + i);
          ref.appendChild(spanEl);
        }
    }
    //console.log("-----------------");

    if(Allnames.length !=0 && groups>0){
      var group = document.createElement('span');
      group.classList.add('group' + groups);
      group.innerHTML = ("<h4> Group " + groups);
      group.style.marginLeft = "5%";
      var ref = document.querySelector('div.grouplist');
      ref.appendChild(group);
      while(Allnames.length){
        var rand = Math.floor(Math.random() * (Allnames.length));
        //console.log(names[rand]);
        var spanEl = document.createElement('li');
        spanEl.innerHTML =  Allnames[rand];
        group.appendChild(spanEl);
        var ref = document.querySelector('span.group' + i);
        ref.appendChild(spanEl);
        Allnames.splice(rand, 1);
      }
    }

    if(groups == 0 && m!=0)
      alert("Not Enough Student to form groups of size " + m);
    //el.value = '';
    groupss.value = '';

  }