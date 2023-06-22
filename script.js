const equal = document.querySelector('.equal')
equal.addEventListener('click', equalFunction)
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const signs = ['+', '-', '*', '/']
let A = ['']
let B = ['']
let C = []
let value
function plusFunction(){
    value=Number(A[0])+Number(B[0])
}
function minusFunction(){
    value=Number(A[0])-Number(B[0])
}
function multiplyFunction(){
    value=Number(A[0])*Number(B[0])
}
function divideFunction(){
    value=Number(A[0])/Number(B[0])
}
function equalFunction(){
    let inplength = document.querySelector('.input').value
    for(let i=0; i<inplength.length; i++){
            if (numbers.includes(inplength[i]) & C.length==0){
                A[0]=A[0]+inplength[i]
            }
            else if(C.length!=0 & numbers.includes(A[0][0])==false){
                A.push(inplength[i])
            }
            else if (signs.includes(inplength[i])){
                C.push(inplength[i])
            }
            else if(numbers.includes(A[0][0])!=false & C.length!=0){
                B[0]=B[0]+inplength[i]
            }
            else{
                alert('Mistake!')
            }
        

    console.log(A)
    console.log(C)
    console.log(B)
    console.log(typeof(A[0]))
    }
    if(C[0]=='+'){
        plusFunction()
    }
    else if(C[0]=='-'){
        minusFunction()
    }
    else if(C[0]=='*'){
        multiplyFunction()
    }
    else if(C[0]=='/'){
        divideFunction()
    }
    document.querySelector('.input').value=value
    while(A.length > 0) {
        A.pop();
    }
    A.push('')
    while(B.length > 0) {
        B.pop();
    }
    B.push('')
    while(C.length > 0) {
        C.pop();
    }
    console.log(A)
    console.log(C)
    console.log(B)
}