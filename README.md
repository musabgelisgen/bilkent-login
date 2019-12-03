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
var id = "<srs_id_here>";
var srs_password = "<srs_password_here>";
var webmail_address = "<webmail_address_here>";
var webmail_password = "<webmail_password_here>";
```

Please make sure the provided information are correct before opening srs or webmail.

##### 3. Specify whether you receive your srs security code via email or phone in content.js

By default, `i_receive_srs_password_by_email` is set to `true`. If you don't like to get redirected to email site when you login to srs, set it to `false`.

##### 4. Choose your preferred mail service for Bilkent

By default, bilkent-login is designed to open webmail services for verification. You can set `preferredMailServiceForBilkent` to be one of the following options:
- gmail
- hotmail
- outlook
- or you can let it as it is for webmail.


##### 5. Use the extension in Chrome

1. Open chrome and go to this url: `chrome://extensions`
2. At the right top, toggle the 'Developer mode' on.
3. At the left top, click 'Load unpacked'.
4. Go to the parent directory of your working directory, choose the file bilkent-login and click open.

##### 6. Start Using

Now, you can visit srs and webmail, and enjoy logging in easily & safely.

##### 7. Support and Contribution

All questions, bug reports and feature requests are handled via the [issues](https://github.com/musabgelisgen/bilkent-login/issues) which also acts as the knowledge base.
