let interativeMenu = ""

do{
    interativeMenu = parseFloat(prompt("Bem vindo a calculadora geométrica, escolha a opção que você deseja calcular?\n\n>>Opção - 1 Área do triângulo\n>>Opção - 2 Área do retângulo\n>>Opção - 3 Área do quadrado\n>>Opção - 4 Área do trapézio\n>>Opção - 5 Área do circulo\n>>Opção - 6 Sair"))

    switch(interativeMenu){
        case 1:
             function triangle(baseTriangle, heightTriangle){
              
                 return alert ("A área do triângulo é " +  baseTriangle * heightTriangle / 2)
            }
                                    
             let baseTriangle = prompt("Qual a base do triângulo?")
           
            let heightTriangle = prompt("Qual a altura do triângulo?")
            
            
            triangle(baseTriangle, heightTriangle)
            
            break
        case 2:
               function Rectangle(baseRectangle, heightRectangle){
                return alert("A área do retângulo é  " + (baseRectangle * heightRectangle))
               }    
        let baseRectangle = prompt("Qual a base do retângulo?")

        let heightRectangle = prompt("Qual a altura do retângulo?")
                  
           Rectangle(baseRectangle, heightRectangle)     
           break
        case 3:
                function square(side){
                return alert("A área do quadrado é  " + (side**2))
            }

            let side = prompt("Qual o lado do quadrado?")
            square(side)            
            break
        case 4:
                function trapeze(largerBase, smallerBase, height){
               return alert("A área do trápezio é  " + ((largerBase + smallerBase) * (height / 2)))
            }

            let largerBase = parseInt(prompt("Qual a  base maior?"))

            let smallerBase = parseInt(prompt("Qual a base menor?"))

            let height = parseInt(prompt("Qual a altura?"))

            trapeze(largerBase, smallerBase, height)
                        
            break
        case 5:
            function circle(radius){
                alert("A área do circulo é  " + (3.14 * radius**2) )
            }
            let radius = prompt("Qual o raio do circulo?")

            circle(radius)
            break
        case 6:
            alert("Encerrando programa...")
            break
        default:
            alert("Opção inválida!!")
    }


} while(interativeMenu !== 6)