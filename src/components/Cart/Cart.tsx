import './Cart.css'

export const Cart = () => {
    return (
        <div className="container">
            <div className="cart-content">
                <h3>Заказы</h3>
                <ul>
                    <li className='current active'>Текущий заказы</li>
                    <li className='story'>История заказов</li>
                </ul>
                <div className="current-cart">
                    Current cart
                </div>
                <div className="add-order">
                    добавить к заказу
                </div>
            </div>
        </div>
    )
}
