import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as algoliaSearch from 'algoliasearch'

admin.initializeApp();

const client = algoliaSearch( 'MT2VAQ4QO4', 'e73dee597304c92fdaceb339109cbbb0');
const ALGOLIA_POSTS_INDEX_NAME = 'blog';

exports.indexentry = functions.firestore.document('posts/{postId}').onWrite(
  event => {
    // Initialize db of Algolia
    const index = client.initIndex(ALGOLIA_POSTS_INDEX_NAME);
    const firebaseObject = {
      title: event.after.get('title'),
      post: event.after.data,
      objectID: event.after.id
    };

    if (!firebaseObject.post) {
      index.deleteObject(firebaseObject.objectID, (err) => {
        if (err) throw err
        console.log('Removed')
        return;
      })
      return;
    }

    index.saveObject(firebaseObject, (err, content) => {
      if (err) throw err
      console.log('Data updated')
    })
});
