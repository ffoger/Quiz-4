class Api::V1::CompaniesController < ApplicationController

  def index
    @companies = Company.order(created_at: :desc)
  end

end
