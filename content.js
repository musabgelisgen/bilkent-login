(function(){
	var id = "<id_here>";
	var srs_password = "<srs_password_here>";
	var email_address = "<email_addess_here>";
	var email_password = "<email_password_here>";

	var url = window.location.href;

	if (url.includes("webmail")){
		var not_loginned_yet = (document.getElementById("rcmloginuser") != null && document.querySelector('[id^="LoginForm-"]') != null);

		if (not_loginned_yet){
			document.getElementById("rcmloginuser").value = email_address;
			document.querySelector('[id^="LoginForm-"]').value = Array(email_password.length).join('*');
			document.getElementById("LoginForm_password").value = email_password;
			document.getElementById("rcm-login-form").submit();	
		}
	}
	else{
		document.getElementById("LoginForm_username").value = id;
		document.querySelector('[id^="LoginForm-"]').value = Array(srs_password.length).join('*');
		document.getElementById("LoginForm_password").value = srs_password;
		document.getElementById("login-form").submit();	

		var win = window.open("http://webmail.bilkent.edu.tr/", '_blank');
  		win.focus();
	}
	
})();
