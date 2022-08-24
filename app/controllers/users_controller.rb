class UsersController < ApplicationController # defining the controller class

  def login # starts the login function 
    # in every single request, there exists the params hash.
    # it contains all the parameters of the request definition
    user = User.find_by!(email: params[:email]) 
    #create a user varialblee that is returned from the databse.
    #params is a hash that exists by default in every Rails request
    if user && user.password_digest == params[:password]
      render json: user, status: :ok
    else
      render json: {error: 'Invalid email password'}, status: 404 # render is a function for Rails controllers. json: is a type of data we can render...status: is technicalle optionall but allows us to specifcy http responses CODES
        end
  end
end
