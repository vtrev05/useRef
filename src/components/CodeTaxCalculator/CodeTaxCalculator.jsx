import React, {useRef} from 'react'

const CodeTaxCalculator = () => {
    const grossIncomeRef = useRef(null);
    const taxPercentRef = useRef(null);

    const getNetIncome = () => {
        const grossIncome = grossIncomeRef.current.valueAsNumber;
        const taxPercent = taxPercentRef.current.valueAsNumber;
        const total = grossIncome - grossIncome * (taxPercent / 100);
        
       
        console.log('El dinero neto a percibir es: ', total)
    }
    console.log(grossIncomeRef)

  return (
    <div>
        <h1>Calculadora sueldo neto</h1>
        <label htmlFor="gross-income">Sueldo bruto</label>
        <input name='gross-income' id='gross-income' defaultValue={0} type="number" min="0" ref={grossIncomeRef}/>

        <br />

        <label style={{backgroundColor: 'darkblue'}} htmlFor="tax">Porcentaje de impuestos</label>
        <input
        id="tax"
        name="tax"
        type="number"
        defaultValue="10"
        min="0"
        max="100"
        ref={taxPercentRef}
        />

        <br />

        <button onClick={getNetIncome}>Calcular sueldo neto</button>
    </div>
  )
}

export default CodeTaxCalculator