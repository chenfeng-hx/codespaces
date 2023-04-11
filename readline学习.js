// //引入readline模块
const readline = require('reacdline');
// //创建readline接口实例
// let r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// //使用question方法
// r1.question('你想吃什么？',function (anwser){
//     console.log(`我想吃${anwser}`);
//     //添加close事件，不然不会结束
//     r1.close();
// });
// //close事件监听
// r1.on('close',function (){
//     //结束程序
//     process.exit(0);
// });

// 先来实现一个可交互命令行
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'search>>> '
})

rl.prompt()

rl.on('line', (line) => {
    console.log(line)
    rl.prompt()
}).on('close', () => {
    console.log('再见!')
    process.exit(0)
})