class MainPageProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.products);
    let products = this.props.products.map( (p, index) => {
      return (
        <div key={index} className="col-xs-6 col-sm-3 placeholder">
          <img src={p.avatar} width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
          <h4>{p.name}</h4>
        </div>
      )
    });

    return(
      <div className="row placeholders">
        {products}
      </div>
    )
  }
}