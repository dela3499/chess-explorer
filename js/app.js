/** @jsx React.DOM */

var FluxMixin = Fluxxor.FluxMixin(React),
    FluxChildMixin = Fluxxor.FluxChildMixin(React)
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var AudioStore = Fluxxor.createStore({
    // This store manages all audio playback
    initialize: function () {
        this.bindActions(
            "TOGGLE_PLAYBACK", this.togglePlayback
        );        
        var store = this; // used to access this scope inside of
    }
});
var App = React.createClass ({
    render: function () {
        return (
            <div id="app">
                <OptionsPanel/>
                <PlayPanel/>
                <MovePanel/>
            </div>
        );
    }
});
var OptionsPanel = React.createClass ({
    render: function () {
        return (
            <div id="options-panel">
                <h1>CHESS EXPLORER</h1>
                <h2>about</h2>
                <h2>help</h2>
            </div>
        );
    }
});
var PlayPanel = React.createClass ({
    componentDidMount: function () {
        var cfg = {
          draggable: true,
          position: 'start',
          showNotation: false
//          onDragStart: onDragStart,
//          onDrop: onDrop,
//          onSnapEnd: onSnapEnd
        };
        board = new ChessBoard('board', cfg);
    },    
    render: function () {
        return (
            <div id="play-panel">
                <div id="board"></div>
            </div>
        );
    }
});
var MovePanel = React.createClass ({
    render: function () {
        return (
            <div id="move-panel">
            </div>
        );
    }
});
var X = React.createClass ({
    render: function () {
        return (
            <div/>
        );
    }
});
var stores = {
    AudioStore: new AudioStore()
};
var actions = {
    audio: {
        togglePlayback: function () {
            this.dispatch("TOGGLE_PLAYBACK", {});
        }
    }
    
};
var flux = new Fluxxor.Flux(stores,actions);
React.renderComponent(
    <App flux={flux}/>,
    document.getElementById('content')
);




