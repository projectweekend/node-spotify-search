var http = require( 'http' );

module.exports = function () {

    var httpOptions = {
        hostname: "ws.spotify.com",
        path: ""
    };

    var buildPathString = function ( searchType, searchText, pageNumber ) {
        var path = "/search/1/" + searchType + ".json?q=" + encodeURIComponent( searchText );
        if ( pageNumber ) {
            path += "&page=" + pageNumber;
        }
        return path;
    };

    var apiHttpRequest = function ( callback ) {
        var responseData = "";
        var jsonData = "";
        http.get( httpOptions, function ( spotifyResponse ) {
            spotifyResponse.on( 'data', function ( chunk ) {
                responseData += chunk;
            } );
            spotifyResponse.on( 'end', function () {
                try {
                    jsonData = JSON.parse( responseData );
                } catch( e ) {
                    return callback( e, responseData );
                }
                return callback( null, jsonData );
            } );
            spotifyResponse.on( 'error', function ( err ) {
                return callback( err );
            } );
        } );
    };

    return {
         album: function ( query, page, callback ) {
            httpOptions.path = buildPathString( 'album', query, page );
            return apiHttpRequest( callback );
         },
         artist: function ( query, page, callback ) {
            httpOptions.path = buildPathString( 'artist', query, page );
            return apiHttpRequest( callback );
         },
         track: function ( query, page, callback ) {
            httpOptions.path = buildPathString( 'track', query, page );
            console.log( httpOptions.path );
            return apiHttpRequest( callback );
         },
         lookup: function ( uri, extras, callback ) {
            var path = "/lookup/1/.json?uri=" + uri;
            if ( extras ) {
                path += "&extras=" + extras.join();
            }
            httpOptions.path = path;
            return apiHttpRequest( callback );
         }
    };

};
