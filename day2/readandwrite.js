import fs from 'fs';
const writeFileSync = (path, data) => {
try{
        fs.writeFileSync(path, data); 
    console.log("File has been written successfully!");
}
catch(error){
    console.log("some error occured");
}
}

writeFileSync(
    "./example.txt", 
    "This is the data written through the sync function"
);


const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8'); 
        console.log("File has been read successfully!");
        console.log("Content:", data);
    } catch (error) {
        console.log("Some error occurred while reading the file");
    }
}

readFileSync("./example.txt");

const appendFileSync = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Data has been appended successfully!");
    } catch (error) {
        console.log("Some error occurred while appending to the file");
    }
}

appendFileSync("./example.txt", "\nThis text was added using append.");