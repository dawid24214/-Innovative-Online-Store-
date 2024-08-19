import ReactDOM from "react-dom/client";
import '../scss/elements/_LoginForm.scss'
export  const LoginForm = () => {
    return (
        <div className='array__container'>
        <div className='array__login'>
            <tr>
                <th colSpan='2'>Logowanie</th>
            </tr>
            <tr>
                <td><label htmlFor='username'>Nazwa uzytkownika:</label></td>
                <td><input type='text'  id ='username' name='username' required /></td>
            </tr>
            <tr>
                <td><label htmlFor='password'>Hasło:</label></td>
                <td><input type='password' id='password' name='password' required/></td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <a href='#'>Odzyskaj hasło </a>
                </td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <button type='submit'>Zaloguj się</button>
                </td>
            </tr>
        </div>
        </div>
    );
};

