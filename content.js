(function(){
	var id = "<srs_id_here>";
	var srs_password = "<srs_password_here>";
	var webmail_address = "<webmail_address_here>";
	var webmail_password = "<webmail_password_here>";

	var i_receive_srs_password_by_email = true;
	var preferredMailServiceForBilkent = "webmail";

	var urls = {
		webmail: "http://webmail.bilkent.edu.tr/",
		gmail: "https://mail.google.com/mail/u/0/#inbox",
		hotmail: "https://outlook.live.com/mail/inbox",
		outlook: "https://outlook.live.com/mail/inbox"
	};

	var url = window.location.href;
	
	if (url.includes("/site/verifyEmail")) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", "http://localhost:8099", true ); // false for synchronous request
		xmlHttp.send(null);

		setTimeout(function() {
			var verificationCode = xmlHttp.responseText;
			document.getElementById("EmailVerifyForm_verifyCode").value = verificationCode;
			document.getElementById("verifyEmail-form").submit();
		}, 2000); //wait 2 seconds
	}
	else if (url.includes("webmail")){
		var not_loginned_yet = (document.getElementById("rcmloginuser") != null && document.querySelector('[id^="LoginForm-"]') != null);

		if (not_loginned_yet){
			document.getElementById("rcmloginuser").value = webmail_address;
			document.querySelector('[id^="LoginForm-"]').value = Array(webmail_password.length).join('*');
			document.getElementById("LoginForm_password").value = webmail_password;
			document.getElementById("rcm-login-form").submit();
		}
	}
	else{
		document.getElementById("LoginForm_username").value = id;
		document.querySelector('[id^="LoginForm-"]').value = Array(srs_password.length).join('*');
		document.getElementById("LoginForm_password").value = srs_password;
		document.getElementById("login-form").submit();

		if (i_receive_srs_password_by_email){
			var win = window.open(urls[preferredMailServiceForBilkent], '_blank');
			win.focus();
		}
	}
})();
