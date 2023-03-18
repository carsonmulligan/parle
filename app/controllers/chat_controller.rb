class ChatController < ApplicationController
  def index
    @conversation = []
  end

  def create
    input = params[:input]
    response = FrenchLanguageModel.generate_response(input)
    @conversation << { input: input, response: response }

    render :index
  end
end
