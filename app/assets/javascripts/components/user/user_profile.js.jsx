class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    let that = this;
    this.state = {
      edit_mode: false,
      images: [],
      previous_images: that.props.user.id_images,
      show_spinner: false,
      image_length_error: false,
      address: that.props.user.address
    }
  }

  componentDidUpdate() {
    if(this.state.images.length > 0){
      let that = this;
      this.img1.src = document.URL + "#";
      if(this.state.images.length > 1){
        this.img2.src = document.URL + "#";
      }
      
      for(let i = 0; i < this.state.images.length; i++){
        let reader = new FileReader();
        
        reader.onload = function (e) {
          if(that.img1 && that.img1.src == document.URL + "#"){
            that.img1.src = e.target.result
          }else if(that.img2 && that.img2.src == document.URL + "#"){
            that.img2.src = e.target.result
          }
        }
        reader.readAsDataURL(this.state.images[i]);
      }
    }
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
    if(new_file_list.length > 0){
      this.setState({
        image_error: null
      });
    }
  }

  select_file() {
    this.upload_button.click();
  }

  set_profile() {
    console.log("set up profile");
    this.setState({
      edit_mode: true
    });
  }

  upload_profile() {
    console.log("upload profile");

    if(this.state.images.length > 0 && this.state.images.length != 2){
      this.setState({
        image_length_error: true
      });
      return;
    }

    let formData = new FormData();
    for(let i = 0; i < this.state.images.length; i++){
      formData.append('photo['+i+']', this.state.images[i]);
    }
    formData.append('email', this.email.value.trim());
    formData.append('address', this.address.value.trim());
    formData.append('name', this.name.value.trim());
    formData.append('id_number', this.id_number.value.trim());
    $.ajax({
      url: "/users/" + this.props.user.id,
      type: 'put',
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
        location.reload();
      }.bind(this),
      error: function(data){

      }
    });
  }

  change_address() {
    this.setState({
      address: event.target.value
    });
  }

  render(){
    let fontStyle = {
      fontSize:"30px"
    }
    let textDecorateStyle = {
      textDecoration: "none"
    }
    console.log(this.props.user);
    return(
      <div>
        <div>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">邮箱:</span> 
          </span>
          <div className="pull-right">
            {
              !this.state.edit_mode &&
              <a href="#" style={textDecorateStyle}>
                <button id="update_profile" className="btn btn-success" type="button" aria-haspopup="true" aria-expanded="true" onClick={this.set_profile.bind(this)}>
                  设置个人信息
                </button>
              </a>
            }
          </div>
        </div>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">
              {!this.state.edit_mode && <span className="panel-title">{this.props.user.email}</span>}
              {this.state.edit_mode && <input type="text" ref={(input) => { this.email = input}} className="panel-title full-width" defaultValue={this.props.user.email}  />}
            </span> 
            <i className="fa fa-check text-success hidden" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"></i>
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">地址：</span> 
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">
              {!this.state.edit_mode && <span className="panel-title">{this.props.user.address}</span>}
              {this.state.edit_mode && <textarea className="panel-title full-width" rows="5" value={this.state.address} onChange={this.change_address.bind(this)} ref={(input) => { this.address = input}}></textarea> }
            </span> 
            <i className="fa fa-check text-success hidden" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"></i>
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">姓名：</span> 
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">
              {!this.state.edit_mode && <span className="panel-title">{this.props.user.full_name}</span>}
              {this.state.edit_mode && <input type="text" className="panel-title full-width" defaultValue={this.props.user.full_name} ref={(input) => { this.name = input}} />}
            </span> 
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">证件号码：</span> 
          </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> 
            <span className="panel-title">
              {!this.state.edit_mode && <span className="panel-title">{this.props.user.id_number}</span>}
              {this.state.edit_mode && <input type="text" className="panel-title full-width" defaultValue={this.props.user.id_number} ref={(input) => { this.id_number = input}} />}
            </span> 
          </span>
        </p>
        {
          this.state.edit_mode &&
          <span className="btn btn-primary btn-file"><span className="fileupload-new" onClick={this.select_file.bind(this)}>上传身份证</span></span>
        }
        <input type='file' ref={(input) => {this.upload_button = input;}} className="invisible" id="imgInp" multiple onChange={this.upload_images.bind(this)}/>
        { this.state.images.length > 0 &&
          <div className="container">
            <div className="col-xs-12 col-sm-4 col-md-3 mt-1 mb-2">
              <img className="images_preview image_middle"  height="100" width="200" src="#" alt="your image" ref = {(img) => { this.img1 = img; } } />
            </div>
            { this.state.images.length > 1 &&
              <div className="col-xs-12 col-sm-4 col-md-3 mt-1 mb-2">
                <img className="images_preview image_middle"  height="100" width="200" src="#" alt="your image" ref = {(img) => { this.img2 = img; } } />
              </div>
            }
          </div>
        }
        { (this.state.images.length == 0 && this.state.previous_images.length > 0 )&&
          <div className="container">
            <div className="col-xs-12 col-sm-4 col-md-3 mt-1 mb-2">
              <img className="images_preview image_middle"  height="100" width="200" src={this.state.previous_images[0]} alt="your image" ref = {(img) => { this.img1 = img; } } />
            </div>
            { this.state.previous_images.length > 1 &&
              <div className="col-xs-12 col-sm-4 col-md-3 mt-1 mb-2">
                <img className="images_preview image_middle"  height="100" width="200" src={this.state.previous_images[1]} alt="your image" ref = {(img) => { this.img2 = img; } } />
              </div>
            }
          </div>
        }
        {
          this.state.image_length_error &&
          <div><span>请上传两张身份证照片，本人手持证件照及证件清晰照</span></div>
        }
        <br/>
        {
          this.state.edit_mode &&
          <a href="#" style={textDecorateStyle}>
            <button className="btn btn-success" type="button" aria-haspopup="true" aria-expanded="true" onClick={this.upload_profile.bind(this)}>
              确认上传
            </button>
          </a>
        }
        { this.state.show_spinner &&
          <div className="spinner">
            <div className="block-center">
              <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
            </div>
          </div>
        }
      </div>
    )
  }
}