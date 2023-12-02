const Cart = []
export const reducer =(state=Cart,action)=> {
    switch (action.type) {
        case "Buy":
        let arr = [...state]
        let index = arr.findIndex((item)=> item.id== action.payload.id)
        if (index == -1) {
            arr.push(action.payload)
        } else {
            arr[index].quantity= arr[index].quantity+1
        }
            return arr
            ;
        case "downCount":
            let downState = [...state];
            let index1 = downState.findIndex((item)=> item.id== action.payload);
            if (downState[index1].quantity==1) {
                if (confirm("Do you want delete product?")==true) {
                    downState.splice(index1,1)
                }
            } else {
                downState[index1].quantity=downState[index1].quantity-1;
            }
            return downState;
        case "upCount":
            let upState = [...state];
            let index2 = upState.findIndex((item)=> item.id== action.payload);
            upState[index2].quantity=upState[index2].quantity+1;
            return upState;
        case "Delete":
            let deleteState = [...state];
            let index3 = deleteState.findIndex((item)=> item.id== action.payload);
            if (index3) {
                if (confirm("Do you want delete product?")==true) {
                    deleteState.splice(index3,1)
                }    
            }
            return deleteState;
        default:
            return state
            
    }
}