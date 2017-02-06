const nodemailer = require('nodemailer');
const async = require('async');
const readModule = require('./readModuleFile.js')
const userEmail = require('./userEmail.json')

const transporter = nodemailer.createTransport({
    //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
    // service: 'qq',
    host: "smtp.163.com",
    secureConnection: true, // use SSL 
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: userEmail.user,
        //这里密码不是qq密码，是你设置的smtp密码
        pass: userEmail.pass
    }
});

function getEmail(callback) {
    // 加载文件
    readModule('./index.html', function(err, words) {
        let mailOptions2 = {
            from: userEmail.user, // 发件地址
            to: 'longfeili0925@gmail.com', // 收件列表
            subject: 'Hello sir', // 标题
            //text和html两者只支持一种
            text: 'Hello world ', // 标题
            html: words // 模板内容
        }
        return callback(mailOptions2)
    });
}

/**
 * 测试邮件
 * @return {[type]} [description]
 */
function test() {
    getEmail(function(mailOptions2) {
        transporter.sendMail(mailOptions2, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    })
}
// 运行
test()
