A Node.js module for using the Spotify Metadata Search API. Detailed information about the responses and their structure can be found in the [Spotify documentation](https://developer.spotify.com/technologies/web-api/).

### Install it

~~~javascript
npm install spotify-metadata-search
~~~

### Require it

~~~javascript
var SpotifySearch = require( 'spotify-metadata-search' );
~~~

### Search Tracks

~~~javascript
var search = SpotifySearch();

// This is the string you want to search for
var searchText = "whatever";

// Use this to page through the Spotify response
var optionPageNumber = 2;

search.track( searchText, optionPageNumber, function ( err, data ) {
    if ( err ) {
        // handle error
    }
    // 'data' contains a complete Spotify Track search JSON response
} );
~~~

### Search Albums

~~~javascript
var search = SpotifySearch();

// This is the string you want to search for
var searchText = "whatever";

// Use this to page through the Spotify response
var optionPageNumber = 2;

search.album( searchText, optionPageNumber, function ( err, data ) {
    if ( err ) {
        // handle error
    }
    // 'data' contains a complete Spotify Track search JSON response
} );
~~~

### Search Artists

~~~javascript
var search = SpotifySearch();

// This is the string you want to search for
var searchText = "whatever";

// Use this to page through the Spotify response
var optionPageNumber = 2;

search.artist( searchText, optionPageNumber, function ( err, data ) {
    if ( err ) {
        // handle error
    }
    // 'data' contains a complete Spotify Track search JSON response
} );
~~~

### Lookup By URI

~~~javascript
var search = SpotifySearch();

var spotifyURI = "spotify:track:1hP6wr5qYhXy5Am2tvndrZ";

search.lookup( spotifyURI, null, function ( err, data ) {
    if ( err ) {
        // handle error
    }
    // 'data' contains a complete Spotify lookup JSON response
} );
~~~

The second parameter for `lookup` can be an array of words that are passed as **extras** to Spotify. These only apply if you pass in an **artist** or and **album** URI. For more information about **extras** check out the [Spotify Metadata API documentation](https://developer.spotify.com/technologies/web-api/lookup/).
