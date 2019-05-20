// 自己的代码自己测   使用工作流中标准的自测方法    写测试代码让代码通过测试
const{add}=require("../index");
// 期待代码运行成功
const expect = require('chai').expect;

// 测试代码, describe it expect
describe("两数相加结果为和",()=>{
    // 举例
    it('两个字符串数相加,应该转变类型后返回其值',()=>{
        expect(add("11","22")).to.equal(33);
    });
    it("当参数类型错误时,返回NaN",()=>{
        expect(add(0,null)).to.equal(NaN);
    })
})