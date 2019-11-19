class PurchasesController < ApplicationController
  respond_to :html, :json
  def index
    @purchases = Purchase.all	
  end

  def create
	@purchase = Purchase.create(purchase_params)
  end

  def show
    @purchase = Purchase.where(user: params[:user])
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @purchase }
    end
  end

  def destroy
  end

  private
  def purchase_params
	  params.require(:purchases).permit(:user, :item, :quantity)
  end	  
end