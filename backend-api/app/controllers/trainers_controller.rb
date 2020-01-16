class TrainersController < ApplicationController


    def create 
        @trainer = Trainer.create(trainer_params)
        render json: @trainer, status: 200
    end

    def index
        @trainers = Trainer.all
        render json: @trainers, status: 200
    end


    

end
