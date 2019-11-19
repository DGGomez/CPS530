require 'test_helper'

class StoreFrontControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get store_front_index_url
    assert_response :success
  end

end
