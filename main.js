const lists=[];
const todolist = document.querySelector(".todolist");
todolist.onsubmit = function(e){
    e.preventDefault();
    const elements = e.target.elements;
    const list = elements [ 'waht-to-do'] .value;
    
    lists.push(list);
    displayuserslist();

  }

  const displayuserslist =()=>{
    const resalt = lists.map(user=>`
    <tr>
    <td <span class="pox"><input type="checkbox"></span>${user}</td>
    </tr>
    
    `) .join('');
    document.querySelector(".userslist").innerHTML=resalt;

   checkbox.onclick = function(){
    document.querySelector("td").classList.add(color);
  }

  } 

 
 
 
