class ProductBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      name_error: null,
      price_error: null,
      number_error: null,
      length_error: null,
      width_error: null,
      height_error: null,
      weight_error: null,
      show_spinner: false
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
          if(that.img1 && that.img1.src == document.URL + "#"){
            that.img1.src = e.target.result
          }else if(that.img2 && that.img2.src == document.URL + "#"){
            that.img2.src = e.target.result
          }else if(that.img3 && that.img3.src == document.URL + "#"){
            that.img3.src = e.target.result
          }else if(that.img4 && that.img4.src == document.URL + "#"){
            that.img4.src = e.target.result
          }
        }
        reader.readAsDataURL(this.state.images[i]);
      }
    }
  }

  select_file() {
    this.upload_button.click();
  }

  upload_images(e) {
    let new_file_list = [];
    for(let i = 0; i < e.target.files.length; i++){
      if(e.target.files[i].type.includes("image")){
        new_file_list.push(e.target.files[i]);
      }
    }
    this.setState({
      images: new_file_list
    });
  }



  click_submit_button() {
    this.validate_all();
    setTimeout( () => {
      this.upload_product();
    },10);
  }

  upload_product() {
    if(this.state.name_error == null &&
      this.state.price_error == null &&
      this.state.number_error == null &&
      this.state.length_error == null &&
      this.state.width_error == null &&
      this.state.height_error == null &&
      this.state.width_error == null){
      console.log('validation passed');
    }else{
      return;
    }
    let formData = new FormData();
    for(let i = 0; i < this.state.images.length; i++){
      formData.append('photo['+i+']', this.state.images[i]);
    }
    formData.append("name", this.name.value.trim());
    formData.append("price", this.price.value.trim().replace(/\.$/, ""));
    formData.append("number", this.number.value.trim().replace(/\.$/, ""));
    formData.append("length", this.length.value.trim().replace(/\.$/, ""));
    formData.append("width", this.width.value.trim().replace(/\.$/, ""));
    formData.append("height", this.height.value.trim().replace(/\.$/, ""));
    formData.append("weight", this.weight.value.trim().replace(/\.$/, ""));
    formData.append("description", this.description.value.trim());
    formData.append("bottom_id", this.props.bottom_id)
    
    $.ajax({
      url: "/products",
      type: 'post',
      datatype: "json",
      processData: false,
      contentType: false,
      data: formData,
      beforeSend: function(){
        this.setState({
          show_spinner: true
        });
      }.bind(this),
      success: function(data){
        this.setState({
          show_spinner: false
        });
        window.location.href = "/products/" + data.product.id;
      }.bind(this),
      error: function(data){

      }
    });
  }

  // validation
  validate_all() {
    this.validate_name();
    this.validate_price();
    this.validate_number();
    this.validate_length();
    this.validate_width();
    this.validate_height();
    this.validate_weight();
  }

  validate_name() {
    let name_error = null;
    if(this.name.value.trim() == ""){
      name_error = "请输入商品的名字！"
    }
    this.setState({ name_error });
  }

  validate_price() {
    let price_error;
    if(this.price.value.trim() == ""){
     price_error = "请输入大于零的数字，小数点保留两位！";
    }else if(this.price.validity.valid){
     price_error = null;
    }else{
     price_error = "请输入大于零的数字，小数点保留两位！";
    }
    this.setState({ price_error });
  }

  validate_number() {
    let number_error;
    if(this.price.value.trim() == ""){
     number_error = "请输入大于1的整数！";
    }else if(this.number.validity.valid){
     number_error = null;
    }else{
     number_error = "请输入大于1的整数！";
    }
    this.setState({ number_error });
  }

  validate_length() {
    let length_error;
    if(this.length.value.trim() == ""){
     length_error = "请输入大于零的数字，小数点保留两位！";
    }else if(this.length.validity.valid){
     length_error = null;
    }else{
     length_error = "请输入大于零的数字，小数点保留两位！";
    }
    this.setState({ length_error });
  }

  validate_width() {
    let width_error;
    if(this.width.value.trim() == ""){
     width_error = "请输入大于零的数字，小数点保留两位！";
    }else if(this.width.validity.valid){
     width_error = null;
    }else{
     width_error = "请输入大于零的数字，小数点保留两位！";
    }
    this.setState({ width_error });
  }

  validate_height() {
    let height_error;
    if(this.height.value.trim() == ""){
     height_error = "请输入大于零的数字，小数点保留两位！";
    }else if(this.height.validity.valid){
     height_error = null;
    }else{
     height_error = "请输入大于零的数字，小数点保留两位！";
    }
    this.setState({ height_error });
  }

  validate_weight() {
    let weight_error;
    if(this.weight.value.trim() == ""){
     weight_error = "请输入大于零的数字，小数点保留两位！";
    }else if(this.weight.validity.valid){
     weight_error = null;
    }else{
     weight_error = "请输入大于零的数字，小数点保留两位！";
    }
    this.setState({ weight_error });
  }

  render(){
    let required_icon = {
      color: "red",
      fontSize: "16px"
    }
    let name_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.name_error != null
    });
    let price_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.price_error != null
    });
    let number_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.number_error != null
    });
    let length_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.length_error != null
    });
    let width_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.width_error != null
    });
    let height_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.height_error != null
    });
    let weight_field_class = classNames({
      "form-control": true,
      "form-field-has-error": this.state.weight_error != null
    });
    return(
      <div className="container">
        <span className="btn btn-primary btn-file"><span onClick={this.props.display_category_info}>返回</span></span>
        <h4>基本信息</h4>
        <div className="form-group">
          <label>标题<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <input type="text" ref={(input) => { this.name = input}} className={name_field_class} />
          {
            this.state.name_error != null &&
            <div><span>{this.state.name_error}</span></div>
          }
          <br/>
          <label>一口价<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <div className="input-group col-xs-3">
            <span className="input-group-addon">$</span>
            <input type="number" min="0.01" step=".01" ref={(input) => { this.price = input}} className={price_field_class} aria-describedby="basic-addon3" onChange={this.validate_price.bind(this)} />
          </div>
          {
            this.state.price_error != null &&
            <div><span>{this.state.price_error}</span></div>
          }
          <br/>
          <label>商品数量<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
          <div className="input-group col-xs-3">
            <span className="input-group-addon">整数</span>
            <input type="number" min="1" step="1" ref={(input) => { this.number = input}} className={number_field_class} aria-describedby="basic-addon3" onChange={this.validate_number.bind(this)}/>
          </div>
          {
            this.state.number_error != null &&
            <div><span>{this.state.number_error}</span></div>
          }
          <br/>
          <span className="btn btn-primary btn-file"><span className="fileupload-new" onClick={this.select_file.bind(this)}>上传图片</span></span>
          <input type='file' ref={(input) => {this.upload_button = input;}} className="invisible" id="imgInp" multiple onChange={this.upload_images.bind(this)}/>
          { this.state.images.length > 0 &&
            <div className="container">
              <div className="col-xs-6 col-sm-4 col-md-3 mt-1">
                <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img1 = img; } } />
              </div>
              { this.state.images.length > 1 &&
                <div className="col-xs-6 col-sm-4 col-md-3 mt-1">
                  <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img2 = img; } } />
                </div>
              }
              { this.state.images.length > 2 &&
                <div className="col-xs-6 col-sm-4 col-md-3 mt-1">
                  <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img3 = img; } } />
                </div>
              }
              { this.state.images.length > 3 &&
                <div className="col-xs-6 col-sm-4 col-md-3 mt-1">
                  <img className="images_preview"  height="200" width="200" src="#" alt="your image" ref = {(img) => { this.img4 = img; } } />
                </div>
              }
            </div>
          }
          
          <br/>
          <label>商品尺寸</label>
          <div className="form-group">
            <label>长<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
            <div className="input-group col-xs-3">
              <span className="input-group-addon">Inch</span>
              <input type="number" min="0.01" step="0.01" ref={(input) => { this.length = input}} className={length_field_class} aria-describedby="basic-addon3" onChange={this.validate_length.bind(this)}/>
            </div>
            {
              this.state.length_error != null &&
              <div><span>{this.state.length_error}</span></div>
            }
            <label>宽<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
            <div className="input-group col-xs-3">
              <span className="input-group-addon">Inch</span>
              <input type="number" min="0" step="0.01" ref={(input) => { this.width = input}} className={width_field_class} aria-describedby="basic-addon3" onChange={this.validate_width.bind(this)}/>
            </div>
            {
              this.state.width_error != null &&
              <div><span>{this.state.width_error}</span></div>
            }
            <label>高<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
            <div className="input-group col-xs-3">
              <span className="input-group-addon">Inch</span>
              <input type="number" min="0" step="0.01" ref={(input) => { this.height = input}} className={height_field_class} aria-describedby="basic-addon3" onChange={this.validate_height.bind(this)}/>
            </div>
            {
              this.state.height_error != null &&
              <div><span>{this.state.height_error}</span></div>
            }
            <label>重量<i className="fa fa-asterisk fa-lg" style={required_icon} aria-hidden="true"></i>:</label>
            <div className="input-group col-xs-3">
              <span className="input-group-addon">Pound</span>
              <input type="number" min="0" step="0.01" ref={(input) => { this.weight = input}} className={weight_field_class} aria-describedby="basic-addon3" onChange={this.validate_weight.bind(this)}/>
            </div>
            {
              this.state.weight_error != null &&
              <div><span>{this.state.weight_error}</span></div>
            }
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="description">商品描述:</label>
            <textarea className="form-control" rows="5" ref={ (textarea) => this.description = textarea}></textarea>
          </div>
          <div className="form-group">
            <span className="btn btn-primary btn-file"><span className="fileupload-new" onClick={this.click_submit_button.bind(this)}>发布商品</span></span>
          </div>
          { this.state.show_spinner &&
            <div className="spinner">
              <div className="block-center">
                <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}