class ProductBasicInfo extends React.Component {
  render(){
    let required_icon = {
      color: "red",
      fontSize: "16px"
    }
    return(
      <div className="container">
        <h4>基本信息</h4>
        <div className="form-group">
          <label>标题<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <input type="text" className="form-control" />
          <br/>
          <label>一口价<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <input type="text" className="form-control" />
          <br/>
          <label>商品数量<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <input type="text" className="form-control" />
          <br/>
          <label className="btn btn-primary" htmlFor="my-file-selector">
            <input id="my-file-selector" type="file" />
              Button Text Here
          </label>
          <br/>
          <label>商品尺寸<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <label>长</label><input type="text" className="form-control" />
          <label>宽</label><input type="text" className="form-control" />
          <label>高</label><input type="text" className="form-control" />
          <br/>
          <label>商品描述</label>
          <textarea></textarea>
        </div>
      </div>
    )
  }
}