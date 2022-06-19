const getFileExtension = async (fileName) => {
    let extension = "";

    for(let i = fileName.length - 1; i >= 0; i--) {

        if(fileName[i] === ".") break;
        else extension = fileName[i] + extension;
    }

    return extension.split('').reverse().join('')
}

export default getFileExtension;