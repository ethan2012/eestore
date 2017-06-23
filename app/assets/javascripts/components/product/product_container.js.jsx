class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render(){
    let required_icon = {
      color: "black",
      fontSize: "16px"
    }
    return(
      <div className="container">
        <span className="btn btn-primary btn-file"><span onClick={ () => {
          if(this.props.currentUserId){
            window.location.href= "/users/" + this.props.currentUserId;
          }else{
            window.location.href= "/";
          }
        }}>返回</span></span>
        <h4>基本信息</h4>
        <div className="form-group">
          <p><label>总类: {this.props.category.middle.name} -> {this.props.category.bottom.name}</label></p>
          <p><label>标题: {this.props.product.name}</label></p>
          <p><label>一口价: {this.props.product.price}</label></p>
          <p><label>商品数量: {this.props.product.number}</label></p>
        </div>
        { this.props.images.length > 0 &&
          <div className="container">
            {this.props.images.map((image, index) => {
              return (
                <div key={index} className="col-xs-6 col-sm-4 col-md-3 mt-1">
                  <img className="images_preview"  height="200" width="200" src={image} alt="your image" />
                </div>
              )
            })}
          </div>
        }
        <br/>
        <label>商品尺寸</label>
        <div className="form-group">
          <p><label>长: {this.props.info.length} Inch</label></p>
          <p><label>宽: {this.props.info.width} Inch</label></p>
          <p><label>高: {this.props.info.height} Inch</label></p>
          <p><label>重: {this.props.info.height} Pound</label></p>
          <p><label>商品描述: {this.props.info.description} </label></p>
        </div>
      </div>
    )
  }
}