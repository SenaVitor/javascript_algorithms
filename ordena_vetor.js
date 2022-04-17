let cursos = [
    {
        nome: "javascript",
        preco: 15
    },
    {
        nome: "phyton",
        preco: 20 
    },
    {
        nome: "java",
        preco: 40
    },
    {
        nome: "c#",
        preco: 30
    },
    {
        nome: "kotlin",
        preco: 10
    }
]

for(let i = 0; i < cursos.length; i++){
    for(let j = 0; j < cursos.length; j++){   
        if(cursos[i].preco < cursos[j].preco){
            aux = cursos[i]
            cursos[i] = cursos[j]
            cursos[j] = aux
        }
    }
}
console.table(cursos)