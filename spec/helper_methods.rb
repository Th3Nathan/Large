module Helpers
    def json 
        JSON.parse(response.body)
    end 

    def login 
        controller.view_context.login(user)
    end  

    def valid_story_params(author_id)
        {
          title: "sample Story",
          description: "sample story description",
          body: "I am a story blah blah blah",
          author_id: author_id,
          date: Date.new,
        }
    end 
end 