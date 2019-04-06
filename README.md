# Vuex Persist State 🔄
A Vuex plugin to backup and restore stores state to browsers localstorage.

## Features
- Throttles localstorage updates to perserve performance
- Automatic or manual restoration of state
- No dependencies
- Tiny (382B gzip)


## Getting Started
Add the plugin to the store for automatic backup and restore.

```javascript
import persist from 'vuex-persist-state';

const store = new Vuex.Store({
  // ...
  plugins: [persist()]
})
```


## Configuration
The plugin takes a configuration object:

```javascript
  persist({
    // The key used in local storage for storing the backup.
    // Change to avoid conflicts.
    key: '_state',

    // The backup will be run every time the state changes. To 
    // maintain performance the backup will only be written to the 
    // local store once per N milliseconds.
    throttle: 1000,

    // Restore the state from local storage when the plugin is loaded.
    // Set to false if you want manual control over this process.
    restoreOnLoad: true
  })
```


## Manual Restore
For control over when state gets restored:

```javascript
import persist from 'vuex-persist-state';

const store = new Vuex.Store({
  // ...
  plugins: [persist({ restoreOnLoad: false })]
})

// Call the folling function to restore.
// This is typically done in the router before any new actions 
// trigger state in the localstorage to be overwritten.
store.persist.restore();
```


## License
MIT
