const person=function(fname,lname,email,phone){
    this.firstname=fname,
    this.lastname=lname;
    this.email=email;
    this.phone=phone;
}

const persons=[
    new person("Sreeja","Amuda","sreeja@gmail.com","6216547890"),
    new person("Bhagya","Konderu","bhagya@gmail.com","8942743290"),
    new person("Shanthi","Amuda","shannthi@gmail.com","9068754124"),
    new person("Rishi","Amuda","rishi@gmail.com","9652198307"),
    new person("Varshini","Choutpally","varshini@gmail.com","6321547689")
]

var str = "";
str='<tr>'+'<th>FirstName</th>'+'<th>LastName</th>'+'<th>Email</th>'+'<th>Phone</th>'+'</tr>';

    for (var obj in persons) {
        str += '<tr>';
        for (idata in persons[obj]) {
            str += '<td>' + persons[obj][idata] + '</td>';
        }
        str += '</tr>';
    }
    var containerEle = document.getElementById("table");
    var myhtml1 = '<table>';
    myhtml1+=str;
    myhtml1+= '</table>';
    containerEle.innerHTML = myhtml1;
    
const tabs=document.getElementById('tabs');
tabs.addEventListener('click',(e)=>clickHandler(e,'tabs'));

function show(tabId){
    const t=document.getElementsByClassName("tab-content");
    for (const tab of t){
        tab.style.display="none";
    }
    document.getElementById(tabId).style.display="flex";
}

function clickHandler(event,name){
        const activetabid=event.target.getAttribute("activetabid");
        console.log(activetabid);
        show(activetabid);
        console.log("elemnt name",name,event.target,event.currentTarget);
    }


const mylist=["Sreeja", "Bhagya", "Shanthi", "Rishi"]
var containerElement = document.getElementById("list");
  var myhtml = '<table>';
  mylist.forEach(function(element) {
    myhtml += '<tr><td>' + element + ' '+'</td><td><button class="delBtn">Delete</button></td></tr>';
  });
  myhtml += '</table>';
  containerElement.innerHTML = myhtml;
  var deleteButtons = document.querySelectorAll('.delBtn');
  deleteButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      var listItem = button.parentNode.parentNode;
      listItem.parentNode.removeChild(listItem);
    });
  });

document.getElementById('button1').addEventListener('click',()=>on_start());
 document.getElementById('button2').addEventListener('click',()=>pause());
 document.getElementById('button3').addEventListener('click',()=>resume());
 document.getElementById('button4').addEventListener('click',()=>stop());



let timeout;
let time_on=0;
let number=0;
document.getElementById('button2').disabled=true;
document.getElementById('button3').disabled=true;
document.getElementById('button4').disabled=true;
function on_start(){
    if(!time_on){
        time_on=1;
        number=0;
        document.getElementById('button1').disabled=true;
        document.getElementById('button2').disabled=false;
        document.getElementById('button3').disabled=true;
        document.getElementById('button4').disabled=false;
        start();
        
    }
   
}
function start(){
    document.getElementById('cnt1').innerHTML=number;
    number++;
    timeout=setTimeout(start,300);
}
function stop(){
    clearTimeout(timeout);
    time_on=0;
    document.getElementById('button2').disabled=true;
    document.getElementById('button4').disabled=true;
    document.getElementById('button3').disabled=true;
    document.getElementById('button1').disabled=false;
}

function resume(){
    start();
    document.getElementById('button2').disabled=false;
    document.getElementById('button4').disabled=false;
    document.getElementById('button3').disabled=true;
    document.getElementById('button1').disabled=true;
    time_on=0;
}

function pause(){
    clearTimeout(timeout);
    time_on=0;
    document.getElementById('button2').disabled=true;
    document.getElementById('button3').disabled=false;
    document.getElementById('button4').disabled=false;
    document.getElementById('button1').disabled=true;
}

const form=document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const name=formData.get('name');
    const pass=formData.get('password');
    const email=formData.get('email');
    console.log("form",name,pass,email);
    
    var result = document.createElement('div');
    result.innerHTML = '<h2>Form Data:</h2>' +"Name: "+ (name) +" password: "+ (pass)+" email: "+(email);
            document.body.appendChild(result);
});


function navbarToggler() {
    var nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}
