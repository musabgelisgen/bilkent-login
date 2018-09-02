# Bilkent Login
This Chrome extension makes logging in to srs and webmail accounts easy and fast.

##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Google Chrome

##### 1. Check out the repository

```bash
git clone https://github.com/musabgelisgen/bilkent-login
```

##### 2. Go to content.js and change login information

```javascript
var id = "<id_here>";
var srs_password = "<srs_password_here>";
var email_address = "<email_addess_here>";
var email_password = "<email_password_here>"; 
```

##### 3. Specify whether you receive your srs security code via email or phone in content.js

By default, `i_receive_srs_password_by_email` is set to `true`. If you don't like to get redirected to email site when you login to srs, set it to `false`.

##### 4. Use the extension in Chrome

1. Open chrome and go to this url: `chrome://extensions`
2. At the right top, toggle the 'Developer mode' on.
3. At the left top, click 'Load unpacked'.
4. Go to the parent directory of your working directory, choose the file bilkent-login and click open.

##### 5. Start Using 

Now, you can visit `https://stars.bilkent.edu.tr/accounts/login` and `https://webmail.bilkent.edu.tr/`, and enjoy logging in easily & safely.

##### 6. Help me improve.

You are encouraged to make suggestions about the bilkent-login system through [issues](https://github.com/musabgelisgen/bilkent-login/issues).
