import fs from 'fs';

export function deleteFile(path){
    try{
        fs.unlinkSync(path)
        console.log("File deleted!")
    } catch (err){
        console.error(err.message)
    }
}