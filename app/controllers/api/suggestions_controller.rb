# frozen_string_literal: true

module Api
  class SuggestionsController < ApplicationController
    def index 
      render json: {
        suggestions: [
          {
            id: 1,
            name: 'truc',
            description: 'Super description',
            created_at: DateTime.current,
            status: 'planned',
            planned_for: '',
            category: 'front',
          },
          {
            id: 2,
            name: 'truc 2',
            description: 'Super description 2',
            created_at: DateTime.current - 1.hours,
            status: 'waiting',
            planned_for: '',
            category: 'back',
          },
          {
            id: 3,
            name: 'truc 3',
            description: 'Super description 3',
            created_at: DateTime.current - 2.hours,
            status: 'refused',
            planned_for: '',
            category: 'front',
          },
          {
            id: 10,
            name: 'truc',
            description: 'Super description',
            created_at: DateTime.current,
            status: 'planned',
            planned_for: '',
            category: 'front',
          },
          {
            id: 20,
            name: 'truc 2',
            description: 'Super description 2',
            created_at: DateTime.current - 1.hours,
            status: 'waiting',
            planned_for: '',
            category: 'presentation',
          },
          {
            id: 30,
            name: 'truc 3',
            description: 'Super description 3',
            created_at: DateTime.current - 2.hours,
            status: 'refused',
            planned_for: '',
            category: 'front',
          },
        ]
      }
    end
  end
end