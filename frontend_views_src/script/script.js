//form fill tick
const pformnot = document.querySelector('.pformnot');
const pformyes = document.querySelector('.pformyes');
const aformnot = document.querySelector('.aformnot');
const aformyes = document.querySelector('.aformyes');
const oformnot = document.querySelector('.oformnot');
const oformyes = document.querySelector('.oformyes');

//form tick end

// Tab change top
const pdetails = document.querySelector('.pdetails_form');
const adetails = document.querySelector('.adetails_form');
const odetails = document.querySelector('.odetails_form');
const pdetailstab = document.querySelector('.pdetails');
const adetailstab = document.querySelector('.adetails');
const odetailstab = document.querySelector('.odetails');
const childs = document.querySelector('.layout').children; //returns a HTMLCollection
for (var indx = 0; indx < childs.length; indx++) {
    // iterate over it
    childs[indx].onclick = function() {
        // attach event listener On each child . 
        const tab = this.classList.value;
        if(tab.includes('pdetails')){
            pdetails.classList.remove('inactive');
            adetails.classList.add('inactive');
            odetails.classList.add('inactive');
            pdetailstab.classList.add('active_tab');
            adetailstab.classList.remove('active_tab');
            odetailstab.classList.remove('active_tab');
        }  
        if(tab.includes('adetails')){
            if(pvalidations()){
                pformyes.classList.remove('inactive_tab');
                pformnot.classList.add('inactive_tab');
                adetails.classList.remove('inactive');
                pdetails.classList.add('inactive');
                odetails.classList.add('inactive');
                pdetailstab.classList.remove('active_tab');
                adetailstab.classList.add('active_tab');
                odetailstab.classList.remove('active_tab');
            }
        } 
        if(tab.includes('odetails')){
            if(pvalidations()){
                if(!avalidations()){
                    adetails.classList.remove('inactive');
                    pdetails.classList.add('inactive');
                    odetails.classList.add('inactive');
                    pdetailstab.classList.remove('active_tab');
                    adetailstab.classList.add('active_tab');
                    odetailstab.classList.remove('active_tab');
                }
                else{
                    aformyes.classList.remove('inactive_tab');
                    aformnot.classList.add('inactive_tab');
                    odetails.classList.remove('inactive');
                    adetails.classList.add('inactive');
                    pdetails.classList.add('inactive');
                    pdetailstab.classList.remove('active_tab');
                    adetailstab.classList.remove('active_tab');
                    odetailstab.classList.add('active_tab');
                } 
            }
        }   
    }
}
function pnext(){
    if(pvalidations()){
        pformyes.classList.remove('inactive_tab');
        pformnot.classList.add('inactive_tab');
        adetails.classList.remove('inactive');
        pdetails.classList.add('inactive');
        odetails.classList.add('inactive');
        pdetailstab.classList.remove('active_tab');
        adetailstab.classList.add('active_tab');
        odetailstab.classList.remove('active_tab');
    }
    
}
function aback(){
    pdetails.classList.remove('inactive');
    adetails.classList.add('inactive');
    odetails.classList.add('inactive');
    pdetailstab.classList.add('active_tab');
    adetailstab.classList.remove('active_tab');
    odetailstab.classList.remove('active_tab');
}
function anext(){
    if(avalidations()){
        aformyes.classList.remove('inactive_tab');
        aformnot.classList.add('inactive_tab');
        odetails.classList.remove('inactive');
        adetails.classList.add('inactive');
        pdetails.classList.add('inactive');
        pdetailstab.classList.remove('active_tab');
        adetailstab.classList.remove('active_tab');
        odetailstab.classList.add('active_tab');
    }
}
function oback(){
    adetails.classList.remove('inactive');
    pdetails.classList.add('inactive');
    odetails.classList.add('inactive');
    pdetailstab.classList.remove('active_tab');
    adetailstab.classList.add('active_tab');
    odetailstab.classList.remove('active_tab');
}
//tab end


// 2 checkbox checked
function getValue() {
    var checkboxes = document.querySelectorAll("input[name=hobbies]");
    var result = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result++;
        }
    }
    if(result>1){
        for(let i=0;i<checkboxes.length;i++){
            checkboxes[i].removeAttribute('required');
        }
        oformyes.classList.remove('inactive_tab');
        oformnot.classList.add('inactive_tab');
    }
    else{
        oformyes.classList.add('inactive_tab');
        oformnot.classList.remove('inactive_tab');
    }
    return result;
}
//checkbox end


