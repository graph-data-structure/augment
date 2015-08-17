
var itertools = require( "aureooms-js-itertools" ) ;
var cardinality = require( "aureooms-js-cardinality" ) ;

var dll = require( "aureooms-js-dll" ) ;
var adjacencylist = require( "aureooms-js-adjacency-list" ) ;

var labeled = require( "aureooms-js-graph-labeled" ) ;
var sugar = require( "aureooms-js-graph-sugar" ) ;
var spec = require( "aureooms-js-graph-spec" ) ;

var List = dll.DoublyLinkedList ;
var _MultiGraph = adjacencylist.MultiGraph( List ) ;
var MultiGraph = graphaugment.augment( _MultiGraph ).with( labeled.label , sugar.add_missing_vertices ) ;

spec.MultiGraph( "Augmented MultiGraph" , MultiGraph ) ;

test( "augment" , function ( assert ) {

	var G = new MultiGraph( ) ;
	assert.equal( cardinality.len( G.vitr( ) ) , 0 ) ;
	assert.equal( cardinality.len( G.eitr( ) ) , 0 ) ;

	G.eadd( 1 , 2 ) ;
	assert.equal( cardinality.len( G.vitr( ) ) , 2 ) ;
	assert.equal( cardinality.len( G.eitr( ) ) , 1 ) ;

	G.eadd( 2 , 3 ) ;
	assert.equal( cardinality.len( G.vitr( ) ) , 3 ) ;
	assert.equal( cardinality.len( G.eitr( ) ) , 2 ) ;

	G.vdel( 2 ) ;
	assert.equal( cardinality.len( G.vitr( ) ) , 2 ) ;
	assert.equal( cardinality.len( G.eitr( ) ) , 0 ) ;

} ) ;


