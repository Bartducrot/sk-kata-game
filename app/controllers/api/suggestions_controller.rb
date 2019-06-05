# frozen_string_literal: true

module Api
  class SuggestionsController < ApplicationController
    def index 
      render json: {
        suggestions: Suggestion.all.map(&:attributes)
      }
    end
  end
end