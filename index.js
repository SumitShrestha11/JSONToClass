const JSONData = require('./data.json')
const os =  require('os')
const prompt = require('prompt-sync')()
const fs = require('fs')

const convertJSONToClass = (data,className) => {
    let content = ''
    let properties=''
    let constructorParams=''
    let initializers = ''
    
    for(key in data){
        if(Array.isArray(data[key])){
            properties = properties+`${key}:${key.charAt(0).toUpperCase()+key.slice(1)}[]${os.EOL}`
            const newClassName = key.charAt(0).toUpperCase()+key.slice(1)
            constructorParams = constructorParams+`${key}:${newClassName}[],${os.EOL}`
            initializers = initializers+`this.${key}=${key}${os.EOL}`
            content += convertJSONToClass(data[key][0],newClassName)
            continue;
        }
        if(typeof data[key] === 'object' && data[key] !== null){
            properties = properties+`${key}:${key.charAt(0).toUpperCase()+key.slice(1)}${os.EOL}`
            const newClassName = key.charAt(0).toUpperCase()+key.slice(1)
            constructorParams = constructorParams+`${key}:${newClassName},${os.EOL}`
            initializers = initializers+`this.${key}=${key}${os.EOL}`
            content += convertJSONToClass(data[key],newClassName)
            continue;
        }
        properties = properties+`${key}:${typeof data[key]}${os.EOL}`
        constructorParams = constructorParams+`${key}:${typeof data[key]},${os.EOL}`
        initializers = initializers+`this.${key}=${key}${os.EOL}`  
    }
    content += `class ${className}{${os.EOL}`
    content += `${properties}`
    content += `constructor(${os.EOL}${constructorParams}){${os.EOL}`
    content += `${initializers}}${os.EOL}}${os.EOL}${os.EOL}`
    
    return content
}

let className=prompt("Enter the name for the class: ")

const content=convertJSONToClass(JSONData,className)

fs.writeFile(`./Output.ts`, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })