const initialState = {
    name: 'petya',
    email: 'test@mail.ru'
};

const contact = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_CONTACT_DATA':
            return {
                name: action.name,
                email: action.email
            }
    }

    return state;
};

export default contact
