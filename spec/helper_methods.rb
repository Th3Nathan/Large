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
    
    def valid_comment_params 
        {author_id: user.id, story_id: 1, body: "valid comment body"}
    end 

    def invalid_params
        { bad: 'justhaxingyaserver' }
    end 
end 