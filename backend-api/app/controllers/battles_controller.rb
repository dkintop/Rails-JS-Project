class BattlesController < ApplicationController


    def create
        @battle = Fokemon.create(battle_params)
        render json: @fokemon, status: 200
    end


    private

    def fokemon_params 
        params.require(:battle).permit(:challenger, :winner, :fokemon_id)
    end

end
# integer "fokemon_id"
#     t.integer "challenger"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.string "winner"