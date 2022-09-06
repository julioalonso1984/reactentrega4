import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState (initial)
    const [itemStock, setItemStock] = useState (stock)
    const [itemAdd, setItemAdd] = useState (onAdd)
    
    const restar = (valor) => {
        if(valor > -1) {
            setCantidad (valor)
        }
    }
    const sumar = (valor) => {
        if(valor <= itemStock) {
            setCantidad (valor)
        }
        
    }
    let disponibles = stock - itemAdd

    const agregar = () => {
        if (itemStock > 0) {        
        setItemStock (itemStock - cantidad)
        setItemAdd (itemAdd + cantidad)
        }
    }
    return (
        
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-2'>
                    <p className='text-center'>Quedan disponibles {disponibles} Heladeras</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-primary" value="-" onClick={() => {restar(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} />
                        <input type="button" className="btn btn-primary" value="+" onClick={() => {sumar(cantidad + 1)}} />
                    </div>
                    <br />
                    <div className='d-grid gap-2'>
                        <input type="button" className="btn btn-primary" value="Agregar Producto" onClick={() => {agregar()}} />
                    </div>
                    <p>Usted ha comprado {itemAdd} Heladeras</p>
                </div>
            </div>            
        </div>
    )
}

export default ItemCount