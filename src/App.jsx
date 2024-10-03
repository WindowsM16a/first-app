const App = () => {
  const name = 'John';
  const x = 10;
  const y = 5;
  const names = ['Brad', 'Harry', 'Jo', 'Sara'];
  const loggedIn = true;


  return (
    <>
      <div className="text-5xl">App</div>
      <p>{name}</p>
      <p>
        the sum of {x} and {y} is {x+y}
      </p>
      <ul>
        {names.map((name, index) => (  
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>hi bitch</h1> : <h1>hi nigga</h1> }
    </>
  )
};

export default App;

