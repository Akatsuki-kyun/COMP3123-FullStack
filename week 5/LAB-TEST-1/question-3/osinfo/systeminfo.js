const os = require('os');

function getSystemInfo(){
    //return CPU arch, hostname, os name
    return("The system arch is "+ os.arch() + ", hostname: " +os.hostname()+", os platform:" +os.platform());
}

function getUserInfo(){
    //return userinfo, username, home directory
    return("The userinfo is: "+ os.userInfo() +" ,home directory is: " +os.homedir);
}

/*getSystemInfo();
getUserInfo();*/