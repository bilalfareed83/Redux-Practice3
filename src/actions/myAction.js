// export const changeNameAction = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }


// export const changeNameAction = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(res2 => {
//                 dispatch({
//                     type: 'CHANGE_NAME',
//                     payload: res2[0].name
//             })
//         })
//     }    
// }

export const changeNameAction = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const res = await data.json()
            
                dispatch({
                    type: 'CHANGE_NAME',
                    payload: res[0].name
            
        })
    }    
}