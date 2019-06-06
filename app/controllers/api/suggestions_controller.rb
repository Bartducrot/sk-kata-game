# frozen_string_literal: true

module Api
  class SuggestionsController < ApplicationController
    def index 
      render json: {
        suggestions: Suggestion.all.map(&:attributes)
      }
    end

    def create
      new_suggestion = Suggestion.create!(suggestion_params)
      render json: { suggestion: new_suggestion.attributes }
    end

    private

    def suggestion_params
      params.require(:suggestion).permit(:name, :description, :category, :kata_leader)
    end
  end
end