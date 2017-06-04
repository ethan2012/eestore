class UserProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let required_icon = {
      color: "black",
      fontSize: "16px"
    }
    return(
      <div className="container">
        <span className="btn btn-primary btn-file"><span onClick={ () => {window.location.href= "/users/" + this.props.currentUserId }}>返回</span></span>
        <h4>您发布的商品列表，点击进入</h4>
        {
          this.props.products.map( (p, index) => {
            return (
              <div key={index}><a href={"/products/" + p.id}>{p.name}</a></div>
            )
          })
        }
      </div>
    )
  }
}