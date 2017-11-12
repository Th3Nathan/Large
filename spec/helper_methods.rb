module Helpers
    def json 
        JSON.parse(response.body)
    end 

    def login 
        controller.view_context.login(user)
    end  
end 