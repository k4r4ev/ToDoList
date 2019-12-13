import React from "react";

class Form extends React.Component {
    render() {
      return (
        <form>
          <h1>Форма</h1>
          <input type="text" placeholder="your city"/>
          <button>Отправить</button>
        </form>
      )
    }
  }

export default Form;