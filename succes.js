let dataform = JSON.parse(sessionStorage.getItem('formdata'));
let template = '<div class="dateSucces"><p>First Name</p><p>' + dataform.first_name + '</p></div><div class="dateSucces"><p>Last Name</p><p>' + dataform.last_name + '</p></div><div class="dateSucces"><p>Telephone number</p><p>' + dataform.phone + '</p></div><div class="dateSucces"><p>Email</p><p>' + dataform.email + '</p></div><div class="dateSucces"><p>Address</p><p>' + dataform.address + '</p><p>,' + dataform.address2 + '</p></div><div class="dateSucces"><p>Country</p><p>' + dataform.country + '</p></div><div class="dateSucces"><p>State</p><p>' + dataform.State + '</p></div><div class="dateSucces"><p>City</p><p>' + dataform.City + '</p></div>';