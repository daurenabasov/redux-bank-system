import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCustomerAction, removeCustomerAction } from "./Store/customReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addMoney = (n) => {
    // if (prompt === isNaN()) return alert("Введите сумму")

    dispatch({ type: "addCash", payload: n });
  };

  const getMoney = (n) => {
    dispatch({ type: "getCash", payload: n });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
        // dispatch({ type: "addCustom", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
    // dispatch({ type: "removeCustomer", payload: customer.id });
  };

  return (
    <div className="App">
      {/* Cash */}

      <h1>{cash}</h1>
      <button onClick={() => addMoney(Number(prompt()))}>Add count</button>
      {/* <button onClick={() => getMoney(Number(prompt({prompt == isNaN ? return alert("Введите сумму, а не число")})))}>Get count</button> */}
      <button onClick={() => getMoney(Number(prompt()))}>Get count</button>

      {/* Client */}

      <button onClick={() => addCustomer(prompt())}>Add Client</button>
      <button onClick={() => removeCustomer()}>Delete Client</button>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: "20px" }}>
          Клиенты отсутсвуют
        </div>
      )}
    </div>
  );
}

export default App;
