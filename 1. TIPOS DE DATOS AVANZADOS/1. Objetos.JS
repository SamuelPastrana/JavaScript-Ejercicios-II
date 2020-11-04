var persona = {
    nombre: 'Samuel',
    edad: 21,
    saludar : function(){
        console.log('Hola ' + this.nombre);
        console.log('Tienes ' + this.edad);
    }
};
console.log(persona.nombre);
persona.saludar();