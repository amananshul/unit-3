import { v4 as uuidv4 } from 'uuid';



let user1= {
    name: 'John',
    id:"123efds"
}
let user2= {
    name: 'Johnyn',
    id:uuidv4()

}
let user3= {
    name: 'Janardan',
    id:uuidv4()
}
console.log(user1, user2)