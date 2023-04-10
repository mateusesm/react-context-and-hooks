import { useCounterContext } from "../../contexts/CounterContext"
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'

export const Home = () => {
  const [state, actions] = useCounterContext()

  const handleError = () => {
    actions.asyncError()
      .then(resolve => console.log(resolve))
      .catch(error => console.log(`${error.name}: ${error.message}`))
  }

  return (
    <>
      <Heading counter={state.counter} />

      <Button text="Increase 1" onButtonClick={actions.increase} />  
      <Button text="Decrease 1" onButtonClick={actions.decrease} />
      <Button text="Reset" onButtonClick={actions.reset} />
      <Button text="Set 10" onButtonClick={() => actions.setCounter({ counter: 10 })} />
      <Button text="Set 100" onButtonClick={() => actions.setCounter({ counter: 100 })} />

      <Button disabledValue={state.loading} text="Async Increase 1" onButtonClick={actions.asyncIncrease} /> 

      <Button disabledValue={state.loading} text="Async Error" onButtonClick={handleError} />   
      
    </>
  )
}