class ProductBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidUpdate() {
    if(this.state.images.length > 0){
      let that = this;
      this.img1.src = document.URL + "#";
      if(this.state.length > 2){
        this.img2.src = document.URL + "#";
      }
      if(this.state.length > 3){
        this.img3.src = document.URL + "#";
      }
      if(this.state.length > 4){
        this.img3.src = document.URL + "#";
      }
      
      for(let i = 0; i < this.state.images.length; i++){
        let reader = new FileReader();
        
        reader.onload = function (e) {
          if(that.img1.src == document.URL + "#"){
            that.img1.src = e.target.result
          }else if(that.img2.src == document.URL + "#"){
            that.img2.src = e.target.result
          }else if(that.img3.src == document.URL + "#"){
            that.img3.src = e.target.result
          }else if(that.img4.src == document.URL + "#"){
            that.img4.src = e.target.result
          }
        }
        reader.readAsDataURL(this.state.images[i]);
      }
    }
  }

  upload_images(e) {
    this.setState({
      images: e.target.files
    });
  }

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
          <span className="btn btn-primary btn-file"><span className="fileupload-new">Select file</span></span>
          <input type='file' className="invisible" id="imgInp" multiple onChange={this.upload_images.bind(this)}/>
          { this.state.images.length > 0 &&
            <div className="container">
              <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img1 = img; } } />
              { this.state.images.length > 1 &&
                <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img2 = img; } } />
              }
              { this.state.images.length > 2 &&
                <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img3 = img; } } />
              }
              { this.state.images.length > 3 &&
                <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img4 = img; } } />
              }
            </div>
          }
          
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