
const augment = function ( G ) {

	return {

		"with" : function ( ...features ) {

			let H = G ;

			for ( let feature of features ) H = feature( H ) ;

			return H ;

		}

	} ;

} ;

exports.augment = augment ;
