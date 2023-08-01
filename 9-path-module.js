
const path=require('path')
console.log(path.sep)

const filepath=path.join('/content/','subfolder', 'text.txt')
console.log(filepath)

//show last portion of file
const base=path.basename(filepath)
console.log(base)

//returns absolute path
const absolute=path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)