// form validation
function pvalidations(){
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const ano = document.getElementById('ano');
    const date = document.getElementById('date');
    const phone = document.getElementById('phone');
    
    //only characters allowed reg character
    var letters = /^[A-Za-z]+$/;
    //reg email
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    //reg aadhar
    var regano=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    // Javascript reGex for Phone Number validation.
    var regPhone=/^\d{10}$/;

    if(fname.value == "" || !fname.value.match(letters)) {
        window.alert("Please enter a valid first name");
        fname.focus();
        return false;
    }
    if(lname.value == "") {
        // do nothing
    }else{
        if(!lname.value.match(letters)){
            window.alert("Please enter a valid last name");
            lname.focus();
            return false;
        }
    }
    if(email.value == "" || !regEmail.test(email.value)) {
            window.alert("Please enter a valid e-mail address");
            email.focus();
            return false;
    }           
    if(!regano.test(ano.value)) {
            window.alert("Invalid Aadhar No. Please enter aadhar no with spaces"); 
            ano.focus();
            return false;
    }
    if(date.value == ""){
        window.alert("Please enter date"); 
        date.focus();
        return false;
    }
    if (phone.value == "" || !regPhone.test(phone.value)) {
        window.alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
    const fi = document.getElementById('avatar');
    const uploadValue = document.getElementsByName('photo_upload');
    if(uploadValue[0].checked == true){
        // Check if any file is selected.
        if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
        
                const fsize = fi.files.item(i).size;
                const file = Math.round((fsize / 1024));
                  // Type of file.
                var filePath = fi.value;
                var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
                if(!allowedExtensions.exec(filePath)){
                    window.alert('Please upload file having extensions .jpeg/.jpg/.png only.');
                    fi.value = '';
                    return false;
                }
                  // The size of the file.
                if (file > 20) {
                    window.alert(
                        "File is too Big, please select a file less than 20kb");
                        return false;
                }
            }
            const imageInput = document.getElementById('avatar');
            if (imageInput.files.length > 0) {
                localStorage.setItem("img_name",imageInput.files.item(0).name)
                handleImageSelect(imageInput);  
            };
            function handleImageSelect(imageInput) {
                const file = imageInput.files[0];
                if (!file) {
                    console.error("No file selected.");
                    return;
                }
                const reader = new FileReader();
                reader.onload = async function(event) {
                     const base64String = event.target.result.split(',')[1];
                    localStorage.setItem("img",base64String);            
                };
                reader.readAsDataURL(file);
                }
        }
        else{
            window.alert("please select an image");
            return false;
        }

    }        
    return true;
}

function avalidations(){
    const country = document.getElementById('country');
    const state = document.getElementById('state');
    const city = document.getElementById('city');
    const street = document.getElementById('street');
    const landmark = document.getElementById('landmark');
    const pincode = document.getElementById('areacode');
    //pin regex
    var regpin = /^\d{6}$/;

    if(country.value == ""){
        window.alert("Please select country");
        country.focus();
        return false;
    }
    if(state.value == ""){
        window.alert("Please select state");
        state.focus();
        return false;
    }
    if(city.value == ""){
        console.log("street value");
        window.alert("Please select city");
        city.focus();
        return false;
    }
    if(street.value.replace(/\s+/g, '').length == 0 || street.value == "") {
        window.alert("Please enter your street");
        street.focus();
        return false;
    }
    if(landmark.value == ""){
        window.alert("Please enter landmark");
        landmark.focus();
        return false;
    }
    if(pincode.value == "" || !regpin.test(pincode.value)){
        window.alert("Please enter Pincode");
        pincode.focus();
        return false;
    }
    return true
}

function ovalidations(){
    const form = document.getElementById('student_form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if(username.value == ""){
        window.alert("Please enter username");
        username.focus();
        return false;
    }
    if(password.value == ""){
        window.alert("Please enter password");
        password.focus();
        return false;
    }
    if(getValue()>1){
        //do nothing
    }
    else{
        window.alert("please mark your hobbies");
        return false;
    }
    if(localStorage.getItem("user")){
        //update
        updateStudent();

    }else{
        // create
        addStudent();
    }
    // form.submit();
    return true;
}
//form validation end


//upload 
function displayUploadButton(){
    const uploadValue = document.querySelector('.photo_upload');
    uploadValue.classList.remove('hide')
}

function hideUploadButton(){
    const uploadValue = document.querySelector('.photo_upload');
    uploadValue.classList.add('hide')
}
//photo end


////// list view action button

function setting_toggler(node){
    const values = document.querySelectorAll('.action_button_click');
    for(let i=0;i<values.length;i++){
        if(i === node){
            values[i].classList.toggle('hide');
            for(let i=0;i<values.length;i++){
                if(i===node){
                    //do nothing
                }else{
                    values[i].classList.add('hide');
                }
                
            }
            break;
        }
    }
}

