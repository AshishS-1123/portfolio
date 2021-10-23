// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';

// Import all the images
import '!file-loader?name=main_background.svg!./images/main_background.svg';
import '!file-loader?name=section_background.jpg!./images/section_background.jpg';
import '!file-loader?name=larrow.svg!./images/larrow.svg'
import '!file-loader?name=rarrow.svg!./images/rarrow.svg'

// Import Icons
import '!file-loader?name=email.png!./icons/email.png'
import '!file-loader?name=github.png!./icons/github.png'
import '!file-loader?name=linkedin.png!./icons/linkedin.png'
import '!file-loader?name=phone.png!./icons/phone-call.png'

// Import all the fonts
import '!file-loader?name=Acme.ttf!./fonts/Acme.ttf'
import '!file-loader?name=Cairo.ttf!./fonts/Cairo.ttf'
import '!file-loader?name=KleeRegular.ttf!./fonts/KleeOne-Regular.ttf'
import '!file-loader?name=KleeBold.ttf!./fonts/KleeOne-SemiBold.ttf'

import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */
