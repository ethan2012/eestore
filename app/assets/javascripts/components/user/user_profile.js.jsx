class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let fontStyle = {
      fontSize:"30px"
    }
    let textDecorateStyle = {
      textDecoration: "none"
    }
    return(
      <div>
        <div>
          <span className="panel-title" style={fontStyle}> 
            <small>邮箱：</small> 
            <i className="fa fa-check text-success" aria-hidden="true" data-toggle="tooltip" data-placement="bottom"></i>
          </span>
          <div className="pull-right">
              <a href="#" style={textDecorateStyle}>
              <button className="btn btn-success" type="button" aria-haspopup="true" aria-expanded="true" onClick={this.set_profile.bind(this)}>
                  设置个人信息
              </button>
              </a>
          </div>
        </div>
        <p>
          <span className="panel-title" style={fontStyle}> <small>地址：</small> </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> <small>姓名：</small> </span>
        </p>
        <p>
          <span className="panel-title" style={fontStyle}> <small>证件号码：</small> </span>
        </p>
      </div>
    )
  }
}