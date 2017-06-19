class MainPageProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  head_to_product(p) {
    location.href = "/products/" + p.id;
  }

  render(){
    let that = this;
    let products = this.props.products.map( (p, index) => {
      return (
        <div key={index} className="col-xs-6 col-sm-3 placeholder" onClick={ () => that.head_to_product(p)}>
          <img src={p.avatar} className="img-circle cursor-pointer" alt="Generic placeholder thumbnail" />
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