	const [{ Component: C }, {render: r}] = [React, ReactDOM];
    
    class Stater extends C {
     constructor() {
       super();
       this.state = {v: "Hey! Мы связаны!"}; 
     }
     
     change({target: { value: v }}) {
       this.setState({ v }); 
     }
     
     render() {
       return (<div>
         <input value={ this.state.v } onChange={this.change.bind(this)} />
         <input value={ this.state.v } onChange={this.change.bind(this)} />
       </div>); 
     }
    }  
    
    r(
      <Stater  />,
      document.querySelector('.cont')
    );