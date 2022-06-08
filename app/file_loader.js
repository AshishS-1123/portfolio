// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';

// Import all the images
import '!file-loader?name=main_background.svg!./images/main_background.svg';
import '!file-loader?name=section_background.jpg!./images/section_background.jpg';
import '!file-loader?name=larrow.svg!./images/larrow.svg'
import '!file-loader?name=rarrow.svg!./images/rarrow.svg'
import '!file-loader?name=resume.png!./images/resume.png'

import 'file-loader?name=.htaccess!./.htaccess';
