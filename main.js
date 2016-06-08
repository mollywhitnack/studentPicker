document.addEventListener('DOMContentLoaded', init);


function init(){
    //console.log("Loaded!!");
    document.getElementsByClassName('submitBtn')[0].addEventListener('click', randomStudent)
    document.getElementsByClassName('groupBtn')[0].addEventListener('click', sortGroups)

  }

  function randomStudent(){
    console.log("HERE");
    //Get names
    var el = document.querySelector('#textArea');
    var names  = el.value.split(/[ ,]+/);
    console.log(names.length);
    var rand = Math.floor(Math.random() * (names.length));
    console.log('random student: ' + names[rand]);
    var el2 = document.querySelector('.pickedStud');
    el2.innerHTML = '<p>' + names[rand] + '</p>';
    el2.style.height = '50px';
    el.style.color = "transparent";
  }

    function sortGroups(){
    console.log("In sortGROUPS");
    var groupss = document.querySelector('#textArea3');
    console.log("groups:" + groupss.value);   
    var el = document.querySelector('#textArea');
    var names  = el.value.split(/[ ,]+/);
    var n = names.length;
    var m = groupss.value;
    var groups = 0;
    if( m != 0){
      console.log("m: " + m);
      groups = Math.floor(n/m);
    }
    console.log("groupsHERE: " + groups);
    

    var elem = document.querySelector('div.grouplist');
    elem.innerHTML = '';
    
    for(var i = 0; i<groups; i++){
      var group = document.createElement('span');
      group.classList.add('group' + i);
      group.innerHTML = ("<h3> Group " + i)
      group.style.marginLeft = "5%";
      var ref = document.querySelector('div.grouplist');
      ref.appendChild(group);
      console.log("-----------------");
        for(var j =0; j<m; j++){
          var rand = Math.floor(Math.random() * (names.length));
          console.log(names[rand]);
          var spanEl = document.createElement('li');
          spanEl.innerHTML =  names[rand];
          group.appendChild(spanEl);
          names.splice(rand, 1);
          var ref = document.querySelector('span.group' + i);
          ref.appendChild(spanEl);
        }
    }
    console.log("-----------------");

    if(names.length !=0 && groups>0){
      var group = document.createElement('span');
      group.classList.add('group' + groups);
      group.innerHTML = ("<h3> Group " + groups);
      group.style.marginLeft = "5%";
      var ref = document.querySelector('div.grouplist');
      ref.appendChild(group);
      while(names.length !=0){
        var rand = Math.floor(Math.random() * (names.length));
        console.log(names[rand]);
        var spanEl = document.createElement('li');
        spanEl.innerHTML =  names[rand];
        group.appendChild(spanEl);
        var ref = document.querySelector('span.group' + i);
        ref.appendChild(spanEl);
        names.splice(rand, 1);
      }
    }

    //el.value = '';
    groupss.value = '';

  }