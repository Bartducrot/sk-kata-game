class Suggestion < ApplicationRecord
	enum category: %i[back front presentation]
	enum kata_leader: %i[samy seb bart victor celo lola lucas arthur]
end
