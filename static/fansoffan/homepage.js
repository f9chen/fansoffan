var CoverPhoto = React.createClass({
  render: function () {
    return (
        <div className="cover-image"/>
    )
  }
});

var CoverText = React.createClass({
  render: function () {
    return (
       <div className="cover-text">
          <div className="main-text">Fan's secret recipes</div>
          <div className="secondary-text">This is a food blog that collects recipes Fan has tried. Follow these
            recipes to feed your loved ones into a fat kitty.
          </div>
        </div>
    )
  }
});

/**
 * @prop imageLink
 * @prop articleTitle
 * @prop articleLink
 * @prop preparationTime
 * @prop cookingTime
 */
var HomePageCard = React.createClass({
  render: function () {
    return (
        <div className="row">
          <div className="col s4 m4">
            <div className="card medium">
              <div className="card-image">
                <img src={this.props.imageLink}/>
              </div>
              <div className="card-content">
                <p>Preparation time: {this.props.preparationTime} </p>
                <p>Cooking time: {this.props.cookingTime} </p>
              </div>
              <div className="card-action">
                <a href={this.props.articleLink}>{this.props.articleTitle}</a>
              </div>
            </div>
          </div>
        </div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
        <div className="content">
          <HomePageCard imageLink="img/honey-glazed-salmon.jpg"
                        articleTitle="Honey Glazed Salmon"
                        articleLink="/"
                        preparationTime="20min"
                        cookingTime="20min"/>
        </div>
    )
  }
});

React.render(<div>
      <NavBar/>
      <CoverPhoto/>
      <CoverText/>
      <Content/>
      <RcFooter/>
    </div>, document.getElementById('container'));
