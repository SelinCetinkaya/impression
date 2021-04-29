class PostLikesController < ApplicationController
  before_action :set_post_like, only: [:show, :update, :destroy]

  # GET /post_likes
  def index
    @post_likes = PostLike.all

    render json: @post_likes, include: [:is_liked, :user, :post]
  end

  # GET /post_likes/1
  def show
    render json: @post_like, include: [:is_liked, :user, :post]
  end

  # POST /post_likes
  def create
    @post_like = PostLike.new(post_like_params)

    if @post_like.save
      render json: @post_like, status: :created
    else
      render json: @post_like.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /post_likes/1
  def update
    if @post_like.update(post_like_params)
      render json: @post_like
    else
      render json: @post_like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /post_likes/1
  def destroy
    @post_like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_like
      @post_like = PostLike.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_like_params
      params.require(:post_like).permit(:user_id, :post_id, :is_liked)
    end
end
