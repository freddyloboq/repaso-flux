const Card = () => {
  return (
    <>
      <h1>Ir a la lista de tareas</h1>
      <div className="card" style={{"width": "18rem;"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </>
  );
};

export default Card;
