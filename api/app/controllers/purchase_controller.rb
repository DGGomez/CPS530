class PurchaseController < ApplicationController
  respond_to :html, :json
  def list
  	respond_with Purchase.all	
  end

  def view
	respond_with Purchase.find_by(params[:user])
  end
  
  def create
	respond_with Purchase.create(purchase_params)
  end

  def purchase_params
	  params.permit(:user, :item, :quantity)
  end	  

end