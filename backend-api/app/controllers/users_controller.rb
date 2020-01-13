class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, status: 200
    end
       
   def create
    @user =  User.new(user_params)
    if @user.save
        render json: @note, status:200
   end




   private

   def user_params
        params.require(:user).permit(:username, :password)
   end
end
end
