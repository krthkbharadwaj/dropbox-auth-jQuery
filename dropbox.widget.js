jQuery(document).ready(function($) {
    var client = new Dropbox.Client({ 'key' : 'Your-App-Key-Of-DropBox' });
    client.authenticate();
    client.readdir('/',function(status,reply){
      for(var i=0;i<=reply.length;i++){
        client.makeUrl('/'+reply[i], {
          downloadHack: true
        }, function(error, data) {
                    if (error) {
                        console.log(error); // Something went wrong.
                    }
                    console.log(data.url);
        });
      }
  });
});
