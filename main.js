
const tara= (ev)=>{
    sessionStorage.setItem('Tara',JSON.stringify(ev.target.value));
  
alegereOras();
getState();
getPhoneId()
  };
  function getPhoneId(){
    let url = '';
    url = 'https://countriesnow.space/api/v0.1/countries/codes'
    jQuery.ajax({
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: url,
        data: JSON.stringify({
            "country":sessionStorage.getItem('Tara').replace(/['"]+/g, ''),
        })
    }).done(function(response) {
  sessionStorage.setItem('phoneId',JSON.stringify(response.data))
  for (let [key, value] of Object.entries(response.data)) {
 
  sessionStorage.setItem('phoneId',value)
}}).fail(function(response){
    console.log(response)
})
}
  function alegereOras(){
let templateOras='';
    let url = '';
    url = 'https://countriesnow.space/api/v0.1/countries/cities'
    jQuery.ajax({
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: url,
        data: JSON.stringify({
            "country":sessionStorage.getItem('Tara').replace(/['"]+/g, ''),
        })
    }).done(function(response) {
  sessionStorage.setItem('Oras',JSON.stringify(response.data))
  for (let [key, value] of Object.entries(response.data)) {
    templateOras+='<option value='+value+'>'+value+'</option>'
}
jQuery('#city').html(templateOras)

    }).fail(function(response) {
        console.log(response)
        templateOras+='<option value="No city found">No city found</option>';
        jQuery('#city').html(templateOras)
    }); 
  }
  function getState(){
    let templateState='';
    let url = '';
    url ='https://countriesnow.space/api/v0.1/countries/states'
    jQuery.ajax({
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: url,
        data: JSON.stringify({
            "country":sessionStorage.getItem('Tara').replace(/['"]+/g, ''),
        })
    }).done(function(response) {
  
  for (let [key, value] of Object.entries(response.data)) {
    console.log(value)
    if(value==0){
        templateState+='<option value="No state found">No state found</option>'
        jQuery('#state').html(templateState)
    }else{
    sessionStorage.setItem('State',JSON.stringify(value))
    alegereState()}
}


    }).fail(function(response) {
        console.log(response)
         
        templateState+='<option value="No state found">No state found</option>'
        jQuery('#state').html(templateState)
    }); 
  }
  function alegereState(){
    let templateState='';
    console.log(JSON.parse(sessionStorage.getItem('State')))
    for (let [key, value] of Object.entries(JSON.parse(sessionStorage.getItem('State')))) {
 
        templateState+='<option value='+value.name+'>'+value.name+'</option>'
      
    }
    jQuery('#state').html(templateState)
  }
  function formData(){
    const formdate= {
          "first_name":jQuery('#firstname').val(),
          "last_name":jQuery('#lastname').val(),
          "phone": sessionStorage.getItem('phoneId')+jQuery('#telefon').val(),
          "email":jQuery('#email').val(),
          "address":  jQuery('#address1').val(),
          "address2":jQuery('#address2').val(),
          "country": jQuery('#country').val(),
          "city": jQuery('#city').val(),
          "state":  jQuery('#state').val(),
        };
        const JsonObj=JSON.stringify(formdate)
      console.log(JsonObj)
   
      sessionStorage.setItem('formdata',JsonObj) 
  validateForm()
  let dataform=JSON.parse(sessionStorage.getItem('formdata'))
  if(dataform.first_name!=""&& dataform.last_name!=""&& dataform.phone.length >4 &&dataform.email!=""&&dataform.address!=""&&dataform.country!=""&&dataform.city!=""&&dataform.state!=""){
    jQuery("#btnsub").attr('href',"https://alexcampean19.github.io/ddroiddapp/succes.html")
    jQuery('.alertform').css('display',"none")
  }
       };
       console.log(JSON.parse(sessionStorage.getItem('formdata')))
       function validateForm() {
          let fname = document.forms["contactForm"]["firstname"].value;
          let lname = document.forms["contactForm"]["lastname"].value;
          let telef = document.forms["contactForm"]["tel"].value;
          let email = document.forms["contactForm"]["email"].value;
          let adr = document.forms["contactForm"]["adr1"].value;
          if (fname == "") {
          jQuery('#firstname').css("border","1px solid red")
          jQuery('#erFname').text('First Name is required')
       
          }else{
              jQuery('#firstname').css("border","1px solid #003C55")
              jQuery("#erFname").css('display',"none")
           
          }     if ( lname=="") {
              jQuery('#lastname').css("border","1px solid red")
              jQuery('#erLname').text('Last Name is required')
              jQuery('.alertform').css('display',"inline-block")
              }else{
                  jQuery('#lastname').css("border","1px solid #003C55")
                  jQuery("#erLname").css('display',"none")
              
              }
              if ( telef.length<10) {
                  jQuery('#telefon').css("border","1px solid red")  
                        jQuery('#erTel').text('Wrong phone number format')
                        jQuery('.alertform').css('display',"inline-block")
                        console.log(telef.length<10)
                
                  }else{
                      jQuery('#telefon').css("border","1px solid #003C55")
                      jQuery("#erTel").css('display',"none")
                   
                  }
                    if ( email=="") {
                      jQuery('#email').css("border","1px solid red")
                      jQuery('#erEmail').text('Email is required')  
                       jQuery('.alertform').css('display',"inline-block")
                      }
                      else{
                          jQuery('#email').css("border","1px solid #003C55")
                          jQuery("#erEmail").css('display',"none")
          
                      } 
                       if ( adr=="") {
                          jQuery('#address1').css("border","1px solid red")
                          jQuery('#erAddr').text('Address is required')
                          jQuery('.alertform').css('display',"inline-block")
                     
                          }else{
                              jQuery("#erAddr").css('display',"none")
                              jQuery('#address1').css("border","1px solid #003C55")
                      
                          }
                          $('#country option').each(function() {
                              if($(this).is(':selected')){
                                  jQuery('#erCountry').text('Country is required')
                                  jQuery('#country').css("border","1px solid red")
                                  jQuery('.alertform').css('display',"inline-block")
                              }else{
                                  jQuery('#country').css("border","1px solid #003C55")
                                  jQuery("#erCountry").css("display","none")
                    
                              }})
                              $('#city option').each(function() {
                                  if($(this).is(':selected')){
                                      jQuery('#city').css("border","1px solid red")
                                      jQuery('#erCity').text('City is required')
                                      jQuery('.alertform').css('display',"inline-block")
                                  }else{
                                      jQuery('#city').css("border","1px solid #003C55")
                                      jQuery("#erCity").css("display","none")
                               
                                  }})
                      }
                      
function Tari(){
    let templateTara='';
    let url = '';
    url = 'https://countriesnow.space/api/v0.1/countries'
    jQuery.ajax({
        method: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: url,

    }).done(function(response) {
  sessionStorage.setItem('tari',JSON.stringify(response.data))
  for (let [key, value] of Object.entries(response.data)) {
 
    templateTara+='<option value='+value.country+'>'+value.country+'</option>'
}

  jQuery('#country').html(templateTara)

    }).fail(function(response) {
        console.log(response)
        templateTara+='<option value="No country found">No country found</option>';
        
  jQuery('#country').html(templateTara)
    }); 

 


          return(
            <div className="mainbox2">
          
          <h2>Application Form</h2>
            <form name="contactForm" className="formcontent">
                <p className="contact">Contact Information</p>
                <div className="dateReq">
                    <div className="names">
                        <div className="part1input">
                            <div className="part2input">
                                <p className="inputname">First Name</p>
                                <p className="alert">*</p>
                            </div>
                            <input name="firstname" className="first" type="text" id="firstname" placeholder="First Name" required/></div>
                        <div className="part1input">
                            <div className="part2input">
                                <p className="inputname">Last Name</p>
                                <p className="alert">*</p>
                            </div><input name="lastname"className="last" id="lastname" type="text" placeholder="Last Name" required/></div>
                    </div>
                    <div className="telefon">
                        <div className="part1input">
                            <div className="part2input">
                                <p className="inputname">Phone number</p>
                                <p className="alert">*</p>
                            </div> <input name="tel" className="date" type="number" id="telefon" placeholder="Telephone" required/>
                        </div>
                        <div className="part1input">
                            <div className="part2input">
                                <p className="inputname">Email address</p>
                                <p className="alert">*</p>
                            </div> <input name="email" className="date" type="text" id="email" placeholder="Email Address" required/>
                        </div>
                    </div>
                </div>
                <p className="contact">Address</p>
                <div className="part3input">
                    <div className="part2input">
                        <p className="inputname">Address Line 1</p>
                        <p className="alert">*</p>
                    </div> <input name="adr1" className="date" id="address1" type="text" placeholder="Address" required/></div>
                <div className="part3input">
                    <div className="part2input">
                        <p className="inputname">Address Line 2</p>
                    </div> <input className="date" id="address2" type="text" placeholder="Address" /></div>
                <div className="nationaldate">
                    <div className="part4input">
                        <div className="part2input">
                            <p className="inputname">Country</p>
                            <p className="alert">*</p>
                        </div><select  required id="country" className="date" type="text" placeholder="Country" onChange={tara} ><option value="Country" >Country</option></select></div>
                    <div className="part4input">
                        <div className="part2input">
                            <p className="inputname">State </p>
                        </div><select className="date" type="text" id="state" placeholder="State"><option  value="State">State</option></select></div>
                    <div className="part4input">
                        <div className="part2input">
                            <p className="inputname">City</p>
                            <p className="alert">*</p>
                        </div> <select className="date" type="text" id="city" placeholder="City" required><option  value="City">City</option></select></div>
                </div>

            </form><div id="lastform">
            <div className="alertform">
                <p>Please fix the following errors to proced:</p>
                <ul className="errors">
                    <li id="erFname"></li>
                    <li id="erLname"></li>
                    <li id="erTel"></li>
                    <li id="erEmail"></li>
                    <li id="erAddr"></li>
                    <li id="erCountry"></li>
                    <li id="erCity"></li>
                </ul>
            </div>
            <a id="btnsub"><button className="joinus" id="submitbtn"  onClick={formData} >Join Us</button></a>
</div>

            </div>
          )
          }
          ReactDOM.render(<Tari/>,document.querySelector("#mainbox"))