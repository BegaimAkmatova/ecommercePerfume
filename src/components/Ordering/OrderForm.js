import { useReducer, useState, useEffect } from 'react';
import classes from './OrderForm.module.css';
import Button from './../UI/Button';
import { Link } from 'react-router-dom';


const surnameReducer = (prevState, action) => {
    if(action.type === 'SURNAME_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 3,
        }
    }

    if(action.type === 'SURNAME_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 3,
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const nameReducer = (prevState, action) => {
    if(action.type === 'NAME_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 3,
        }
    }

    if(action.type === 'NAME_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 3,
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const phoneReducer = (prevState, action) => {
    if(action.type === 'PHONE_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 9,
        }
    }
    
    if(action.type === 'PHONE_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 9,
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const emailReducer = (prevState, action) => {
    if(action.type === 'EMAIL_INPUT') {
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    }
    
    if(action.type === 'EMAIL_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.includes('@'),
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const streetReducer = (prevState, action) => {
    if(action.type === 'STREET_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 5
        }
    }
    
    if(action.type === 'STREET_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 5
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const cityReducer = (prevState, action) => {
    if(action.type === 'CITY_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 5
        }
    }
    
    if(action.type === 'CITY_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 5
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const cvcReducer = (prevState, action) => {
    if(action.type === 'CVC_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length < 4
        }
    }
    
    if(action.type === 'CVC_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length < 4
        }
    }

    return {
        value:'',
        isValid: false
    }
}
const cardRegex = RegExp( /^4[0-9]{12}(?:[0-9]{3})?$/)
const cardReducer = (prevState, action) => {
    if(action.type === 'CARD_INPUT') {
        return {
            value: action.value,
            isValid: cardRegex
        }
    }
    
    if(action.type === 'CARD_INPUTBLUR') {
        return {
            value: prevState.value,
            isValid: cardRegex
        }
    }

    return {
        value:'',
        isValid: false
    }
}

const OrderForm = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [surnameState, dispatchSurname] = useReducer(surnameReducer, {
        value: '',
        isValid: false,
        }
    )

    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: '',
        isValid: false,
        }
    )

    const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
        value: '',
        isValid: false,
        }
    )

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
        }
    )

    const [streetState, dispatchStreet] = useReducer(streetReducer, {
        value: '',
        isValid: false,
        }
    )

    const [cityState, dispatchCity] = useReducer(cityReducer, {
        value: '',
        isValid: false,
        }
    )

    const [cvcState, dispatchCvc] = useReducer(cvcReducer, {
        value: '',
        isValid: false,
        }
    )
    const [cardState, dispatchCard] = useReducer(cardReducer, {
        value: '',
        isValid: false,
        }
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormIsValid(
                surnameState.isValid && 
                nameState.isValid &&
                phoneState.isValid && 
                emailState.isValid &&
                streetState.isValid &&
                cityState.isValid &&
                cvcState.isValid &&
                cardState.isValid
            );
        },2000);
            return () => {
                clearTimeout(timer);
            }
    },[surnameState, nameState,phoneState, emailState, streetState,cityState, cvcState,cardState])

    const surnameChangeHandler  = (e) => {
        dispatchSurname({type: 'SURNAME_INPUT', value: e.target.value})
    }

    const nameChangeHandler  = (e) => {
        dispatchName({type: 'NAME_INPUT', value: e.target.value})
    }

    const phoneChangeHandler  = (e) => {
        dispatchPhone({type: 'PHONE_INPUT', value: e.target.value})
    }

    const emailChangeHandler  = (e) => {
        dispatchEmail({type: 'EMAIL_INPUT', value: e.target.value})
    }

    const streetChangeHandler  = (e) => {
        dispatchStreet({type: 'STREET_INPUT', value: e.target.value})
    }

    const cityChangeHandler  = (e) => {
        dispatchCity({type: 'CITY_INPUT', value: e.target.value})
    }

    const cvcChangeHandler  = (e) => {
        dispatchCvc({type: 'CVC_INPUT', value: e.target.value})
    }
    const cardChangeHandler  = (e) => {
        dispatchCard({type: 'CARD_INPUT', value: e.target.value})
    }
    const validateSurnameHandler = () => {
        dispatchSurname({type: 'SURNAME_INPUTBLUR'})
    }

    const validateNameHandler = () => {
        dispatchName({type: 'NAME_INPUTBLUR'})
    }

    const validatePhoneHandler = () => {
        dispatchPhone({type: 'PHONE_INPUTBLUR'})
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'EMAIL_INPUTBLUR'})
    }

    const validateStreetHandler = () => {
        dispatchStreet({type: 'STREET_INPUTBLUR'})
    }

    const validateCityHandler = () => {
        dispatchCity({type: 'CITY_INPUTBLUR'})
    }

    const validateCvcHandler = () => {
        dispatchCvc({type: 'CVC_INPUTBLUR'})
    }
    const validateCardHandler = () => {
        dispatchCard({type: 'CARD_INPUTBLUR'})
    }
    const submitHandler = (e) => {
        e.preventDefault();

        props.onConfirm(surnameState.value, nameState.value, phoneState.value, emailState.value, streetState.value, cityState.value,cvcState.value,cardState.value)
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={`${classes.control} ${surnameState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='surname'>Фамилия</label>
                <input  
                    type='text' 
                    id='surname' 
                    onChange={surnameChangeHandler}
                    value={surnameState.value}
                    onBlur={validateSurnameHandler}
                />
                {!formIsValid && <p>Please enter a valid surname</p>}
            </div>
            <div className={`${classes.control} ${nameState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='name'>Имя</label>
                <input 
                    type='text' 
                    id='name' 
                    onChange={nameChangeHandler}
                    value={nameState.value}
                    onBlur={validateNameHandler}
                />
                {!formIsValid && <p>Please enter a valid name</p>}
            </div>
            <div className={`${classes.control} ${phoneState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='phone'>Телефон</label>
                <input 
                    type='number'
                    id='phone'
                    onChange={phoneChangeHandler}
                    value={phoneState.value}
                    onBlur={validatePhoneHandler}
                />
                {!formIsValid && <p>Please enter a valid phone</p>}
            </div>
            <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='email'>E-Mail</label>
                <input 
                    type='email'
                    id='email' 
                    onChange={emailChangeHandler}
                    value={emailState.value}
                    onBlur={validateEmailHandler}
                />
                {!formIsValid && <p>Please enter a valid email</p>}
            </div>
            <div className={`${classes.control} ${streetState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='street'>Адрес доставки</label>
                <input 
                    type='text' 
                    id='street'
                    onChange={streetChangeHandler}
                    value={streetState.value}
                    onBlur={validateStreetHandler}
                />
                {!formIsValid && <p>Please enter a valid street</p>}
            </div>
            <div className={`${classes.control} ${cityState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='city'>Город</label>
                <input 
                    type='text' 
                    id='city'
                    onChange={cityChangeHandler}
                    value={cityState.value}
                    onBlur={validateCityHandler}
                />
                {!formIsValid && <p>Please enter a valid city</p>}
            </div>
            <div className={`${classes.control} ${cvcState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='cvc'>CVC</label>
                <input 
                    type='number' 
                    id='cvc'
                    onChange={cvcChangeHandler}
                    value={cvcState.value}
                    onBlur={validateCvcHandler}
                />
                {!formIsValid && <p>Please enter a valid cvc</p>}
            </div>
            <div className={`${classes.control} ${cardState.isValid === false ? classes.invalid : ''}`}>
                <label htmlFor='card'>Card</label>
                <input 
                    type='number' 
                    id='card'
                    onChange={cardChangeHandler}
                    value={cardState.value}
                    onBlur={validateCardHandler}
                />
                {!formIsValid && <p>Please enter a valid Card</p>}
            </div>
            <div className={classes.actions}>
                <Button onClick={props.onCloseOrder}>Отменить</Button>
                <Link to='/form'><Button disabled={!formIsValid}>Заказать</Button></Link>
            </div>
        </form>
    )
}

export default OrderForm;