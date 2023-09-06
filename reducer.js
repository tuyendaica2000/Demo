const init = {
    cars: ['BMW', 'Mercedes', 'Honda'],
}

export default function reducer(state = init, action, args) {
    console.log(action, args)
    switch (action) {
        case 'ADD': {
            const [newCar] = args
            return{
                ...state,
                cars: [...state.cars, newCar]
            }
        }
        default: {
            return state
        }
    }
}