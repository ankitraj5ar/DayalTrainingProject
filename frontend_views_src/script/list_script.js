if(localStorage.getItem("user")){
     window.location.href = "index.html";
}
const getStudents = async()=>{
    let result = await fetch('http://localhost:4000/read.php',{
        method:'get'
    });
    result = await result.json();
  
    if(result.length>0){
        
        for(let i=0;i<result.length;i++){
            let modifiable = JSON.stringify(result[i]);
            // console.log(modifiable);
            let src = result[i].image_blb;
            if(src == ""){
                src = `./image/user.png`;
            }
            let divElement = document.createElement('div');
            divElement.classList.add('table_items');
            let dyContent = ` <li class="sn">${i+1}</li>
            <li class="sdetails">
            <div class="sphoto">
                <img src="${src}" alt="user_image">
            </div>
            <div class="sname">
                <p>${result[i].first_name+' '+result[i].last_name}</p>
            </div>
            </li>
            <li class="cdetails">
            <div class="cemail">
                <span><i class="fa-solid fa-envelope cdetails_c_icon" style="color: #000000;"></i>${result[i].email_id}</span>
            </div>
            <div class="cphone">
                <span><i class="fa-solid fa-phone cdetails_c_icon" style="color: #07090e;"></i>${result[i].mobile}</span>
            </div>
            </li>
            <li class="aadharno">${result[i].aadhar_no}</li>
            <li class="dob">${result[i].date_of_birth}</li>
            <li class="gender">${result[i].gender}</li>
            <li class="address_details">${result[i].street+', '+result[i].landmark+', '+result[i].city+', '+result[i].pincode+', '+result[i].state+', '+result[i].country}</li>
            <li class="login">
            <div class="cemail">
                <span><i class="fa-solid fa-user cdetails_c_icon" style="color: #000000;"></i>${result[i].username}</span>
            </div>
            <div class="cphone">
                <span><i class="fa-solid fa-lock cdetails_c_icon" style="color: #000000;"></i>${result[i].password}</span>
            </div>
            </li>
            <li class="hobbies">${result[i].hobbies}</li>
            <li class="action">
            <div class="action_button" onclick="setting_toggler(${i})">
                <i class="fa-solid fa-ellipsis-vertical" style="color: #000000;"></i>
            </div>
            <div class="action_button_click hide">
                <div class="action_button_modify setting" onclick="modify_student(${result[i].id})">
                <span><i class="fa-solid fa-pencil" style="color: #14a44d;"></i>&nbsp;&nbsp;Modify</span>
                </div>
                <div class="action_button_delete setting" onclick="delete_student(${result[i].id})">
                <span><i class="fa-solid fa-trash" style="color: red;"></i>&nbsp;&nbsp;Delete</span>
                </div>
            </div>
            </li>`;
            divElement.insertAdjacentHTML('beforeend',dyContent);
            let maindiv = document.querySelector('.table_item_container');
            maindiv.appendChild(divElement);
        }
        
       
    }else{
        let divElement = document.createElement('div');
        divElement.classList.add('nodynamic');
        let dyContent = "No Student Record Available";
        divElement.insertAdjacentHTML('beforeend',dyContent);
        let maindiv = document.querySelector('.table_item_container');
        maindiv.appendChild(divElement);
    }
   
    
}
getStudents();


// list view 

async function delete_student(id){
    console.log();
    let result = await fetch('http://localhost:4000/delete.php',{
        method:'delete',
        body:JSON.stringify({id}),
        headers:{
            'Content-Type': 'application/json',
        }
        });
        result = await result.json();
        if(result.status == 'success'){
            window.alert("Student deleted Successfully");
            location.reload();
        }
        else{
            window.alert("Student Not deleted");
            location.reload();
        }
}

//list view end



