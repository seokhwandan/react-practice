import React, { useCallback } from 'react'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch()
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

export default CounterContainer

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <div>
//       <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   number: state.counter.numbers,
// })
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer)

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer)
