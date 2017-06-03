class PublishContainer extends React.Component {
  constructor(props) {
    super(props);
    let that = this;
    this.state = {
      display_basic_info: true,
      middle_id: this.props.middles[0].id, // take the first middle category as default
      bottom_id: this.props.bottoms.filter((bottom) => {return bottom.category_middle_id == that.props.middles[0].id})[0].id, //take the first bottom category as default
      middles: this.props.middles.map((middle) => {return {name: middle.name, id: middle.id, level: "middle"} }),
      bottoms: this.props.bottoms.map((bottom) => {return {name: bottom.name, id: bottom.id, level: "bottom", category_middle_id: bottom.category_middle_id}})
    }
  }

  renderItem(category, key) {
    if(category.level == "middle"){
      let liClass = classNames({
        'list-group-item': true,
        'cursor-pointer': true,
        'active': category.id == this.state.middle_id
      });
      return <li key={key} className={liClass} onClick={() => this.category_click(category)}>{category.name}</li>;
    }else{
      let liClass = classNames({
        'list-group-item': true,
        'cursor-pointer': true,
        'active': category.id == this.state.bottom_id
      });
      return <li key={key} className={liClass} onClick={() => this.category_click(category)}>{category.name}</li>;
    }
  }

  category_click(category) {
    if(category.level == "middle"){
      let bottoms = this.state.bottoms.filter((bottom) => {return bottom.category_middle_id == category.id});
      this.setState({
        middle_id: category.id,
        bottom_id: bottoms[0].id
      });
    }else{
      this.setState({
        bottom_id: category.id
      });
    }
  }

  display_basic_info() {
    this.setState({
      display_basic_info: true
    });
  }

  display_category_info() {
    this.setState({
      display_basic_info: false
    });
  }

  render(){
    let that = this;
    let bottoms = this.state.bottoms.filter((bottom) => {return bottom.category_middle_id == that.state.middle_id});
    return(
      <div>
        {!this.state.display_basic_info && 
          <div>
            <div className="container">
              <div className="col-xs-6 col-centered">
                <h4>选择您的类别</h4>
              </div>
            </div>
            <div className="container col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h5>总类</h5>
              {this.state.middles.map(function(middle, index) {
                return that.renderItem(middle,index)
              })}
            </div>
            <div className="col-xs-12 hidden-sm hidden-md hidden-lg"><hr/></div>
            <div className="container col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h6>分类</h6>
              {bottoms.map(function(bottom, index) {
                return that.renderItem(bottom,index)
              })}
            </div>
            <div className="clearfix"></div>
            <div><hr/></div>
            <div className="container text-center">
              <button type="button" className="btn btn-primary" onClick={this.display_basic_info.bind(this)}>我已阅读以上规则，发布宝贝</button>
            </div>
          </div>
        }
        {this.state.display_basic_info && 
          <ProductBasicInfo 
            bottom_id = {this.state.bottom_id}
            display_category_info = {this.display_category_info.bind(this)}
          />
        }
      </div>
    )
  }
}