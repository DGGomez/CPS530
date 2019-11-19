class StoreFrontController < ApplicationController
  def index
	  @items = StoreItem.all  
  end

  def list
      @items = StoreItem.all
  end

  def show
      @item = StoreItem.find(params[:id])
  end

  def update
      @item = StoreItem.find(params[:id])
      
      if @item.update_attributes(book_param)
         redirect_to :action => 'show', :id => @item
      end
    end
 #       else
 #        @categories = Subject.all
 #        render :action => 'edit'
 #     end
 #  end
	
 # def show_subjects
 #     @category = Subject.find(params[:id])
 #  end

end

