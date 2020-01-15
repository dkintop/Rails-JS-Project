class FokemonsController < ApplicationController


    def create 
        
        @fokemon = Fokemon.create(fokemon_params)
        render json: @fokemon, status: 200
    end

    def index 
        @fokemon = Fokemon.all
        render json: @fokemon, status: 200
    end

    def destroy
        @fokemon = Fokemon.find(params[:id])
        @fokemon.delete 
        render json: {fokemonId: @fokemon.id}
    end


    private 

    def fokemon_params 
        params.require(:fokemon).permit(:name, :element_type, :hit_points, :attack_points, :avatar)
    end
end
#  t.string "name"
#     t.string "element_type", default: "water"
#     t.integer "hit_points", default: 0
#     t.integer "attack_points", default: 0
#     t.string "avatar", default: "https://i.ytimg.com/vi/OxgKvRvNd5o/maxresdefault.jpg"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false