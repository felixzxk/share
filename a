const fs = require("fs");
const pptxgen = require("pptxgenjs");
const outpath = "D:/test1.pptx";
const inpath = "D:/test.txt";
function test(inpath, outpath) {
    fs.readFile(inpath, "utf-8", (err, data) => {
        if (err) {
            reject("读取错误\n", err);
        } else {
            const buffer = Buffer.from(data, "base64");
            fs.writeFile(outpath, buffer, (err) => {
                if (err) {
                    console.error("写入失败", err);
                } else {
                    console.log("写入成功");
                }
            })
        }
    })
}
test(inpath, outpath);
