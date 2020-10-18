
//Lifo: Stack Follow Last in First Out algorithem....
class Stack{
    constructor(){
        this.stack=[]
    }
    add(item){
        this.stack.push(item)
    }
    remove(){
        if(this.stack.length){
            this.stack.pop()
        }
    }

}
const guest = new Stack
guest.add("ProNazmul")
guest.add("Sania Akter")
guest.add("Rashsdul Alam")
console.log(guest.stack)
guest.remove()
console.log(guest.stack)
