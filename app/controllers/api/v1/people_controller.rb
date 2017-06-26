class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render "index.json.jbuilder"
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio])
    if @person.save
      render "show.json.jbuilder"
    else
      puts "FAIL!!!!!!"
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def destroy
    person = Person.find_by(id: params[:id])
    message = "#{person.name} was deleted"
    person.destroy
    render json: { message: message }
  end

  def update
    @person = Person.find_by(id: params[:id])
    @person.update(name: params[:name], bio: params[:bio])
    render :show
  end

  # def show
  #   @person = Person.find(params[:id])
  #   render "show.json.jbuilder"
  # end
end