//api calling
//post request 
const addStudent= async()=>{ 
    const first_name = document.getElementById('fname').value;
    const last_name = document.getElementById('lname').value;
    const email_id = document.getElementById('email').value;
    const aadhar_no = document.getElementById('ano').value;
    const date_of_birth = document.getElementById('date').value;
    const mobile = document.getElementById('phone').value;
    const genders = document.getElementsByName('gender');
    var gender = "";
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender=genders[i].value;
        }
    }
        let upload_photo=0;
        var photo_name = ""; 
        var image_blb ="";
        const uploadValue = document.getElementsByName('photo_upload');
        if(uploadValue[0].checked == true){
            upload_photo = 1;
            photo_name = localStorage.getItem("img_name");
            image_blb = "data:image/jpeg;base64,"+localStorage.getItem("img");
        }
        else{
            upload_photo = 0;
            photo_name = "";
            image_blb = "";
        }
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const landmark = document.getElementById('landmark').value;
        const pincode = document.getElementById('areacode').value;

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        var checkboxes = document.querySelectorAll("input[name=hobbies]");
        var hobbies = "";
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                hobbies+= " "+checkboxes[i].value+",";
            }
        }
        hobbies = hobbies.slice(1, -1);   

    console.log(first_name,last_name,email_id,aadhar_no,date_of_birth,mobile,gender,upload_photo,photo_name,image_blb,country,state,city,street,landmark,pincode,username,password,hobbies);

        let result = await fetch('http://localhost:4000/create.php',{
        method:'post',
        body:JSON.stringify({first_name,last_name,email_id,aadhar_no,date_of_birth,mobile,gender,upload_photo,photo_name,image_blb,country,state,city,street,landmark,pincode,username,password,hobbies}),
        headers:{
            'Content-Type': 'application/json',
        }
        });
        result = await result.json();
        if(result.status == 'success'){
            window.alert("Student added successfully");
            location.reload();
        }
        else{
            window.alert("Student not added");
            location.reload();
        }
        localStorage.removeItem("img");
        localStorage.removeItem("img_name");
        window.location.href="listview.html";
}
//post end



//update api 
const updateStudent = async()=>{
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let id = user.id;
    const first_name = document.getElementById('fname').value;
    const last_name = document.getElementById('lname').value;
    const email_id = document.getElementById('email').value;
    const aadhar_no = document.getElementById('ano').value;
    const date_of_birth = document.getElementById('date').value;
    const mobile = document.getElementById('phone').value;
    const genders = document.getElementsByName('gender');
    var gender = "";
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender=genders[i].value;
        }
    }
        let upload_photo=0;
        var photo_name = ""; 
        var image_blb ="";
        const uploadValue = document.getElementsByName('photo_upload');
        if(uploadValue[0].checked == true){
            upload_photo = 1;
            photo_name = localStorage.getItem("img_name");
            image_blb = "data:image/jpeg;base64,"+localStorage.getItem("img");
        }
        else{
            upload_photo = 0;
            photo_name = user.photo_name
            image_blb = user.image_blb;
            
        }
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const landmark = document.getElementById('landmark').value;
        const pincode = document.getElementById('areacode').value;

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        var checkboxes = document.querySelectorAll("input[name=hobbies]");
        var hobbies = "";
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                hobbies+= " "+checkboxes[i].value+",";
            }
        }
        hobbies = hobbies.slice(1, -1);   

    console.log(first_name,last_name,email_id,aadhar_no,date_of_birth,mobile,gender,upload_photo,photo_name,image_blb,country,state,city,street,landmark,pincode,username,password,hobbies);

        let result = await fetch('http://localhost:4000/update.php',{
        method:'post',
        body:JSON.stringify({id,first_name,last_name,email_id,aadhar_no,date_of_birth,mobile,gender,upload_photo,photo_name,image_blb,country,state,city,street,landmark,pincode,username,password,hobbies}),
        headers:{
            'Content-Type': 'application/json',
        }
        });
        result = await result.json();
        if(result.status == 'success'){
            window.alert("Student updated successfully");
            location.reload();
        }
        else{
            window.alert("Student not updated");
            location.reload();
        }
        localStorage.removeItem("img");
        localStorage.removeItem("img_name");
        localStorage.removeItem("user");
        window.location.href="listview.html";
}

async function modify_student(id){
    let result = await fetch('http://localhost:4000/read.php?id='+id,{
        method:'get',
        headers:{
            'Content-Type': 'application/json',
        }
        });
        result = await result.json();
        if(result.length>0){  
            localStorage.setItem("user",JSON.stringify(result[0]))
            console.log(result);
            window.location.href="index.html";
            // location.reload();
        }
        else{
            window.alert("Student cannot modified");
            // location.reload();
        }
}

window.addEventListener('load', function () {
    if(localStorage.getItem("user")){
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        let id = user.id;
        document.getElementById('fname').value = user.first_name;
        document.getElementById('lname').value = user.last_name;
        document.getElementById('email').value = user.email_id;
        document.getElementById('ano').value = user.aadhar_no;
        document.getElementById('date').value = user.date_of_birth;
        document.getElementById('phone').value = user.mobile;
        document.getElementById('Male').checked = false;
        document.getElementById(`${user.gender}`).checked = true;
        document.getElementById('country').value = user.country;
        document.getElementById('state').value = user.state;
        document.getElementById('city').value = user.city;
        document.getElementById('street').value = user.street;
        document.getElementById('landmark').value = user.landmark;
        document.getElementById('areacode').value = user.pincode;
        document.getElementById('username').value = user.username;
        document.getElementById('password').value = user.password;
        let hobbie = user.hobbies;
        const hobbyarr = hobbie.split(", ");
        for(let i=0;i<hobbyarr.length;i++){
            document.getElementById(`${hobbyarr[i]}`).checked = true;
        }
        pnext();
        anext();
        getValue();
    }
    
  })