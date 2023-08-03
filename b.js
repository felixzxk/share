const fs = require("fs");
function test(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const base64Data = data.toString("base64");
                resolve(base64Data);
            }
        })
    })
}
const path = "D:/test.pptx";
const path4write = "D:/test.txt";
function write2file(path, text) {
    fs.writeFile(path, text, (err) => {
        if (err) {
            console.error("写入失败");
        } else {
            console.log("写入成功");
        }
    })
}
test(path).then((data) => {
    write2file(path4write, data);
}).catch(err => {
    console.error(err);
})
