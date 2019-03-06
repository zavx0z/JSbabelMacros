const {createMacro} = require("babel-plugin-macros");
const printAST = require("ast-pretty-print");

module.exports = createMacro(macro);

function macro({references, babel}) {
    references.default.forEach(reference => {
        const args = reference.parentPath.get("arguments")
        console.log(printAST(args))
    })
}

