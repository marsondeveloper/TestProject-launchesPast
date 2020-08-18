export const launchesAPI = {
    getLaunches(inputText){
        return (
            {
              method: 'POST',
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                  query: `query getLaunches($launch_year: String) {
                    launchesPast(limit: 10, find: {launch_year: $launch_year}) {
                      mission_name
                      launch_date_local
                      launch_site {
                        site_name_long
                      }
                      links {
                        flickr_images
                      }
                      rocket {
                        rocket_name
                      }
                      id
                    }
                  }`, variables: {
                    launch_year: inputText
                  }   
              }), 
            }
          )
    }
}