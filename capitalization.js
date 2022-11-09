const capital = (string)=>{
    const name = string.split('');
    name[0]= name[0].toUpperCase()
    const joinName = name.join('');

       return joinName
 }

 module.exports = capital;