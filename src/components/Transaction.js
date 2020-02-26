import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}<span className="date-added">{transaction.date}</span><span>{sign}&#8377;{Math.abs(transaction.amount)}</span>
      <button onClick={e => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
