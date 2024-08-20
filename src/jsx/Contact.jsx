import '../scss/elements/_contact.scss';

export const Contact = () =>{
    return(
        <section className='container__section'>
            <form>
                <h2>Napisz do nas !</h2>
                <div className='input-box'>
                    <label>Imie i Nazwisko*</label>
                    <input type='text' className='field' placeholder='Podaj swoje imie' required/>
                </div>
                <div className='input-box'>
                    <label>Email*</label>
                    <input type='text' className='field' placeholder='Podaj swoj Email' required/>
                </div>
                <div className='input-box'>
                    <label>Temat*</label>
                    <input type='text' className='field' placeholder='Podaj Temat' required/>
                </div>
                <div className='input-box'>
                    <label>Telefon</label>
                    <input type='text' className='field' placeholder='Podaj swoj numer ' required/>
                </div>
                <div className='input-box '>
                    <label>Treść wiadomosci*</label>
                    <input type='text' className='field array__text' placeholder='' required/>
                </div>
            </form>

        </section>
    )
}