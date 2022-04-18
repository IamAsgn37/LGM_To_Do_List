const key = document.querySelector("#add");
const  button = document.querySelector("#btn");
const list = document.querySelector("#list");
var ex = document.getElementsByTagName('li');
button.onclick = function()
{
    var txt = key.value;
    if(txt ==''){
        alert('You must write something'); //When no any task  and want to add task.
    }else if(txt==' '){
        alert('You must write something');//When we want to add any empty space  in the task.
    }else if(txt.value===13){
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    key.value = '';
    }
};
list.onclick = function(ev){                //This is for completing the task.
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
         alert('This task is completed..!');
    }
};
