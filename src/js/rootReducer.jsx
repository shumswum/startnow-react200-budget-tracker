import { combineReducers } from 'redux';
import expense from './components/ExpenseEntries/expenseReducer';
import income from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
  expense,
  income
});

export default rootReducer;