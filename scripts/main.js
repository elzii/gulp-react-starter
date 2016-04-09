/**
 * React Modueles
 */
var React       = require('react'),
    ReactDOM    = require('react-dom'),
    ReactRouter = require('react-router'),
    Catalyst    = require('react-catalyst');


/**
 * NPM Modules
 */
var createBrowserHistory = require('history/lib/createBrowserHistory'),
    Rebase               = require('re-base'),
    base                 = Rebase.createClass('https://resplendent-inferno-7214.firebaseio.com/');

/**
 * Routing Modules (Mixins)
 */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;



/**
 * App
 * <App/>
 */
var App = React.createClass({

  mixins: [Catalyst.LinkedStateMixin],


  /**
   * React LifeCycle Methods
   *
   * getInitialState
   * componentDidMount
   * componentWillUpdate
   */
  getInitialState: function() {
    return {
      
    }
  }, 

  /**
   * Component Did Mount
   * 
   * Invoked once, only on the client (not on the server), immediately after the 
   * initial rendering occurs. At this point in the lifecycle, you can access any 
   * refs to your children (e.g., to access the underlying DOM representation). 
   * The componentDidMount() method of child components is invoked before that 
   * of parent components.
   */
  componentDidMount: function() {
   
  },

  /**
   * Component Will Update
   * 
   * Invoked immediatly before rendering when new props or state are being received. 
   * This method is not called for the initial render. Use this as an ooportunity to 
   * perform preparation before an update occurs.
   */
  componentWillUpdate: function(nextProps, nextState) {
    
  },

  




  render: function() {
    return (
      <div>App</div>
    )
  }

})








/**
 * NotFound
 * <NotFound/>
 */
var NotFound = React.createClass({

  render: function() {
    return (
      <h1>Not Found</h1>
    )
  }

})




/**
 * Routes
 */
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)




ReactDOM.render(routes, document.querySelector('#main'))